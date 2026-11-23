function EventCard({ event }) {
    return (
        <article className="event-card">
            <div className="event-card__image">
                <img src={event.image} alt={event.name} />
            </div>

            <div className="event-card__content">
                <span className="event-card__category">
                    {event.category}
                </span>

                <h3>{event.name}</h3>

                <p>{event.date} · {event.time}</p>

                <p>{event.location}</p>

                <p>Desde ${event.priceFrom.toFixed(2)}</p>

                <button type="button">
                    Ver evento
                </button>
            </div>
        </article>
    );
}

export default EventCard;

import "./EventCard.css";