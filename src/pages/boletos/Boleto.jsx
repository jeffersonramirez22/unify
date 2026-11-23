
import { QRCodeSVG } from "qrcode.react";
import logoUnify from "../../assets/logo-unify.png";
import "./Boleto.css";

function Boleto({ compra, usuario, volver }) {
  if (!compra) {
    return (
      <main className="boleto-container">
        <section className="boleto-card">
          <h1>No hay boletos disponibles</h1>
          <button
            type="button"
            className="boleto-boton"
            onClick={volver}
          >
            Volver al inicio
          </button>
        </section>
      </main>
    );
  }

  const zona = compra.zona || compra.tipo;
  const precio = Number(compra.precio || 0);
  const total = Number(compra.total || 0);

  return (
    <main className="boleto-container">
      <section className="boleto-card">

        <div className="boleto-exito">
          <span aria-hidden="true">✓</span>
          <h1>¡Compra exitosa!</h1>
          <p>Tu pago de demostración fue aprobado.</p>
        </div>

        <div className="boleto-detalle">

          {/* LOGO ORIGINAL DE UNIFY */}
          <header
            className="boleto-encabezado"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0"
            }}
          >
            <img
              className="boleto-logo"
              src={logoUnify}
              alt="Logo UNiFY"
            />
          </header>

          <div className="boleto-separador" />

          <h3>{compra.evento}</h3>
          <p>Zona {zona}</p>

          <div className="boleto-info">
            <div>
              <small>Asistente</small>
              <strong>
                {usuario?.nombre || "Usuario UNiFY"}
              </strong>
            </div>

            <div>
              <small>Zona seleccionada</small>
              <strong>{zona}</strong>
            </div>

            <div>
              <small>Precio por boleto</small>
              <strong>${precio.toFixed(2)}</strong>
            </div>

            <div>
              <small>Cantidad de boletos</small>
              <strong>{compra.cantidad}</strong>
            </div>

            <div>
              <small>Total pagado</small>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <div>
              <small>Código de compra</small>
              <strong>{compra.codigo}</strong>
            </div>

            <div>
              <small>Fecha de compra</small>
              <strong>
                {compra.fecha ||
                  new Date().toLocaleDateString()}
              </strong>
            </div>
          </div>

          <div className="boleto-qr">
            <div className="boleto-qr-marco">
              <QRCodeSVG
                value={`UNIFY|${compra.codigo}|${compra.evento}|${zona}|${compra.cantidad}|${total}`}
                size={180}
                level="H"
                bgColor="#FFFFFF"
                fgColor="#243B64"
                includeMargin={true}
              />

              <strong className="boleto-qr-pie">
                TU EXPERIENCIA UNIFY
              </strong>
            </div>

            <small>
              Escanea tu código de boleto
            </small>
          </div>

          <p className="boleto-nota">
            Presenta este boleto como comprobante
            de tu compra.
          </p>
        </div>

        <button
          type="button"
          className="boleto-boton"
          onClick={volver}
        >
          Volver al inicio
        </button>

      </section>
    </main>
  );
}

export default Boleto;
