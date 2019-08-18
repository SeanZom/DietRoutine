import React from "react";
import { makeStyles } from "@material-ui/styles";

import HeadBar from "./HeadBar";
import FabAdd from "./FabAdd";
import DateSwitcher from "./DateSwitcher";
import UserProfile from "./UserProfile";
import DietData from './DietData';
import IntakeList from "./IntakeList";

import "../styles/main.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    backgroundColor: 'white',
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      backgroundColor: '#f5f5f5',
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeadBar />
      <DateSwitcher />
      <UserProfile />
      <IntakeList />
      <DietData />
      <FabAdd />
    </div>
  );
};

export default App;
