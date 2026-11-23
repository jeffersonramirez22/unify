
const iconosCategorias = {
  Conciertos: "♫",
  Teatro: "🎭",
  Deportes: "⚽",
  Cultura: "★",
  Otros: "♟"
};

function formatearFecha(fecha) {
  if (!fecha) return "Fecha por confirmar";

  const [anio, mes, dia] = fecha.split("-").map(Number);

  const fechaLocal = new Date(anio, mes - 1, dia);

  return fechaLocal.toLocaleDateString("es-SV", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function TarjetaEvento({ evento, onSeleccionar }) {
  const precioMinimo = Math.min(
    ...evento.zonas.map((zona) => zona.precio)
  );

  const disponible = evento.estado === "Disponible";

  return (
    <article className="evento-card">
      <div className="evento-imagen-contenedor">
        <img
          src={evento.imagen}
          alt={evento.nombre}
          className="evento-imagen"
        />

        <span
          className={`evento-categoria categoria-${evento.categoria.toLowerCase()}`}
        >
          <span aria-hidden="true">
            {iconosCategorias[evento.categoria] || "★"}
          </span>
          {evento.categoria}
        </span>
      </div>

      <div className="evento-contenido">
        <h2>{evento.nombre}</h2>

        <p className="evento-fecha">
          {formatearFecha(evento.fecha)}
          {evento.hora && ` · ${evento.hora}`}
        </p>

        <p className="evento-lugar">
          {evento.lugar}
        </p>

        <div className="evento-pie">
          <p className="evento-precio">
            Desde ${precioMinimo.toFixed(2)}
          </p>

          <button
            type="button"
            className="evento-boton"
            disabled={!disponible}
            onClick={() => onSeleccionar(evento)}
            aria-label={`Seleccionar ${evento.nombre}`}
            title={
              disponible
                ? "Seleccionar evento"
                : "Próximamente"
            }
          >
            <span aria-hidden="true">➜</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default TarjetaEvento;
