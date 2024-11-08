import { useEffect } from "react";
import "./App.css";
import Cuadro from "./components/form";

function App() {
  const temporizador = () => {
    try {
      const tiempo = parseFloat(
        prompt("♥♥♥♥♥♥BUEN DIA HERMOSA A QUE HORA TERMINAS ♥♥♥♥♥♥:")
      );
      const ahora = new Date();
      const final = new Date();
      final.setHours(tiempo, 0, 0);

      if (ahora.getHours() > final.getHours()) {
        final.setHours(tiempo + 11, 55, 0);
      } else {
        final.setHours(tiempo - 1, 55, 0);
      }

      const temporizador = final - ahora;

      console.log(final, ahora, temporizador);
      setTimeout(() => {
        alert(`TU TURNO TERMINA A LAS ${tiempo} ATENTA, EN 5 MINUTOS!!! ♥♥♥♥ `);
      }, temporizador);
    } catch (error) {
      console.log("error, no se ejecutó el temporizador, ES CULPA DE DIEGO");
    }
  };

  useEffect(() => {
    temporizador();
  }, []);

  return (
    <>
      <form className="container">
        <Cuadro space={1} />
        <Cuadro space={2} />
        <Cuadro space={3} />
        <Cuadro space={4} />
        <Cuadro space={5} />
        <Cuadro space={6} />
        <Cuadro space={7} />
        <Cuadro space={8} />
      </form>
    </>
  );
}

export default App;
