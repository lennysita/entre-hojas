import React from "react";

import "./App.css";


function Menu() {

  return (

    <nav className="menu-navegacion">

      {/* Cambia "Mi Marca" por el nombre de tu proyecto */}

      <h2 className="logo">Entre Hojas</h2>

      <ul>

        <li>Inicio</li>

        <li>Catalogo</li>

        <li>Categorias</li>

        <li>Contacto</li>

        <li>Nosotros</li>

      </ul>

    </nav>

  );

}


export default Menu;