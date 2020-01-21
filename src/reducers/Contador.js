const INITIALSTATE = {
  counter: 0
};

export function counterFunction(state = INITIALSTATE, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
