import React from "react";
import { makeStyles } from "@material-ui/styles";

import HeadBar from "./HeadBar";
import FabAdd from "./FabAdd";
import MainContent from "./MainContent";
import "../styles/main.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      height: "100vh"
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeadBar />
      <MainContent />
      <FabAdd />
    </div>
  );
};

export default App;
