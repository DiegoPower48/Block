import axios from "axios";
import React, { useState } from "react";

export default function Cuadro(props) {
  const { space, datos } = props;

  const [data, setData] = useState(datos);

  const enviarDatos = async (id, texto) => {
    const datos = {
      id: id,
      texto: texto,
    };
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/block`, datos);
    } catch (error) {
      console.log(error);
    }
  };

  const handle = (event) => {
    const newValue = event.target.value;
    setData(newValue);
    enviarDatos(space, newValue);
  };

  return (
    <textarea
      className="cajitaxd "
      spellCheck="false"
      value={data}
      onChange={handle}
    ></textarea>
  );
}
