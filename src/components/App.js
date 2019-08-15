import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

import HeadBar from './HeadBar';
import '../styles/main.css';

const appTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    text: {
      primary: "#2E2E2E",
      secondary: "#535353",
    }
  }
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={appTheme}>
        <div>
          <HeadBar />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
