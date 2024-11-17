import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Block from "./pages/block";
import Schedule from "./pages/schedule";
import { useEffect } from "react";

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

      const tiempoFinal = final - ahora;

      if (tiempo === NaN) {
        alert("NO ESCRIBISTE LA HORA");
      } else {
        setTimeout(() => {
          alert(
            `TU TURNO TERMINA A LAS ${tiempo} ATENTA, EN 5 MINUTOS!!! ♥♥♥♥ `
          );
        }, tiempoFinal);
      }
    } catch (error) {
      alert("error, no se ejecutó el temporizador, ES CULPA DE DIEGO");
    }
  };

  useEffect(() => {
    temporizador();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Block />} />
        <Route path="/horario" element={<Schedule />} />
        <Route path="*" element={<Block />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
