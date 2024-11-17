import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hour from "../components/hour";
import axios from "axios";
import { useCounterStore } from "../store/store";

function Schedule() {
  const { setCalendario, calendarioNuevo, changed } = useCounterStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const res = await axios("http://localhost:3000/horario");
        console.log(res.data);
        setCalendario(res.data[0]);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    const cargarDatos = async () => {
      console.log(calendarioNuevo);
      try {
        await axios.post("http://localhost:3000/edithorario", calendarioNuevo);
      } catch (error) {
        console.log(error);
      }
    };
    cargarDatos();
  }, [changed]);

  return (
    <>
      <div className=" h-80 ml-5 ">
        <div className="font-bold text-xl mb-5">Horario de esta semana</div>
        <Link
          className=" ml-1  p-4 bg-red-600 font-bold w-24 h-24 text-center rounded-lg hover:bg-yellow-400 hover:scale-110 hover:text-white"
          to="/"
        >
          volver
        </Link>

        {!loading ? (
          <div>cargando...</div>
        ) : (
          <div className="flex mt-5">
            <div className="flex flex-col w-36 m-3">
              <div className="font-bold text-center">LUNES</div>
              <Hour start="6am" end="7am" dia="Lunes" />
              <Hour start="7am" end="8am" dia="Lunes" />
              <Hour start="8am" end="9am" dia="Lunes" />
              <Hour start="9am" end="10am" dia="Lunes" />
              <Hour start="10am" end="11am" dia="Lunes" />
              <Hour start="11am" end="12am" dia="Lunes" />
              <Hour start="12pm" end="1pm" dia="Lunes" />
              <Hour start="1pm" end="2pm" dia="Lunes" />
              <Hour start="2pm" end="3pm" dia="Lunes" />
              <Hour start="3pm" end="4pm" dia="Lunes" />
              <Hour start="4pm" end="5pm" dia="Lunes" />
              <Hour start="5pm" end="6pm" dia="Lunes" />
              <Hour start="6pm" end="7pm" dia="Lunes" />
              <Hour start="7pm" end="8pm" dia="Lunes" />
              <Hour start="8pm" end="9pm" dia="Lunes" />
              <Hour start="9pm" end="10m" dia="Lunes" />
              <Hour start="10pm" end="11pm" dia="Lunes" />
              <Hour start="11pm" end="12pm" dia="Lunes" />
            </div>
            <div className="flex flex-col w-36 m-3">
              <div className="font-bold text-center ">MARTES</div>
              <Hour start="6am" end="7am" dia="Martes" />
              <Hour start="7am" end="8am" dia="Martes" />
              <Hour start="8am" end="9am" dia="Martes" />
              <Hour start="9am" end="10am" dia="Martes" />
              <Hour start="10am" end="11am" dia="Martes" />
              <Hour start="11am" end="12am" dia="Martes" />
              <Hour start="12pm" end="1pm" dia="Martes" />
              <Hour start="1pm" end="2pm" dia="Martes" />
              <Hour start="2pm" end="3pm" dia="Martes" />
              <Hour start="3pm" end="4pm" dia="Martes" />
              <Hour start="4pm" end="5pm" dia="Martes" />
              <Hour start="5pm" end="6pm" dia="Martes" />
              <Hour start="6pm" end="7pm" dia="Martes" />
              <Hour start="7pm" end="8pm" dia="Martes" />
              <Hour start="8pm" end="9pm" dia="Martes" />
              <Hour start="9pm" end="10m" dia="Martes" />
              <Hour start="10pm" end="11pm" dia="Martes" />
              <Hour start="11pm" end="12pm" dia="Martes" />
            </div>
            <div className="flex flex-col w-36 m-3">
              <div className="font-bold text-center ">MIERCOLES</div>
              <Hour start="6am" end="7am" dia="Miercoles" />
              <Hour start="7am" end="8am" dia="Miercoles" />
              <Hour start="9am" end="10am" dia="Miercoles" />
              <Hour start="10am" end="11am" dia="Miercoles" />
              <Hour start="11am" end="12am" dia="Miercoles" />
              <Hour start="12pm" end="1pm" dia="Miercoles" />
              <Hour start="1pm" end="2pm" dia="Miercoles" />
              <Hour start="2pm" end="3pm" dia="Miercoles" />
              <Hour start="3pm" end="4pm" dia="Miercoles" />
              <Hour start="4pm" end="5pm" dia="Miercoles" />
              <Hour start="5pm" end="6pm" dia="Miercoles" />
              <Hour start="6pm" end="7pm" dia="Miercoles" />
              <Hour start="7pm" end="8pm" dia="Miercoles" />
              <Hour start="8pm" end="9pm" dia="Miercoles" />
              <Hour start="9pm" end="10m" dia="Miercoles" />
              <Hour start="10pm" end="11pm" dia="Miercoles" />
              <Hour start="11pm" end="12pm" dia="Miercoles" />
            </div>
            <div className="flex flex-col w-36 m-3">
              <div className="font-bold text-center ">JUEVES</div>
              <Hour start="6am" end="7am" dia="Jueves" />
              <Hour start="7am" end="8am" dia="Jueves" />
              <Hour start="8am" end="9am" dia="Jueves" />
              <Hour start="9am" end="10am" dia="Jueves" />
              <Hour start="10am" end="11am" dia="Jueves" />
              <Hour start="11am" end="12am" dia="Jueves" />
              <Hour start="12pm" end="1pm" dia="Jueves" />
              <Hour start="1pm" end="2pm" dia="Jueves" />
              <Hour start="2pm" end="3pm" dia="Jueves" />
              <Hour start="3pm" end="4pm" dia="Jueves" />
              <Hour start="4pm" end="5pm" dia="Jueves" />
              <Hour start="5pm" end="6pm" dia="Jueves" />
              <Hour start="6pm" end="7pm" dia="Jueves" />
              <Hour start="7pm" end="8pm" dia="Jueves" />
              <Hour start="8pm" end="9pm" dia="Jueves" />
              <Hour start="9pm" end="10m" dia="Jueves" />
              <Hour start="10pm" end="11pm" dia="Jueves" />
              <Hour start="11pm" end="12pm" dia="Jueves" />
            </div>
            <div className="flex flex-col w-36 m-3">
              <div className="font-bold text-center ">VIERNES</div>
              <Hour start="6am" end="7am" dia="Viernes" />
              <Hour start="7am" end="8am" dia="Viernes" />
              <Hour start="8am" end="9am" dia="Viernes" />
              <Hour start="9am" end="10am" dia="Viernes" />
              <Hour start="10am" end="11am" dia="Viernes" />
              <Hour start="11am" end="12am" dia="Viernes" />
              <Hour start="12pm" end="1pm" dia="Viernes" />
              <Hour start="1pm" end="2pm" dia="Viernes" />
              <Hour start="2pm" end="3pm" dia="Viernes" />
              <Hour start="3pm" end="4pm" dia="Viernes" />
              <Hour start="4pm" end="5pm" dia="Viernes" />
              <Hour start="5pm" end="6pm" dia="Viernes" />
              <Hour start="6pm" end="7pm" dia="Viernes" />
              <Hour start="7pm" end="8pm" dia="Viernes" />
              <Hour start="8pm" end="9pm" dia="Viernes" />
              <Hour start="9pm" end="10m" dia="Viernes" />
              <Hour start="10pm" end="11pm" dia="Viernes" />
              <Hour start="11pm" end="12pm" dia="Viernes" />
            </div>
            <div className="flex flex-col w-36 m-3">
              <div className="font-bold text-center ">SABADO</div>
              <Hour start="6am" end="7am" dia="Sabado " />
              <Hour start="7am" end="8am" dia="Sabado" />
              <Hour start="8am" end="9am" dia="Sabado" />
              <Hour start="9am" end="10am" dia="Sabado" />
              <Hour start="10am" end="11am" dia="Sabado" />
              <Hour start="11am" end="12am" dia="Sabado" />
              <Hour start="12pm" end="1pm" dia="Sabado" />
              <Hour start="1pm" end="2pm" dia="Sabado" />
              <Hour start="2pm" end="3pm" dia="Sabado" />
              <Hour start="3pm" end="4pm" dia="Sabado" />
              <Hour start="4pm" end="5pm" dia="Sabado" />
              <Hour start="5pm" end="6pm" dia="Sabado" />
              <Hour start="6pm" end="7pm" dia="Sabado" />
              <Hour start="7pm" end="8pm" dia="Sabado" />
              <Hour start="8pm" end="9pm" dia="Sabado" />
              <Hour start="9pm" end="10m" dia="Sabado" />
              <Hour start="10pm" end="11pm" dia="Sabado" />
              <Hour start="11pm" end="12pm" dia="Sabado" />
            </div>
            <div className="flex flex-col w-36 m-3">
              <div className="font-bold text-center ">DOMINGO</div>
              <Hour start="6am" end="7am" dia="Domingo" />
              <Hour start="7am" end="8am" dia="Domingo" />
              <Hour start="8am" end="9am" dia="Domingo" />
              <Hour start="9am" end="10am" dia="Domingo" />
              <Hour start="10am" end="11am" dia="Domingo" />
              <Hour start="11am" end="12am" dia="Domingo" />
              <Hour start="12pm" end="1pm" dia="Domingo" />
              <Hour start="1pm" end="2pm" dia="Domingo" />
              <Hour start="2pm" end="3pm" dia="Domingo" />
              <Hour start="3pm" end="4pm" dia="Domingo" />
              <Hour start="4pm" end="5pm" dia="Domingo" />
              <Hour start="5pm" end="6pm" dia="Domingo" />
              <Hour start="6pm" end="7pm" dia="Domingo" />
              <Hour start="7pm" end="8pm" dia="Domingo" />
              <Hour start="8pm" end="9pm" dia="Domingo" />
              <Hour start="9pm" end="10m" dia="Domingo" />
              <Hour start="10pm" end="11pm" dia="Domingo" />
              <Hour start="11pm" end="12pm" dia="Domingo" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Schedule;
