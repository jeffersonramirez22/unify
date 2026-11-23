import morat from "../assets/evento-morat.jpg";
import teatro from "../assets/evento-teatro.jpg";
import deportes from "../assets/evento-deportes.jpg";
import arte from "../assets/evento-arte.jpg";
import badBunny from "../assets/evento-bad-bunny.jpg";
import ballet from "../assets/evento-ballet.jpg";
import gastronomia from "../assets/evento-gastronomia.jpg";
import parque from "../assets/evento-parque.jpg";

const events = [
  {
    id: 1,
    name: "Morat - Estadio Cuscatlán 2026",
    category: "Conciertos",
    date: "2026-11-15",
    time: "8:00 p.m.",
    location: "Estadio Cuscatlán, San Salvador",
    priceFrom: 45.00,
    image: morat,
  },
  {
    id: 2,
    name: "Teatro Nacional 2026",
    category: "Teatro",
    date: "2026-11-22",
    time: "6:00 p.m.",
    location: "Teatro Nacional, San Salvador",
    priceFrom: 15.00,
    image: teatro,
  },
  {
    id: 3,
    name: "Estadio Cuscatlán 2026",
    category: "Deportes",
    date: "2026-10-30",
    time: "3:30 p.m.",
    location: "Estadio Cuscatlán, San Salvador",
    priceFrom: 25.00,
    image: deportes,
  },
  {
    id: 4,
    name: "Expo de arte 2026",
    category: "Cultura",
    date: "2026-11-15",
    time: "1:00 p.m.",
    location: "Museo de Arte El Salvador",
    priceFrom: 35.00,
    image: arte,
  },
  {
    id: 5,
    name: "Bad Bunny - Estadio Cuscatlán 2026",
    category: "Conciertos",
    date: "2026-11-26",
    time: "8:00 p.m.",
    location: "Estadio Cuscatlán, San Salvador",
    priceFrom: 95.00,
    image: badBunny,
  },
  {
    id: 6,
    name: "Lago de los cisnes 2026",
    category: "Cultura",
    date: "2026-11-15",
    time: "8:00 p.m.",
    location: "Teatro Nacional, San Salvador",
    priceFrom: 45.00,
    image: ballet,
  },
  {
    id: 7,
    name: "Festival gastronómico 2026",
    category: "Otros",
    date: "2026-10-17",
    time: "3:00 p.m.",
    location: "Paseo El Carmen, San Salvador",
    priceFrom: 15.00,
    image: gastronomia,
  },
  {
    id: 8,
    name: "Parque de pelotas 2026",
    category: "Conciertos",
    date: "2026-11-21",
    time: "8:00 p.m.",
    location: "Parque de pelotas, San Salvador",
    priceFrom: 90.00,
    image: parque,
  },
];

export default events;
