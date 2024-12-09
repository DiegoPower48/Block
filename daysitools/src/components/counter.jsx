import React, { useState } from "react";
import { useCounterStore } from "../store/store";

export default function Counter() {
  const { totalTime } = useCounterStore();
  const [value, setValue] = useState("");

  useState(() => {
    setValue(totalTime);
  }, [totalTime]);

  return (
    <>
      <div className="font-bold mt-3"> Horas total de la semana: </div>
      <div className="font-bold ml-3 p-3 bg-red-950 rounded-md text-white">
        {totalTime}
      </div>
    </>
  );
}
