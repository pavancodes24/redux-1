import React from "react";
// import { store } from "../redux/reducer";
export const AppContext = React.createContext();

const AppContextProvider = ({ children, store }) => {
  const { dispatch, getState } = store;
  const value = { dispatch, getState };
  const [state, setState] = React.useState(0);

  const forcedUpdate = () => setState((prev) => prev + 1);
  store.subscribe(forcedUpdate);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
