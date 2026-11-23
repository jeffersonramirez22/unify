import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
