import React from "react";
import { Link } from "react-router-dom";

//este es para que todos los back buttons son exactamente igual
const BackButton = () => {
  return (
    <Link className="button is-info" to="/">
      &lt;--Claro | Volver a la portada
    </Link>
  );
};

export default BackButton;
