import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes";
// it is important to spread the state if the object is same it doesnt rerender the dom
//state,action
const initState = {
  counter: 1
};
const reducer = (state = initState, action) => {
  console.log(state, action.type, action.payload);
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case REDUCE_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};

export { reducer };
