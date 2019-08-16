import React from "react";
import { makeStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import DataText from "./DataText";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.12)",
    padding: theme.spacing(2.5),
    [theme.breakpoints.up("md")]: {
      borderBottom: 'none',
    }
  },
  calContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  progressContainer: {
    margin: theme.spacing(3, 0),
  },
  percentage: {
    color: theme.palette.text.secondary,
    position: 'relative',
    display: 'inline-block',
    top: 10,
    left: '85%',
    transform: 'translateX(-50%)',
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: "space-evenly",
    marginTop: theme.spacing(1),
  }
}));

const DietData = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.calContainer}>
        <DataText primary="1289 cal" secondary="consumed" textAlign="start" />
        <DataText primary="1500 cal" secondary="daily goal" textAlign="end" />
      </div>
      <div className={classes.progressContainer}>
        <LinearProgress variant="determinate" value={85} />
        <p className={classes.percentage}>{'85%'}</p>
      </div>
      <div className={classes.categoryContainer}>
        <DataText primary="153" secondary="Breakfast" />
        <DataText primary="570" secondary="Lunch" />
        <DataText primary="453" secondary="Dinner" />
        <DataText primary="113" secondary="Snack" />
      </div>
    </div>
  );
};

export default DietData;
