import React from "react";
import BackButton from "../components/BackButton";

const NotFound = () => {
  return (
    <div>
      <h1 className="title">404</h1>
      <p className="subtitle">Esa pagina no exista</p>
      <BackButton />
    </div>
  );
};

export default NotFound;
