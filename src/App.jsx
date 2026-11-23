
import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";

import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
import Recuperar from "./pages/auth/Recuperar";
import GestionUsuarios from "./pages/usuarios/GestionUsuarios";
import Eventos from "./pages/eventos/Eventos";
import Carrito from "./pages/carrito/Carrito";
import Pago from "./pages/pagos/Pago";
import Boleto from "./pages/boletos/Boleto";
import Reportes from "./pages/reportes/Reportes";

import "./App.css";

function obtenerUltimoBoleto() {
  try {
    const boletos = JSON.parse(
      localStorage.getItem("unify_boletos") || "[]"
    );

    return boletos.length > 0
      ? boletos[boletos.length - 1]
      : null;
  } catch {
    return null;
  }
}

function App() {
  const {
    usuario,
    usuarios,
    error,
    iniciarSesion,
    registrarUsuario,
    actualizarUsuario,
    cerrarSesion,
    setError
  } = useAuth();

  const [vista, setVista] = useState("login");
  const [compra, setCompra] = useState(null);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [compraFinal, setCompraFinal] = useState(obtenerUltimoBoleto);

  useEffect(() => {
    if (
      usuario &&
      compraFinal &&
      compraFinal.usuarioCorreo === usuario.correo
    ) {
      setVista("boleto");
    }
  }, [usuario, compraFinal]);

  function irALogin() {
    setError("");
    setVista("login");
  }

  function irARegistro() {
    setError("");
    setVista("registro");
  }

  function irARecuperar() {
    setError("");
    setVista("recuperar");
  }

  function seleccionarEvento(evento) {
    setEventoSeleccionado(evento);
    setVista("carrito");
  }

  function continuarAlPago(datosCompra) {
    if (
      !datosCompra ||
      !datosCompra.cantidad ||
      !datosCompra.precio ||
      !datosCompra.total
    ) {
      setError("No se encontraron los datos de la compra.");
      setVista("eventos");
      return;
    }

    setCompra(datosCompra);
    setVista("pago");
  }

  function procesarPago(datosCompra) {
    if (
      !usuario ||
      !datosCompra ||
      !datosCompra.cantidad ||
      !datosCompra.precio ||
      !datosCompra.total
    ) {
      setCompra(null);
      setVista("eventos");
      return;
    }

    const compraPagada = {
      ...datosCompra,
      usuarioCorreo: usuario.correo,
      codigo: `UNI-${Date.now().toString().slice(-8)}`,
      fecha: new Date().toLocaleDateString()
    };

    const boletosGuardados = JSON.parse(
      localStorage.getItem("unify_boletos") || "[]"
    );

    const nuevosBoletos = [
      ...boletosGuardados,
      compraPagada
    ];

    localStorage.setItem(
      "unify_boletos",
      JSON.stringify(nuevosBoletos)
    );

    setCompraFinal(compraPagada);
    setCompra(null);
    setVista("boleto");
  }

  function salir() {
    cerrarSesion();
    setCompra(null);
    setEventoSeleccionado(null);
    setVista("login");
  }

  if (!usuario) {
    if (vista === "recuperar") {
      return <Recuperar irALogin={irALogin} />;
    }

    if (vista === "registro") {
      return (
        <Registro
          registrarUsuario={registrarUsuario}
          irALogin={irALogin}
          error={error}
        />
      );
    }

    return (
      <Login
        iniciarSesion={iniciarSesion}
        irARegistro={irARegistro}
        irARecuperar={irARecuperar}
        error={error}
      />
    );
  }

  if (vista === "usuarios" && usuario.rol === "administrador") {
    return (
      <GestionUsuarios
        usuarios={usuarios}
        actualizarUsuario={actualizarUsuario}
        volver={() => setVista("inicio")}
      />
    );
  }

  if (vista === "reportes" && usuario.rol === "administrador") {
    return <Reportes volver={() => setVista("inicio")} />;
  }

  if (vista === "eventos") {
    return (
      <Eventos
        seleccionarEvento={seleccionarEvento}
        volver={() => setVista("inicio")}
      />
    );
  }

  if (vista === "carrito") {
    if (!eventoSeleccionado) {
      return (
        <main className="bienvenida">
          <h1>Selecciona un evento primero</h1>
          <button onClick={() => setVista("eventos")}>
            Ver eventos
          </button>
        </main>
      );
    }

    return (
      <Carrito
        evento={eventoSeleccionado}
        continuar={continuarAlPago}
        volver={() => setVista("eventos")}
      />
    );
  }

  if (vista === "pago") {
    if (!compra) {
      return (
        <main className="bienvenida">
          <h1>No hay ninguna compra seleccionada</h1>
          <p>Selecciona tus boletos antes de continuar al pago.</p>
          <button onClick={() => setVista("carrito")}>
            Ir al carrito
          </button>
        </main>
      );
    }

    return (
      <Pago
        compra={compra}
        pagar={procesarPago}
        volver={() => setVista("carrito")}
      />
    );
  }

  if (vista === "boleto" && compraFinal) {
    if (compraFinal.usuarioCorreo !== usuario.correo) {
      return (
        <main className="bienvenida">
          <h1>No tienes acceso a este boleto</h1>
          <button onClick={() => setVista("inicio")}>
            Volver al inicio
          </button>
        </main>
      );
    }

    return (
      <Boleto
        compra={compraFinal}
        usuario={usuario}
        volver={() => setVista("inicio")}
      />
    );
  }

  return (
    <main className="bienvenida">
      <h1>¡Bienvenido a UNiFY!</h1>
      <h2>{usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      <p>Descubre nuevas experiencias y disfruta tus eventos favoritos.</p>

      <button onClick={() => setVista("eventos")}>
        Explorar eventos
      </button>

      {usuario.rol === "administrador" && (
        <>
          <button onClick={() => setVista("usuarios")}>
            Gestionar usuarios
          </button>

          <button onClick={() => setVista("reportes")}>
            Reportes y analítica
          </button>
        </>
      )}

      <button onClick={salir}>
        Cerrar sesión
      </button>
    </main>
  );
}

export default App;
