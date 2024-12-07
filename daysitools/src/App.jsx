import "./App.css";
import Block from "./pages/block";
import Schedule from "./pages/schedule";
import { useEffect, useState } from "react";
import { useCounterStore } from "./store/store";

function App() {
  const { time, paginas } = useCounterStore();

  const [pagina1, setPagina1] = useState("");
  const [pagina2, setPagina2] = useState("hidden");

  const nombres = [
    "HERMOSA ❤❤❤",
    "MI SEXY CULONA ",
    "MI RICA TETONA",
    "RICURA SEXY",
    "MAMACITA TETONA",
    "SOÑÉ CONTIGO HOY HACIENDO YA SABES, BUENO NO TE DISTRAIGO",
    "SEXY COLITA",
    "NO OLVIDES, HOY TOCA TIKI TIKI",
    "MI VICIO SEXUAL",
    "QUE DICES SI TE PENETRO HOY?, BUENO NO TE DISTRAIGO",
  ];

  const nombreRandom = () => {
    const random = Math.floor(Math.random() * nombres.length);
    return nombres[random];
  };

  const temporizador = () => {
    const hoy = new Date();

    const fecha = new Date();

    const resta = (final) => {
      console.log(final - hoy);
      setTimeout(() => {
        alert(
          `HOLA ${nombreRandom()}, TU TURNO TERMINA A LAS ${
            final.getHours() + 1
          } HORAS, ATENTA ♥♥♥♥ !!!`
        );
      }, final - hoy);
    };

    console.log(time);
    time.map((e) => {
      fecha.setHours(e, 57, 0);
      console.log(fecha);
      resta(fecha);
    });
  };

  const cambiarPagina = () => {
    if (pagina1 === "" || pagina2 === "hidden") {
      setPagina1("hidden");
      setPagina2("");
    } else {
      setPagina1("");
      setPagina2("hidden");
    }
  };

  useEffect(() => {
    temporizador();
  }, [time]);

  return (
    <div>
      <div className={pagina1}>
        <Block />
      </div>
      <div
        onClick={() => {
          cambiarPagina();
        }}
      >
        <div>
          <div className="w-full  border-red-950 border-4 absolute text-center p-1 font-bold bg-red-950  text-white  hover:bg-white hover:text-black">
            cuadro horarios
          </div>
        </div>
      </div>
      <div className={pagina2}>
        <Schedule />
      </div>
    </div>
  );
}

export default App;
