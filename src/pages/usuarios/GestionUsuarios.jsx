
import { useState } from "react";
import "./GestionUsuarios.css";

function GestionUsuarios({ usuarios, actualizarUsuario, volver }) {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = usuarios.filter((u) =>
    `${u.nombre} ${u.correo}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <main className="gestion-container">
      <header className="gestion-header">
        <div>
          <h1>Gestión de usuarios</h1>
          <p>Administración de cuentas UNiFY</p>
        </div>

        <button onClick={volver} className="gestion-volver">
          Volver
        </button>
      </header>

      <section className="gestion-resumen">
        <article>
          <h3>{usuarios.length}</h3>
          <p>Usuarios registrados</p>
        </article>

        <article>
          <h3>{usuarios.filter(u => u.estado === "Activo").length}</h3>
          <p>Cuentas activas</p>
        </article>

        <article>
          <h3>{usuarios.filter(u => u.estado === "Inactivo").length}</h3>
          <p>Cuentas inactivas</p>
        </article>
      </section>

      <section className="gestion-tabla">
        <h2>Listado de usuarios</h2>

        <input
          type="search"
          placeholder="Buscar por nombre o correo..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="tabla-scroll">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Rol</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {filtrados.map((u) => (
                <tr key={u.id}>
                  <td>{u.nombre}</td>
                  <td>{u.correo}</td>
                  <td>{u.telefono}</td>

                  <td>
                    <select
                      value={u.rol}
                      onChange={(e) =>
                        actualizarUsuario(u.id, { rol: e.target.value })
                      }
                    >
                      <option value="cliente">Cliente</option>
                      <option value="organizador">Organizador</option>
                      <option value="administrador">Administrador</option>
                    </select>
                  </td>

                  <td>
                    <select
                      value={u.estado}
                      onChange={(e) =>
                        actualizarUsuario(u.id, { estado: e.target.value })
                      }
                    >
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>
                  </td>
                </tr>
              ))}

              {filtrados.length === 0 && (
                <tr>
                  <td colSpan="5">No se encontraron usuarios.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default GestionUsuarios;
