
import { eventosIniciales } from "../../data/eventos";
import TarjetaEvento from "../../components/TarjetaEvento";
import Boton from "../../components/Boton";
import "./Eventos.css";

function Eventos({ seleccionarEvento, volver }) {
  return (
    <main className="eventos-container">
      <header className="eventos-encabezado">
        <div>
          <h1>Descubre experiencias UNiFY</h1>
          <p>Encuentra tu próximo evento favorito.</p>
        </div>

        <Boton
          className="eventos-volver"
          onClick={volver}
        >
          Volver
        </Boton>
      </header>

      <section
        className="eventos-grid"
        aria-label="Catálogo de eventos"
      >
        {eventosIniciales.map((evento) => (
          <TarjetaEvento
            key={evento.id}
            evento={evento}
            onSeleccionar={seleccionarEvento}
          />
        ))}
      </section>
    </main>
  );
}

export default Eventos;
