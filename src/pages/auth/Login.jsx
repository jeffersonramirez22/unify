
import { useState } from "react";
import "./Auth.css";
import logoUnify from "../../assets/logo-unify.png";

function Login({ iniciarSesion, irARegistro, irARecuperar, error }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  function manejarEnvio(e) {
    e.preventDefault();
    iniciarSesion(correo, password);
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

        <h2>¡Bienvenido de nuevo!</h2>

        <p className="auth-description">
          Inicia sesión para descubrir nuevas experiencias.
        </p>

        <button
          type="button"
          className="auth-recovery"
          onClick={irARecuperar}
        >
          ¿Olvidaste tu contraseña?
        </button>

        <form onSubmit={manejarEnvio}>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            placeholder="Ingresa tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-button">
            Iniciar sesión
          </button>
        </form>

        <p className="auth-footer">
          ¿No tienes una cuenta?
          <button type="button" onClick={irARegistro}>
            Regístrate
          </button>
        </p>
      </section>
    </main>
  );
}

export default Login;
