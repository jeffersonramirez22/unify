
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketSelection.css";

function TicketSelection({ event }) {
    const navigate = useNavigate();

    const [quantities, setQuantities] = useState({
        1: 1,
        2: 0,
        3: 0,
    });

    if (!event) {
        return <p>Evento no encontrado.</p>;
    }

    const updateQuantity = (zone, change) => {
        setQuantities((previous) => {
            const current = previous[zone.id] || 0;
            const next = current + change;

            if (next < 0 || next > zone.available) {
                return previous;
            }

            return {
                ...previous,
                [zone.id]: next,
            };
        });
    };

    const selectedTickets = event.zones.reduce(
        (total, zone) => total + (quantities[zone.id] || 0),
        0
    );

    const subtotal = event.zones.reduce(
        (total, zone) =>
            total + zone.price * (quantities[zone.id] || 0),
        0
    );

    const serviceCharge = selectedTickets > 0 ? 3.50 : 0;
    const total = subtotal + serviceCharge;

    const formattedDate = new Date(`${event.date}T12:00:00`)
        .toLocaleDateString("es-SV", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    return (
        <main className="ticket-selection">

            <button
                className="ticket-selection__back"
                onClick={() => navigate(`/eventos/${event.id}`)}
            >
                ← Volver al evento
            </button>

            <h1>Selecciona tus tiquetes</h1>
            <p className="ticket-selection__subtitle">{event.name}</p>

            <div className="ticket-selection__layout">

                <section className="ticket-selection__left">

                    <div className="ticket-selection__event">
                        <img src={event.image} alt={event.name} />

                        <div>
                            <span>{event.category}</span>
                            <h2>{event.name}</h2>
                            <p>📅 {formattedDate}</p>
                            <p>🕒 {event.time}</p>
                            <p>📍 {event.location}</p>
                        </div>
                    </div>

                    <h2 className="ticket-selection__heading">
                        Tipos de entradas
                    </h2>

                    <div className="ticket-selection__zones">

                        {event.zones.map((zone) => (
                            <article
                                key={zone.id}
                                className={`ticket-zone ${quantities[zone.id] > 0 ? "selected" : ""}`}
                            >
                                <div className="ticket-zone__description">
                                    <h3>{zone.name}</h3>
                                    <p>{zone.description}</p>
                                </div>

                                <div className="ticket-zone__price">
                                    ${zone.price.toFixed(2)}
                                    <small> por persona</small>
                                </div>

                                <div className="ticket-zone__quantity">
                                    <label>Cantidad</label>

                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(zone, -1)}
                                            disabled={quantities[zone.id] === 0}
                                        >
                                            −
                                        </button>

                                        <span>{quantities[zone.id]}</span>

                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(zone, 1)}
                                            disabled={quantities[zone.id] >= zone.available}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="ticket-zone__availability">
                                    <small>Disponible:</small>
                                    <strong>{zone.available - quantities[zone.id]}</strong>
                                </div>
                            </article>
                        ))}

                    </div>
                </section>

                <aside className="ticket-summary">

                    <h2>Resumen de compra</h2>

                    <div className="ticket-summary__event">
                        <img src={event.image} alt={event.name} />

                        <div>
                            <h3>{event.name}</h3>
                            <p>{event.category}</p>
                            <small>{formattedDate}</small>
                            <small>{event.time}</small>
                            <small>{event.location}</small>
                        </div>
                    </div>

                    <div className="ticket-summary__totals">
                        <p>
                            Entradas seleccionadas
                            <strong>{selectedTickets}</strong>
                        </p>

                        <p>
                            Subtotal
                            <strong>${subtotal.toFixed(2)}</strong>
                        </p>

                        <p>
                            Cargo por servicio
                            <strong>${serviceCharge.toFixed(2)}</strong>
                        </p>
                    </div>

                    <div className="ticket-summary__total">
                        <span>Total</span>
                        <strong>${total.toFixed(2)}</strong>
                    </div>

                    <button
                        className="ticket-summary__continue"
                        type="button"
                        disabled={selectedTickets === 0}
                    >
                        Continuar al pago
                    </button>

                </aside>

            </div>
        </main>
    );
}

export default TicketSelection;
