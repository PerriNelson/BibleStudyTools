import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

// We want the bootstrap javascript to be loaded for those bootstrap functions
// that we need to use, such as collapse in the nav bar. There may be a better
// way to do this, but for now, this works.

// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap/dist/js/bootstrap";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
