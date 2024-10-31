import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cuadro({ space }) {
  const [data, setData] = useState();

  const Datos = async () => {
    try {
      const res = await axios.get("https://portfolio-c4l9.onrender.com/blocks");
      const array = res.data;
      setData(array[space - 1]?.texto);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const enviarDatos = async (id, texto) => {
    const datos = {
      id: id,
      texto: texto,
    };
    try {
      await axios.post("https://portfolio-c4l9.onrender.com/editblock", datos);
    } catch (error) {
      console.log(error);
    }
  };

  const handle = (event) => {
    const newValue = event.target.value;
    setData(newValue);
    enviarDatos(space, newValue);
  };

  useEffect(() => {
    Datos();
  }, []);

  return (
    <textarea
      className="cajitaxd"
      spellCheck="false"
      value={data}
      onChange={handle}
    ></textarea>
  );
}
