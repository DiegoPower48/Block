import React, { useEffect, useState } from "react";
import Hour from "../components/hour";
import axios from "axios";
import { useCounterStore } from "../store/store";

function Schedule() {
  const { setCalendario, calendarioNuevo, changed, time, totalTime } =
    useCounterStore();
  const [loading, setLoading] = useState(false);
  const [status, setstatus] = useState("");

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

    const resta = (hour) => {
      const fecha = new Date();
      fecha.setHours(hour, 57, 0);
      console.log(fecha - hoy);
      console.log(fecha);
      setTimeout(() => {
        alert(
          `HOLA ${nombreRandom()}, TU TURNO TERMINA A LAS ${
            fecha.getHours() + 1
          } HORAS, ATENTA ♥♥♥♥ !!!`
        );
      }, fecha - hoy);
    };

    console.log(time);
    time.map((e) => {
      resta(e);
    });
  };

  const cargarDatos = async () => {
    try {
      const res = await axios.get(
        "https://portfolio-c4l9.onrender.com/horario"
      );

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const enviarDatos = async (datos) => {
    try {
      const res = await axios.post(
        "https://portfolio-c4l9.onrender.com/edithorario",
        datos
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const datos = async () => {
      try {
        const res = await cargarDatos();
        if (res.status === 200) {
          setCalendario(res.data[0]);
          setLoading(true);
          setstatus(res.status);
        }
      } catch (error) {
        console.log(error);
      }
    };
    datos();
  }, []);

  useEffect(() => {
    if (status === 200) {
      const datos = async () => {
        try {
          const res = await enviarDatos(calendarioNuevo);

          return res.status;
        } catch (error) {
          console.log(error);
        }
      };
      datos();
    }
  }, [changed]);

  useEffect(() => {
    temporizador();
  }, [time]);

  return (
    <>
      <div>
        {!loading ? (
          <div></div>
        ) : (
          <div className="flex pt-12 flex-wrap">
            {/* <div>{totalTime.length}</div> */}
            <div className="flex flex-col  w-auto m-3 ">
              <div className="font-bold text-center">LUNES</div>
              <Hour start="6am" end="7am" dia="Lunes" value={1} />
              <Hour start="7am" end="8am" dia="Lunes" value={1} />
              <Hour start="8am" end="9am" dia="Lunes" value={1} />
              <Hour start="9am" end="10am" dia="Lunes" value={1} />
              <Hour start="10am" end="11am" dia="Lunes" value={1} />
              <Hour start="11am" end="12pm" dia="Lunes" value={1} />
              <Hour start="12pm" end="1pm" dia="Lunes" value={1} />
              <Hour start="1pm" end="2pm" dia="Lunes" value={1} />
              <Hour start="2pm" end="3pm" dia="Lunes" value={1} />
              <Hour start="3pm" end="4pm" dia="Lunes" value={1} />
              <Hour start="4pm" end="5pm" dia="Lunes" value={1} />
              <Hour start="5pm" end="6pm" dia="Lunes" value={1} />
              <Hour start="6pm" end="7pm" dia="Lunes" value={1} />
              <Hour start="7pm" end="8pm" dia="Lunes" value={1} />
              <Hour start="8pm" end="9pm" dia="Lunes" value={1} />
              <Hour start="9pm" end="10m" dia="Lunes" value={1} />
              <Hour start="10pm" end="11pm" dia="Lunes" value={1} />
              <Hour start="11pm" end="12am" dia="Lunes" value={1} />
            </div>
            <div className="flex flex-col  w-auto m-3">
              <div className="font-bold text-center ">MARTES</div>
              <Hour start="6am" end="7am" dia="Martes" value={2} />
              <Hour start="7am" end="8am" dia="Martes" value={2} />
              <Hour start="8am" end="9am" dia="Martes" value={2} />
              <Hour start="9am" end="10am" dia="Martes" value={2} />
              <Hour start="10am" end="11am" dia="Martes" value={2} />
              <Hour start="11am" end="12pm" dia="Martes" value={2} />
              <Hour start="12pm" end="1pm" dia="Martes" value={2} />
              <Hour start="1pm" end="2pm" dia="Martes" value={2} />
              <Hour start="2pm" end="3pm" dia="Martes" value={2} />
              <Hour start="3pm" end="4pm" dia="Martes" value={2} />
              <Hour start="4pm" end="5pm" dia="Martes" value={2} />
              <Hour start="5pm" end="6pm" dia="Martes" value={2} />
              <Hour start="6pm" end="7pm" dia="Martes" value={2} />
              <Hour start="7pm" end="8pm" dia="Martes" value={2} />
              <Hour start="8pm" end="9pm" dia="Martes" value={2} />
              <Hour start="9pm" end="10m" dia="Martes" value={2} />
              <Hour start="10pm" end="11pm" dia="Martes" value={2} />
              <Hour start="11pm" end="12am" dia="Martes" value={2} />
            </div>
            <div className="flex flex-col w-auto m-3">
              <div className="font-bold text-center ">MIERCOLES</div>
              <Hour start="6am" end="7am" dia="Miercoles" value={3} />
              <Hour start="7am" end="8am" dia="Miercoles" value={3} />
              <Hour start="8am" end="9am" dia="Miercoles" value={3} />
              <Hour start="9am" end="10am" dia="Miercoles" value={3} />
              <Hour start="10am" end="11am" dia="Miercoles" value={3} />
              <Hour start="11am" end="12pm" dia="Miercoles" value={3} />
              <Hour start="12pm" end="1pm" dia="Miercoles" value={3} />
              <Hour start="1pm" end="2pm" dia="Miercoles" value={3} />
              <Hour start="2pm" end="3pm" dia="Miercoles" value={3} />
              <Hour start="3pm" end="4pm" dia="Miercoles" value={3} />
              <Hour start="4pm" end="5pm" dia="Miercoles" value={3} />
              <Hour start="5pm" end="6pm" dia="Miercoles" value={3} />
              <Hour start="6pm" end="7pm" dia="Miercoles" value={3} />
              <Hour start="7pm" end="8pm" dia="Miercoles" value={3} />
              <Hour start="8pm" end="9pm" dia="Miercoles" value={3} />
              <Hour start="9pm" end="10m" dia="Miercoles" value={3} />
              <Hour start="10pm" end="11pm" dia="Miercoles" value={3} />
              <Hour start="11pm" end="12am" dia="Miercoles" value={3} />
            </div>
            <div className="flex flex-col  w-auto m-3">
              <div className="font-bold text-center ">JUEVES</div>
              <Hour start="6am" end="7am" dia="Jueves" value={4} />
              <Hour start="7am" end="8am" dia="Jueves" value={4} />
              <Hour start="8am" end="9am" dia="Jueves" value={4} />
              <Hour start="9am" end="10am" dia="Jueves" value={4} />
              <Hour start="10am" end="11am" dia="Jueves" value={4} />
              <Hour start="11am" end="12pm" dia="Jueves" value={4} />
              <Hour start="12pm" end="1pm" dia="Jueves" value={4} />
              <Hour start="1pm" end="2pm" dia="Jueves" value={4} />
              <Hour start="2pm" end="3pm" dia="Jueves" value={4} />
              <Hour start="3pm" end="4pm" dia="Jueves" value={4} />
              <Hour start="4pm" end="5pm" dia="Jueves" value={4} />
              <Hour start="5pm" end="6pm" dia="Jueves" value={4} />
              <Hour start="6pm" end="7pm" dia="Jueves" value={4} />
              <Hour start="7pm" end="8pm" dia="Jueves" value={4} />
              <Hour start="8pm" end="9pm" dia="Jueves" value={4} />
              <Hour start="9pm" end="10m" dia="Jueves" value={4} />
              <Hour start="10pm" end="11pm" dia="Jueves" value={4} />
              <Hour start="11pm" end="12am" dia="Jueves" value={4} />
            </div>
            <div className="flex flex-col  w-auto m-3">
              <div className="font-bold text-center ">VIERNES</div>
              <Hour start="6am" end="7am" dia="Viernes" value={5} />
              <Hour start="7am" end="8am" dia="Viernes" value={5} />
              <Hour start="8am" end="9am" dia="Viernes" value={5} />
              <Hour start="9am" end="10am" dia="Viernes" value={5} />
              <Hour start="10am" end="11am" dia="Viernes" value={5} />
              <Hour start="11am" end="12pm" dia="Viernes" value={5} />
              <Hour start="12pm" end="1pm" dia="Viernes" value={5} />
              <Hour start="1pm" end="2pm" dia="Viernes" value={5} />
              <Hour start="2pm" end="3pm" dia="Viernes" value={5} />
              <Hour start="3pm" end="4pm" dia="Viernes" value={5} />
              <Hour start="4pm" end="5pm" dia="Viernes" value={5} />
              <Hour start="5pm" end="6pm" dia="Viernes" value={5} />
              <Hour start="6pm" end="7pm" dia="Viernes" value={5} />
              <Hour start="7pm" end="8pm" dia="Viernes" value={5} />
              <Hour start="8pm" end="9pm" dia="Viernes" value={5} />
              <Hour start="9pm" end="10m" dia="Viernes" value={5} />
              <Hour start="10pm" end="11pm" dia="Viernes" value={5} />
              <Hour start="11pm" end="12am" dia="Viernes" value={5} />
            </div>
            <div className="flex flex-col  w-auto m-3">
              <div className="font-bold text-center ">SABADO</div>
              <Hour start="6am" end="7am" dia="Sabado" value={6} />
              <Hour start="7am" end="8am" dia="Sabado" value={6} />
              <Hour start="8am" end="9am" dia="Sabado" value={6} />
              <Hour start="9am" end="10am" dia="Sabado" value={6} />
              <Hour start="10am" end="11am" dia="Sabado" value={6} />
              <Hour start="11am" end="12pm" dia="Sabado" value={6} />
              <Hour start="12pm" end="1pm" dia="Sabado" value={6} />
              <Hour start="1pm" end="2pm" dia="Sabado" value={6} />
              <Hour start="2pm" end="3pm" dia="Sabado" value={6} />
              <Hour start="3pm" end="4pm" dia="Sabado" value={6} />
              <Hour start="4pm" end="5pm" dia="Sabado" value={6} />
              <Hour start="5pm" end="6pm" dia="Sabado" value={6} />
              <Hour start="6pm" end="7pm" dia="Sabado" value={6} />
              <Hour start="7pm" end="8pm" dia="Sabado" value={6} />
              <Hour start="8pm" end="9pm" dia="Sabado" value={6} />
              <Hour start="9pm" end="10m" dia="Sabado" value={6} />
              <Hour start="10pm" end="11pm" dia="Sabado" value={6} />
              <Hour start="11pm" end="12am" dia="Sabado" value={6} />
            </div>
            <div className="flex flex-col  w-auto m-3">
              <div className="font-bold text-center ">DOMINGO</div>
              <Hour start="6am" end="7am" dia="Domingo" value={0} />
              <Hour start="7am" end="8am" dia="Domingo" value={0} />
              <Hour start="8am" end="9am" dia="Domingo" value={0} />
              <Hour start="9am" end="10am" dia="Domingo" value={0} />
              <Hour start="10am" end="11am" dia="Domingo" value={0} />
              <Hour start="11am" end="12pm" dia="Domingo" value={0} />
              <Hour start="12pm" end="1pm" dia="Domingo" value={0} />
              <Hour start="1pm" end="2pm" dia="Domingo" value={0} />
              <Hour start="2pm" end="3pm" dia="Domingo" value={0} />
              <Hour start="3pm" end="4pm" dia="Domingo" value={0} />
              <Hour start="4pm" end="5pm" dia="Domingo" value={0} />
              <Hour start="5pm" end="6pm" dia="Domingo" value={0} />
              <Hour start="6pm" end="7pm" dia="Domingo" value={0} />
              <Hour start="7pm" end="8pm" dia="Domingo" value={0} />
              <Hour start="8pm" end="9pm" dia="Domingo" value={0} />
              <Hour start="9pm" end="10m" dia="Domingo" value={0} />
              <Hour start="10pm" end="11pm" dia="Domingo" value={0} />
              <Hour start="11pm" end="12am" dia="Domingo" value={0} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Schedule;
