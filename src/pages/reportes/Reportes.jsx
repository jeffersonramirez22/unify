
import { useState } from "react";
import { eventosIniciales } from "../../data/eventos";
import "./Reportes.css";

function obtenerBoletos() {
  try {
    const datos = JSON.parse(
      localStorage.getItem("unify_boletos") || "[]"
    );

    return Array.isArray(datos) ? datos : [];
  } catch {
    return [];
  }
}

function Reportes({ volver }) {
  const [boletos, setBoletos] = useState(obtenerBoletos);

  function actualizarReportes() {
    setBoletos(obtenerBoletos());
  }

  const totalBoletos = boletos.reduce(
    (total, compra) =>
      total + Number(compra.cantidad || 0),
    0
  );

  const ingresos = boletos.reduce(
    (total, compra) =>
      total + Number(compra.total || 0),
    0
  );

  const ventasPorEvento = eventosIniciales.map((evento) => {
    const comprasEvento = boletos.filter(
      (compra) => compra.evento === evento.nombre
    );

    return {
      nombre: evento.nombre,
      imagen: evento.imagen,
      cantidad: comprasEvento.reduce(
        (total, compra) =>
          total + Number(compra.cantidad || 0),
        0
      ),
      ingresos: comprasEvento.reduce(
        (total, compra) =>
          total + Number(compra.total || 0),
        0
      )
    };
  });

  const nombresEventos = new Set(
    eventosIniciales.map((evento) => evento.nombre)
  );

  const comprasAnteriores = boletos.filter(
    (compra) => !nombresEventos.has(compra.evento)
  );

  const ventasAnteriores = Object.values(
    comprasAnteriores.reduce((grupos, compra) => {
      const nombre = compra.evento || "Sin nombre";

      if (!grupos[nombre]) {
        grupos[nombre] = {
          nombre,
          imagen: null,
          cantidad: 0,
          ingresos: 0
        };
      }

      grupos[nombre].cantidad += Number(
        compra.cantidad || 0
      );

      grupos[nombre].ingresos += Number(
        compra.total || 0
      );

      return grupos;
    }, {})
  );

  const todasLasVentas = [
    ...ventasPorEvento,
    ...ventasAnteriores
  ];

  const ventasPorFecha = Object.values(
    boletos.reduce((grupos, compra) => {
      const fecha = compra.fecha || "Sin fecha";

      if (!grupos[fecha]) {
        grupos[fecha] = {
          fecha,
          cantidad: 0,
          ingresos: 0
        };
      }

      grupos[fecha].cantidad += Number(
        compra.cantidad || 0
      );

      grupos[fecha].ingresos += Number(
        compra.total || 0
      );

      return grupos;
    }, {})
  );

  const maxEvento = Math.max(
    1,
    ...todasLasVentas.map((evento) => evento.cantidad)
  );

  const maxFecha = Math.max(
    1,
    ...ventasPorFecha.map((periodo) => periodo.cantidad)
  );

  return (
    <main className="reportes-container">
      <section className="reportes-panel">

        <header className="reportes-encabezado">
          <div>
            <h1>Reportes y analítica</h1>
            <p>Resumen de las ventas de UNiFY</p>
          </div>

          <div className="reportes-acciones">
            <button
              type="button"
              onClick={actualizarReportes}
            >
              Actualizar
            </button>

            <button
              type="button"
              onClick={volver}
            >
              Volver
            </button>
          </div>
        </header>

        <section className="reportes-tarjetas">
          <article className="reporte-tarjeta">
            <span>Boletos vendidos</span>
            <strong>{totalBoletos}</strong>
          </article>

          <article className="reporte-tarjeta">
            <span>Ingresos totales</span>
            <strong>${ingresos.toFixed(2)}</strong>
          </article>

          <article className="reporte-tarjeta">
            <span>Compras realizadas</span>
            <strong>{boletos.length}</strong>
          </article>
        </section>

        <section className="reporte-grafico">
          <h2>Ventas por evento</h2>

          <div className="reporte-barras">
            {todasLasVentas.map((evento) => (
              <article
                className="reporte-barra-item"
                key={evento.nombre}
              >
                <div className="reporte-evento-info">
                  {evento.imagen && (
                    <img
                      src={evento.imagen}
                      alt=""
                      className="reporte-evento-imagen"
                    />
                  )}

                  <div>
                    <strong>{evento.nombre}</strong>
                    <small>
                      {evento.cantidad} boletos vendidos
                    </small>
                  </div>
                </div>

                <div className="reporte-barra-fondo">
                  <div
                    className="reporte-barra"
                    style={{
                      width: `${
                        (evento.cantidad / maxEvento) * 100
                      }%`
                    }}
                  />
                </div>

                <div className="reporte-evento-total">
                  <span>
                    {evento.cantidad} boletos
                  </span>

                  <strong>
                    ${evento.ingresos.toFixed(2)}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reporte-grafico">
          <h2>Ventas por periodo</h2>

          {ventasPorFecha.length === 0 ? (
            <p className="reporte-vacio">
              Todavía no hay ventas registradas.
            </p>
          ) : (
            <div className="reporte-barras">
              {ventasPorFecha.map((periodo) => (
                <div
                  className="reporte-barra-item"
                  key={periodo.fecha}
                >
                  <strong>{periodo.fecha}</strong>

                  <div className="reporte-barra-fondo">
                    <div
                      className="reporte-barra reporte-barra-secundaria"
                      style={{
                        width: `${
                          (periodo.cantidad / maxFecha) * 100
                        }%`
                      }}
                    />
                  </div>

                  <div className="reporte-evento-total">
                    <span>
                      {periodo.cantidad} boletos
                    </span>

                    <strong>
                      ${periodo.ingresos.toFixed(2)}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="reportes-nota">
          Los datos corresponden a compras simuladas
          guardadas en este navegador.
        </p>

      </section>
    </main>
  );
}

export default Reportes;
