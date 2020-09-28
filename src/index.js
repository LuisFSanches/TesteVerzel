import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
