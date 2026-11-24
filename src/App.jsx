
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Header from "./components/Header";
import events from "./data/events";
import TicketSelection from "./pages/TicketSelection";


function EventDetailRoute() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  return <EventDetail event={event} />;
}


function TicketSelectionRoute() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  return <TicketSelection event={event} />;
}

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home onExplorarEventos={() => navigate("/eventos")} />}
        />

        <Route path="/eventos" element={<Events />} />

        <Route path="/eventos/:id" element={<EventDetailRoute />} />

        <Route
          path="/eventos/:id/tiquetes"
          element={<TicketSelectionRoute />}
        />
      </Routes>
    </>
  );
}

export default App;
