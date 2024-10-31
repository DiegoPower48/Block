import "./App.css";
import Cuadro from "./components/form";

function App() {
  return (
    <>
      <form className="container">
        <Cuadro space={1} />
        <Cuadro space={2} />
        <Cuadro space={3} />
        <Cuadro space={4} />
        <Cuadro space={5} />
        <Cuadro space={6} />
        <Cuadro space={7} />
        <Cuadro space={8} />
      </form>
    </>
  );
}

export default App;
