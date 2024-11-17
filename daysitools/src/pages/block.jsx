import { useEffect, useState } from "react";
import Cuadro from "../components/form";
import { Link } from "react-router-dom";
import axios from "axios";

function Block() {
  const [textos, setTextos] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const Datos = async () => {
      try {
        const res = await axios.get(
          "https://portfolio-c4l9.onrender.com/blocks"
        );
        setLoading(true);
        console.log(res.data[0].texto);
        setTextos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    Datos();
  }, []);

  return (
    <div>
      {!loading ? (
        <div></div>
      ) : (
        <div>
          <form className="grid grid-cols-4 grid-rows-2 gap-px w-full h-full">
            <Cuadro space={1} datos={textos[0].texto} />
            <Cuadro space={2} datos={textos[1].texto} />
            <Cuadro space={3} datos={textos[2].texto} />
            <Cuadro space={4} datos={textos[3].texto} />
            <Cuadro space={5} datos={textos[4].texto} />
            <Cuadro space={6} datos={textos[5].texto} />
            <Cuadro space={7} datos={textos[6].texto} />
            <Cuadro space={8} datos={textos[7].texto} />
          </form>
          <Link className="flex" to="/horario">
            <div className="flex-1 text-center p-5 font-bold bg-red-950 items-center text-white w-96 hover:bg-white hover:text-black">
              cuadro horarios
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Block;
