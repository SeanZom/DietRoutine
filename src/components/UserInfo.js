import React from "react";
import { makeStyles } from "@material-ui/styles";

import UserProfile from "./UserProfile";
import DietData from './DietData';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      backgroundColor: '#f5f5f5',
      minWidth: 320,
      maxWidth: '30%'
    }
  }
}));

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UserProfile />
      <DietData />
    </div>
  );
};

export default UserInfo;
