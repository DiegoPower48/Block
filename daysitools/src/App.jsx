import "./App.css";
import Block from "./pages/block";
import Schedule from "./pages/schedule";
import { useEffect, useState } from "react";
import { useCounterStore } from "./store/store";

function App() {
  const [pagina1, setPagina1] = useState("");
  const [pagina2, setPagina2] = useState("hidden");

  // useEffect(() => {
  //   console.log(totalTime.length);
  // }, [<Schedule />]);

  const cambiarPagina = () => {
    if (pagina1 === "" || pagina2 === "hidden") {
      setPagina1("hidden");
      setPagina2("");
    } else {
      setPagina1("");
      setPagina2("hidden");
    }
  };

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
