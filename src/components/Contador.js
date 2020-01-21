import React from "react";

const Contador = props => {
  return (
    <span>
      V{props.counter}
      <button className="button" onClick={props.increment}>
        +
      </button>
      <button className="button" onClick={props.decrement}>
        -
      </button>
    </span>
  );
};

export default Contador;
