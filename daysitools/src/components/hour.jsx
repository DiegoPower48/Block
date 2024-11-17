import React, { useEffect, useState } from "react";
import { useCounterStore } from "../store/store";

export default function Hour(prop) {
  const { start, dia, end } = prop;
  const { calendario, setDia, removeHora, calendarioNuevo, setChanged } =
    useCounterStore();
  const [click, setClick] = useState("bg-black");
  const [fechas, setFechas] = useState({ [dia]: start });
  const [loading, setLoading] = useState(false);

  const changeColor = () => {
    if (click === "bg-black") {
      setClick("bg-red-600");
      setFechas((prevFechas) => ({
        ...prevFechas,
        [dia]: start,
      }));
      setLoading(true);
      setDia(dia, start);
      setChanged();
    } else {
      setClick("bg-black");
      removeHora(dia, start);
      console.log(calendarioNuevo);
      setChanged();
    }
  };

  useEffect(() => {
    console.log(calendarioNuevo);
  }, [loading]);

  useEffect(() => {
    console.log(calendario[dia]);

    try {
      if (calendario[dia].includes(start)) {
        setClick("bg-red-600");
        setDia(dia, start);
        setChanged();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <span
        onClick={() => changeColor()}
        className={`flex-1 p-1 ${click} font-bold text-white mb-1 hover:bg-yellow-400 hover:text-black text-center select-none`}
      >
        {start + " - " + end}
      </span>
    </>
  );
}
