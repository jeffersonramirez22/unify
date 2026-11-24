
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventDetail.css";

function EventDetail({ event }) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Descripción");

    if (!event) {
        return <p>Evento no encontrado.</p>;
    }

    const formattedDate = new Date(`${event.date}T12:00:00`)
        .toLocaleDateString("es-SV", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

    return (
        <main className="event-detail">

            <button
                className="event-detail__back"
                onClick={() => navigate("/eventos")}
            >
                ← Volver al listado
            </button>

            <section className="event-detail__main">

                <div className="event-detail__image">
                    <img src={event.image} alt={event.name} />
                </div>

                <div className="event-detail__info">

                    <span className="event-detail__category">
                        {event.category}
                    </span>

                    <h1>{event.name}</h1>

                    <p>{event.description}</p>

                    <p>📅 {formattedDate} · {event.time}</p>

                    <p>📍 {event.location}</p>

                    <span className="event-detail__price">
                        ${event.priceFrom.toFixed(2)}
                    </span>

                </div>

                <aside className="event-detail__purchase">
                    
                    <button
                        type="button"
                        onClick={() => navigate(`/eventos/${event.id}/tiquetes`)}
                    >
                        Comprar tiquetes
                    </button>

                    <p>Compra segura</p>
                    <small>Tus datos y pagos están protegidos.</small>
                </aside>

            </section>

            <section className="event-detail__tabs">

                <nav className="event-detail__tab-buttons">
                    {["Descripción", "Ubicación", "Información adicional"].map(
                        (tab) => (
                            <button
                                key={tab}
                                type="button"
                                className={activeTab === tab ? "active" : ""}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        )
                    )}
                </nav>

                <div className="event-detail__tab-content">

                    {activeTab === "Descripción" && (
                        <>
                            <h3>Sobre el evento</h3>
                            <p>{event.about}</p>
                        </>
                    )}

                    {activeTab === "Ubicación" && (
                        <>
                            <h3>Ubicación del evento</h3>
                            <p>{event.location}</p>
                        </>
                    )}

                    {activeTab === "Información adicional" && (
                        <>
                            <h3>Información adicional</h3>
                            <p>{event.additionalInfo}</p>
                        </>
                    )}

                </div>

            </section>

        </main>
    );
}

export default EventDetail;
