
import { useState } from "react";

function Registro({ registrarUsuario, irALogin, error }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  function manejarRegistro(e) {
    e.preventDefault();
    setMensaje("");

    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmarPassword) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    const registrado = registrarUsuario({
      nombre: nombre.trim(),
      correo: correo.trim(),
      telefono,
      password
    });

    if (registrado) {
      alert("¡Tu cuenta se creó correctamente!");
      irALogin();
    }
  }

  return (
    <main className="auth-container">
      <section className="auth-card">
        <div className="auth-logo">
          <span>U</span>
          <h1>UNiFY</h1>
          <p>Una conexión, mil experiencias.</p>
        </div>

        <h2>Crear una cuenta</h2>
        <p className="auth-description">
          Regístrate y comienza a vivir nuevas experiencias.
        </p>

        <form onSubmit={manejarRegistro}>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            placeholder="ejemplo@gmail.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            type="tel"
            placeholder="7000-0000"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmarPassword">
            Confirmar contraseña
          </label>
          <input
            id="confirmarPassword"
            type="password"
            placeholder="Repite tu contraseña"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
            required
          />

          {(mensaje || error) && (
            <p className="auth-error">{mensaje || error}</p>
          )}

          <button type="submit" className="auth-button">
            Crear cuenta
          </button>
        </form>

        <p className="auth-footer">
          ¿Ya tienes una cuenta?
          <button type="button" onClick={irALogin}>
            Iniciar sesión
          </button>
        </p>
      </section>
    </main>
  );
}

export default Registro;
