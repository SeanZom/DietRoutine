import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const appTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    text: {
      primary: "#2E2E2E",
      secondary: "#535353"
    }
  }
});

ReactDOM.render(
  (<Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </Provider>),
  document.getElementById("root")
);
