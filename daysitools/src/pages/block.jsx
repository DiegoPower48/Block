import { useEffect, useState } from "react";
import Cuadro from "../components/form";
import axios from "axios";

function Block() {
  const [textos, setTextos] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const Datos = async () => {
      try {
        const res = await axios.get("https://backendmichu.onrender.com/blocks");
        setLoading(true);
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
          <form className="grid grid-cols-4 grid-rows-2 gap-px w-full min-h-screen">
            <Cuadro space={1} datos={textos[0].texto} />
            <Cuadro space={2} datos={textos[1].texto} />
            <Cuadro space={3} datos={textos[2].texto} />
            <Cuadro space={4} datos={textos[3].texto} />
            <Cuadro space={5} datos={textos[4].texto} />
            <Cuadro space={6} datos={textos[5].texto} />
            <Cuadro space={7} datos={textos[6].texto} />
            <Cuadro space={8} datos={textos[7].texto} />
          </form>
        </div>
      )}
    </div>
  );
}

export default Block;
