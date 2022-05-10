import { useContext } from "react";
import Counter from "./component/Counter";
import { AppContext } from "./redux/AppContextProvider";
import "./styles.css";

export default function App() {
  const { getState } = useContext(AppContext);
  const { counter } = getState();
  return (
    <div className="App">
      <Counter />
      <div>{counter}</div>
    </div>
  );
}
