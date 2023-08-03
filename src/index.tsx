import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/App";
// import "./sass/index.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { appStore } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={appStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
