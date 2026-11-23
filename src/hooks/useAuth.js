
import { useState, useEffect } from "react";
import { usuariosIniciales } from "../data/usuarios";

const CLAVE_USUARIOS = "unify_usuarios";
const CLAVE_SESION = "unify_sesion";

export function useAuth() {
  const [usuarios, setUsuarios] = useState(() => {
    const guardados = localStorage.getItem(CLAVE_USUARIOS);
    return guardados ? JSON.parse(guardados) : usuariosIniciales;
  });

  const [usuario, setUsuario] = useState(() => {
    const sesion = localStorage.getItem(CLAVE_SESION);
    return sesion ? JSON.parse(sesion) : null;
  });

  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
  }, [usuarios]);

  function iniciarSesion(correo, password) {
    const encontrado = usuarios.find(
      (u) =>
        u.correo.toLowerCase() === correo.trim().toLowerCase() &&
        u.password === password
    );

    if (!encontrado) {
      setError("Correo o contraseña incorrectos.");
      return false;
    }

    if (encontrado.estado !== "Activo") {
      setError("Esta cuenta se encuentra inactiva.");
      return false;
    }

    const { password: _, ...datosUsuario } = encontrado;

    localStorage.setItem(CLAVE_SESION, JSON.stringify(datosUsuario));
    setUsuario(datosUsuario);
    setError("");
    return true;
  }

  function registrarUsuario(datos) {
    const existe = usuarios.some(
      (u) => u.correo.toLowerCase() === datos.correo.trim().toLowerCase()
    );

    if (existe) {
      setError("Este correo ya está registrado.");
      return false;
    }

    const nuevoUsuario = {
      ...datos,
      id: Math.max(0, ...usuarios.map((u) => u.id)) + 1,
      correo: datos.correo.trim(),
      rol: "cliente",
      estado: "Activo"
    };

    setUsuarios((actuales) => [...actuales, nuevoUsuario]);
    setError("");
    return true;
  }

  function actualizarUsuario(id, cambios) {
    const usuariosActualizados = usuarios.map((u) =>
      u.id === id ? { ...u, ...cambios } : u
    );

    setUsuarios(usuariosActualizados);

    if (usuario && usuario.id === id) {
      const actualizado = usuariosActualizados.find((u) => u.id === id);
      const { password: _, ...datosUsuario } = actualizado;

      setUsuario(datosUsuario);
      localStorage.setItem(CLAVE_SESION, JSON.stringify(datosUsuario));
    }
  }

  function cerrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
    setUsuario(null);
  }

  return {
    usuarios,
    usuario,
    error,
    iniciarSesion,
    registrarUsuario,
    actualizarUsuario,
    cerrarSesion,
    setError
  };
}
