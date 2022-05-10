import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";

import App from "./App";
import { AppContextProvider } from "./redux/AppContextProvider";
console.log(store.getState());

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider store={store}>
      <App />
    </AppContextProvider>
  </StrictMode>
);
