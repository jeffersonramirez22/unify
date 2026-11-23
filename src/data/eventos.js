
import morat from "../assets/eventos/Rectangle 21.png";
import teatro from "../assets/eventos/Rectangle 57.png";
import estadio from "../assets/eventos/Rectangle 62.png";
import expoArte from "../assets/eventos/Rectangle 53.png";
import badBunny from "../assets/eventos/Rectangle 30.png";
import lagoCisnes from "../assets/eventos/Rectangle 33.png";
import festival from "../assets/eventos/Rectangle 39.png";
import parquePelotas from "../assets/eventos/Rectangle 47.png";

export const eventosIniciales = [
  {
    id: 1,
    nombre: "Morat - Estadio Cuscatlan 2026",
    categoria: "Conciertos",
    fecha: "2026-11-15",
    hora: "8:00 p. m.",
    lugar: "Estadio Cuscatlán, San Salvador",
    imagen: morat,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 45, disponibilidad: 300 },
      { nombre: "Preferencial", precio: 65, disponibilidad: 150 },
      { nombre: "VIP", precio: 85, disponibilidad: 50 }
    ]
  },
  {
    id: 2,
    nombre: "Teatro Nacional 2026",
    categoria: "Teatro",
    fecha: "2026-11-22",
    hora: "6:00 p. m.",
    lugar: "Teatro Nacional, San Salvador",
    imagen: teatro,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 15, disponibilidad: 200 },
      { nombre: "Preferencial", precio: 25, disponibilidad: 100 },
      { nombre: "VIP", precio: 35, disponibilidad: 40 }
    ]
  },
  {
    id: 3,
    nombre: "Estadio Cuscatlan 2026",
    categoria: "Deportes",
    fecha: "2026-10-30",
    hora: "3:30 p. m.",
    lugar: "Estadio Cuscatlán, San Salvador",
    imagen: estadio,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 25, disponibilidad: 400 },
      { nombre: "Preferencial", precio: 40, disponibilidad: 150 },
      { nombre: "VIP", precio: 60, disponibilidad: 50 }
    ]
  },
  {
    id: 4,
    nombre: "Expo de arte 2026",
    categoria: "Cultura",
    fecha: "2026-11-15",
    hora: "1:00 p. m.",
    lugar: "San Salvador, El Salvador",
    imagen: expoArte,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 35, disponibilidad: 200 },
      { nombre: "Preferencial", precio: 50, disponibilidad: 100 },
      { nombre: "VIP", precio: 70, disponibilidad: 30 }
    ]
  },
  {
    id: 5,
    nombre: "Bad bunny - Estadio Cuscatlan 2026",
    categoria: "Conciertos",
    fecha: "2026-11-26",
    hora: "8:00 p. m.",
    lugar: "Estadio Cuscatlán, San Salvador",
    imagen: badBunny,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 95, disponibilidad: 300 },
      { nombre: "Preferencial", precio: 125, disponibilidad: 150 },
      { nombre: "VIP", precio: 175, disponibilidad: 50 }
    ]
  },
  {
    id: 6,
    nombre: "Lago de los cisnes 2026",
    categoria: "Cultura",
    fecha: "2026-11-15",
    hora: "8:00 p. m.",
    lugar: "Teatro Nacional, San Salvador",
    imagen: lagoCisnes,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 45, disponibilidad: 150 },
      { nombre: "Preferencial", precio: 60, disponibilidad: 70 },
      { nombre: "VIP", precio: 85, disponibilidad: 25 }
    ]
  },
  {
    id: 7,
    nombre: "Festival gastronómico 2026",
    categoria: "Otros",
    fecha: "2026-10-17",
    hora: "3:00 p. m.",
    lugar: "San Salvador, El Salvador",
    imagen: festival,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 15, disponibilidad: 250 },
      { nombre: "Preferencial", precio: 25, disponibilidad: 100 },
      { nombre: "VIP", precio: 40, disponibilidad: 30 }
    ]
  },
  {
    id: 8,
    nombre: "Parque de pelotas 2026",
    categoria: "Conciertos",
    fecha: "2026-11-21",
    hora: "8:00 p. m.",
    lugar: "San Salvador, El Salvador",
    imagen: parquePelotas,
    estado: "Disponible",
    zonas: [
      { nombre: "General", precio: 90, disponibilidad: 200 },
      { nombre: "Preferencial", precio: 110, disponibilidad: 90 },
      { nombre: "VIP", precio: 150, disponibilidad: 30 }
    ]
  }
];
