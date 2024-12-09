import React, { useEffect, useState } from "react";
import { useCounterStore } from "../store/store";

export default function Hour(prop) {
  const { start, dia, end, value } = prop;
  const {
    calendario,
    setDia,
    removeHora,
    setChanged,
    setTime,
    sumTotalTime,
    totalTime,
    resTotalTime,
  } = useCounterStore();
  const [click, setClick] = useState("bg-black");
  const [fechas, setFechas] = useState({ [dia]: start });
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(false);

  const horario = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
    "12am",
  ];
  const horas = [
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  ];

  const temporizador = () => {
    const local = horario.indexOf(start);
    const siguiente = horario[local + 1];
    const validation = calendario[dia].includes(siguiente);

    const hoy = new Date();
    const horaHoy = hoy.getHours();

    const fecha = new Date();
    const day = fecha.getDay();
    const hourNext = horas[local + 1];

    if (value === day && !validation && hourNext > horaHoy) {
      setTime(horas[local]);
    }
  };

  const changeColor = () => {
    if (click === "bg-black") {
      setClick("bg-red-600");
      setFechas((prevFechas) => ({
        ...prevFechas,
        [dia]: start,
      }));
      setLoading(true);
      setDia(dia, start);
      sumTotalTime();
      setChanged();
    } else {
      setClick("bg-black");
      resTotalTime();
      removeHora(dia, start);
      setChanged();
    }
  };

  useEffect(() => {
    try {
      if (calendario[dia].includes(start)) {
        setClick("bg-red-600");
        sumTotalTime();
        console.log(calendario[dia]);
        setDia(dia, start);
        setChanged();
        setTimer(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (click === "bg-red-600") {
      temporizador();
    }
  }, [click]);

  return (
    <>
      <span
        onClick={() => changeColor()}
        className={`${click} font-bold text-white mb-1   hover:bg-yellow-400 hover:text-black text-center select-none `}
      >
        {start + " - " + end}
      </span>
    </>
  );
}
