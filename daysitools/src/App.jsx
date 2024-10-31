import "./App.css";

function App() {
  // const { register, watch, handleSubmit, reset } = useForm();

  // const informacionFormulario = watch();

  // const Datos = () => {
  //   toast
  //     .promise(
  //       axios.post(
  //         "https://portfolio-c4l9.onrender.com/correo",
  //         informacionFormulario
  //       ),
  //       {
  //         loading: "⏳⏳  ENVIANDO COMENTARIO......",
  //         success: <b>"GRACIAS POR EL COMENTARIO!!!!🚀"</b>,
  //         error: <b>NO SE PUDO GUARDAR</b>,
  //       }
  //     )
  //     .then((response) => {
  //       reset();
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // return (
  //   <form className="comentarios" id="Contactos" method="POST">
  //     <fieldset className="contactame">
  //       <h1 className="titulo">CONTACT ME:</h1>
  //     </fieldset>
  //     <fieldset className="commentsField">
  //       <input
  //         id="nombre"
  //         type="text"
  //         className="formulario"
  //         {...register("nombre", { required: true })}
  //         required
  //       />

  return (
    <>
      <div className="container">
        <textarea
          className="cajitaxd"
          spellcheck="false"
          type="textArea"
        ></textarea>
        <textarea
          spellcheck="false"
          className="cajitaxd"
          type="textArea"
        ></textarea>
        <textarea
          className="cajitaxd"
          spellcheck="false"
          type="textArea"
        ></textarea>
        <textarea
          className="cajitaxd"
          spellcheck="false"
          type="textArea"
        ></textarea>
        <textarea
          className="cajitaxd"
          spellcheck="false"
          type="textArea"
        ></textarea>
        <textarea
          className="cajitaxd"
          spellcheck="false"
          type="textArea"
        ></textarea>
        <textarea
          className="cajitaxd"
          spellcheck="false"
          type="textArea"
        ></textarea>
        <textarea
          className="cajitaxd"
          spellcheck="false"
          type="textArea"
        ></textarea>
      </div>
    </>
  );
}

export default App;
