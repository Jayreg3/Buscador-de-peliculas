const INITIALSTATE = {
  terminoBusqueda: ""
};

export function terminoCambiadoHandler(state = INITIALSTATE, action) {
  console.log(state, action);
  switch (action.type) {
    case "CAMBIADO":
      console.log(state.terminoBusqueda);
      return { terminoBusqueda: action.payload };
    default:
      return state;
  }
}
