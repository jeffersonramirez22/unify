
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Header from "./components/Header";

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
      </Routes>
    </>
  );
}

export default App;

