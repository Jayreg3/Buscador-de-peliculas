import { connect } from "react-redux";
import Contador from "../components/Contador";

const mapStateToProps = state => {
  return { counter: state.countReducer.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
};

const createConnection = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ComponentWithConnectionToRedux = createConnection(Contador);

export default ComponentWithConnectionToRedux;
