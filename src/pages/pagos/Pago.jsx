
import { useRef, useState } from "react";
import "./Pago.css";

function Pago({ compra, pagar, volver }) {
  const [titular, setTitular] = useState("");
  const [numero, setNumero] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [procesando, setProcesando] = useState(false);

  const envioIniciado = useRef(false);

  function procesarPago(e) {
    e.preventDefault();

    if (envioIniciado.current) return;

    setError("");

    if (!compra) {
      setError("No se encontraron los datos de la compra.");
      return;
    }

    const cantidad = Number(compra.cantidad);
    const precio = Number(compra.precio);
    const total = Number(compra.total);

    if (
      !Number.isInteger(cantidad) ||
      cantidad <= 0 ||
      !Number.isFinite(precio) ||
      precio <= 0 ||
      !Number.isFinite(total) ||
      Math.abs(total - cantidad * precio) > 0.01
    ) {
      setError("Los datos de la compra no son válidos.");
      return;
    }

    if (!titular.trim()) {
      setError("Ingresa el nombre del titular.");
      return;
    }

    if (!/^\d{16}$/.test(numero)) {
      setError("Ingresa 16 dígitos de una tarjeta ficticia.");
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      setError("El CVV de prueba debe tener 3 dígitos.");
      return;
    }

    const coincidencia = vencimiento.match(/^(\d{2})\/(\d{2})$/);

    if (!coincidencia) {
      setError("Ingresa el vencimiento con formato MM/AA.");
      return;
    }

    const mes = Number(coincidencia[1]);
    const anio = 2000 + Number(coincidencia[2]);
    const hoy = new Date();

    if (
      mes < 1 ||
      mes > 12 ||
      anio < hoy.getFullYear() ||
      (anio === hoy.getFullYear() && mes < hoy.getMonth() + 1)
    ) {
      setError("La fecha de vencimiento no es válida.");
      return;
    }

    envioIniciado.current = true;
    setProcesando(true);

    setTimeout(() => {
      pagar(compra);
    }, 1500);
  }

  return (
    <main className="pago-container">
      <section className="pago-card">
        <h1>Finalizar compra</h1>

        <p>Pago seguro de demostración UNiFY</p>

        <div className="pago-resumen">
          <h2>{compra?.evento}</h2>

          <p>Zona: {compra?.zona || compra?.tipo}</p>
          <p>Cantidad: {compra?.cantidad}</p>

          <p>
            Precio por boleto: $
            {Number(compra?.precio || 0).toFixed(2)}
          </p>

          <strong>
            Total: ${Number(compra?.total || 0).toFixed(2)}
          </strong>
        </div>

        <form onSubmit={procesarPago}>
          <label htmlFor="titular">
            Nombre del titular
          </label>

          <input
            id="titular"
            value={titular}
            onChange={(e) => setTitular(e.target.value)}
            placeholder="Nombre de prueba"
            autoComplete="off"
            required
            disabled={procesando}
          />

          <label htmlFor="numero">
            Número de tarjeta ficticia
          </label>

          <input
            id="numero"
            value={numero}
            onChange={(e) =>
              setNumero(
                e.target.value.replace(/\D/g, "").slice(0, 16)
              )
            }
            placeholder="16 dígitos de prueba"
            inputMode="numeric"
            maxLength={16}
            autoComplete="off"
            required
            disabled={procesando}
          />

          <div className="pago-datos">
            <div>
              <label htmlFor="vencimiento">
                Vencimiento
              </label>

              <input
                id="vencimiento"
                value={vencimiento}
                onChange={(e) =>
                  setVencimiento(e.target.value.slice(0, 5))
                }
                placeholder="MM/AA"
                maxLength={5}
                autoComplete="off"
                required
                disabled={procesando}
              />
            </div>

            <div>
              <label htmlFor="cvv">CVV ficticio</label>

              <input
                id="cvv"
                value={cvv}
                onChange={(e) =>
                  setCvv(
                    e.target.value.replace(/\D/g, "").slice(0, 3)
                  )
                }
                placeholder="123"
                inputMode="numeric"
                maxLength={3}
                autoComplete="off"
                required
                disabled={procesando}
              />
            </div>
          </div>

          {error && (
            <p className="pago-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="pago-boton"
            disabled={procesando}
          >
            {procesando
              ? "Procesando pago..."
              : "Confirmar pago"}
          </button>
        </form>

        <button
          type="button"
          className="pago-volver"
          onClick={volver}
          disabled={procesando}
        >
          Volver al carrito
        </button>

        <small aria-live="polite">
          {procesando
            ? "Estamos procesando tu compra de demostración..."
            : "Demostración académica: no se realiza ningún cobro real. Utiliza únicamente datos ficticios."}
        </small>
      </section>
    </main>
  );
}

export default Pago;
