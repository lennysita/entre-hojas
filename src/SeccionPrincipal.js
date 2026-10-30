import React, { useState } from "react";

import "./App.css";


function SeccionPrincipal() {

  // Usamos el estado para controlar si mostramos un mensaje secreto o descuento

  const [mostrarMensaje, setMostrarMensaje] = useState(false);


  return (

    <main className="seccion-principal">

      {/* Adapta este título e imagen a tu temática */}

      <h1>Bienvenidos a Entre Hojas</h1>

      <p>Un espacio para descubrir nuevas historias, explorar conocimientos y disfrutar de la lectura.</p>


      <img 

        src="https://i.pinimg.com/736x/2c/9e/9e/2c9e9ee99f9980eb0d2820bd293eda59.jpg" 

        alt="Nuestro espacio" 

        className="imagen-destacada"

      />


      <br />

      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>

        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}

      </button>


      {/* El mensaje solo aparece si el estado es verdadero */}

      {mostrarMensaje && (

        <p className="mensaje-sorpresa">Siempre hay una nueva historia esperándote.</p>

      )}

    </main>

  );

}


export default SeccionPrincipal;