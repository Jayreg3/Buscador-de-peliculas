import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";

const mapStateToProps = state => {
  return { terminoBusqueda: state.terminoBusqueda };
};

const mapDispatchToProps = dispatch => {
  return {
    cambiado: nuevoTermino =>
      dispatch({ type: "CAMBIADO", payload: nuevoTermino })
  };
};

const creaConexion = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ComponenteConConexionARedux = creaConexion(SearchForm);

export default ComponenteConConexionARedux;
