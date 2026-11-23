
import { useState } from "react";
import EventList from "../components/EventList";
import events from "../data/events";
import "./Events.css";

function Events() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [sortOrder, setSortOrder] = useState("recent");

    const filteredEvents = events.filter((event) => {
        const matchesSearch = event.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "Todos" ||
            event.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const sortedEvents = [...filteredEvents].sort((a, b) => {
        if (sortOrder === "recent") {
            return new Date(b.date) - new Date(a.date);
        }

        return new Date(a.date) - new Date(b.date);
    });

    return (
        <main className="events">
            <section className="events__intro">
                <h1>Descubre tu próximo evento.</h1>

                <p>
                    Encuentra experiencias únicas y consigue tus tiquetes en un solo lugar.
                </p>
            </section>

            <div className="events__search">
                <button type="button">Buscar</button>

                <input
                    type="text"
                    placeholder="Buscar eventos por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="events__toolbar">

                <div className="events__categories">
                    {["Todos", "Conciertos", "Teatro", "Deportes", "Cultura", "Otros"].map(
                        (category) => (
                            <button
                                key={category}
                                type="button"
                                className={selectedCategory === category ? "active" : ""}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        )
                    )}
                </div>

                <div className="events__sort">
                    <label htmlFor="sortOrder">Ordenar por:</label>

                    <select
                        id="sortOrder"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="recent">Más recientes</option>
                        <option value="oldest">Más antiguos</option>
                    </select>
                </div>

            </div>

            <EventList events={sortedEvents} />
        </main>
    );
}

export default Events;
