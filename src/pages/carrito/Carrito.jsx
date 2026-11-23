
import { useState } from "react";
import "./Carrito.css";

function Carrito({ evento, continuar, volver }) {
  const [zona, setZona] = useState(
    evento?.zonas?.[0]?.nombre || "General"
  );

  const [cantidad, setCantidad] = useState(1);

  if (!evento || !evento.zonas?.length) {
    return (
      <main className="carrito-container">
        <section className="carrito-card">
          <h1>Evento no disponible</h1>
          <button className="carrito-volver" onClick={volver}>
            Volver a eventos
          </button>
        </section>
      </main>
    );
  }

  const zonaActual = evento.zonas.find(
    (elemento) => elemento.nombre === zona
  );

  const precioUnitario = zonaActual?.precio || 0;
  const disponibilidad = zonaActual?.disponibilidad || 0;
  const total = cantidad * precioUnitario;

  function cambiarZona(nuevaZona) {
    setZona(nuevaZona);
    setCantidad(1);
  }

  function aumentarCantidad() {
    setCantidad((anterior) =>
      Math.min(anterior + 1, 10, disponibilidad)
    );
  }

  function disminuirCantidad() {
    setCantidad((anterior) => Math.max(anterior - 1, 1));
  }

  function continuarCompra() {
    if (
      !zonaActual ||
      disponibilidad < 1 ||
      cantidad > disponibilidad
    ) {
      return;
    }

    continuar({
      evento: evento.nombre,
      categoria: evento.categoria,
      fechaEvento: evento.fecha,
      lugar: evento.lugar,
      imagen: evento.imagen,
      zona: zona,
      tipo: `Entrada ${zona}`,
      cantidad: cantidad,
      precio: precioUnitario,
      total: total
    });
  }

  return (
    <main className="carrito-container">
      <section className="carrito-card">
        <h1>Mi carrito</h1>
        <p>Revisa tu selección antes de continuar.</p>

        <article className="carrito-evento">
          <div>
            <h2>{evento.nombre}</h2>
            <p>{evento.categoria}</p>
            <p>Fecha: {evento.fecha}</p>
            <p>Lugar: {evento.lugar}</p>
            <p>Estado: {evento.estado}</p>
          </div>
        </article>

        <div className="carrito-zona">
          <label htmlFor="zona">
            Selecciona tu zona:
          </label>

          <select
            id="zona"
            value={zona}
            onChange={(e) => cambiarZona(e.target.value)}
          >
            {evento.zonas.map((elemento) => (
              <option
                key={elemento.nombre}
                value={elemento.nombre}
              >
                {elemento.nombre} - ${elemento.precio.toFixed(2)}
              </option>
            ))}
          </select>
        </div>

        <p>
          Disponibilidad: <strong>{disponibilidad}</strong> boletos
        </p>

        <article className="carrito-evento">
          <div>
            <h2>Zona {zona}</h2>
            <strong>
              ${precioUnitario.toFixed(2)} por boleto
            </strong>
          </div>

          <div className="carrito-cantidad">
            <button
              type="button"
              onClick={disminuirCantidad}
              disabled={cantidad <= 1}
            >
              −
            </button>

            <span>{cantidad}</span>

            <button
              type="button"
              onClick={aumentarCantidad}
              disabled={cantidad >= Math.min(10, disponibilidad)}
            >
              +
            </button>
          </div>
        </article>

        <div className="carrito-total">
          <span>Total a pagar:</span>
          <strong>
            ${total.toFixed(2)}
          </strong>
        </div>

        <button
          type="button"
          className="carrito-continuar"
          onClick={continuarCompra}
          disabled={disponibilidad < 1}
        >
          Continuar al pago
        </button>

        {disponibilidad < 1 && (
          <p>No hay boletos disponibles para esta zona.</p>
        )}

        <button
          type="button"
          className="carrito-volver"
          onClick={volver}
        >
          Volver a eventos
        </button>
      </section>
    </main>
  );
}

export default Carrito;
