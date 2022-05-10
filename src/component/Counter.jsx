import React, { useState } from "react";
// import { store } from "../redux/store";
import { addCounter, reduceCounter } from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

function Counter() {
  // const [state, setState] = useState(0);
  // const { counter } = store.getState();
  // const { dispatch } = store;
  const { dispatch, getState } = React.useContext(AppContext);
  const { counter } = getState();
  // const forceUpdate = () => setState(state+1)
  const handleAdd = () => {
    dispatch(addCounter(1));
    // setState((prev) => prev + 1);
    // forceUpdate()
  };
  const handleReduce = () => {
    dispatch(reduceCounter(1));
    // setState((prev) => prev + 1);
    // forceUpdate()
  };
  return (
    <div>
      <div>Counter:{counter} </div>
      {/* <button onClick={()=>dispatch(addCounter(1))}>ADD</button>
      <button onClick={()=>dispatch(reduceCounter(1))}>REDUCE</button> */}

      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>RED</button>
    </div>
  );
}

export default Counter;
