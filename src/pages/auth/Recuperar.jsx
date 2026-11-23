
import { useState } from "react";
import "./Auth.css";
import logoUnify from "../../assets/logo-unify.png";

function Recuperar({ irALogin }) {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  function manejarEnvio(e) {
    e.preventDefault();

    setMensaje(
      "Si el correo está registrado, recibirás instrucciones para recuperar tu cuenta."
    );
  }

  return (
    <main className="auth-container">
      <section className="auth-card">
        <div className="auth-logo">
          <img
            src={logoUnify}
            alt="Logo UNiFY"
            style={{
              width: "220px",
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
              objectFit: "contain"
            }}
          />
        </div>

        <h2>Recuperar contraseña</h2>

        <p className="auth-description">
          Ingresa tu correo electrónico para solicitar la recuperación
          de tu cuenta.
        </p>

        <form onSubmit={manejarEnvio}>
          <label htmlFor="correo-recuperacion">
            Correo electrónico
          </label>

          <input
            id="correo-recuperacion"
            type="email"
            placeholder="ejemplo@gmail.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <button type="submit" className="auth-button">
            Recuperar contraseña
          </button>
        </form>

        {mensaje && <p className="auth-success">{mensaje}</p>}

        <p className="auth-footer">
          ¿Recordaste tu contraseña?
          <button type="button" onClick={irALogin}>
            Iniciar sesión
          </button>
        </p>
      </section>
    </main>
  );
}

export default Recuperar;
