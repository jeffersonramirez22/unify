
import EventCard from "./EventCard";

function EventList({ events }) {
  return (
    <section className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventList;
