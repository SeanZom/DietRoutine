import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import DataText from "./DataText";
import { calcTotal } from "../utils/mathutil";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.12)",
    padding: theme.spacing(2.5),
    [theme.breakpoints.up("md")]: {
      borderBottom: "none"
    }
  },
  calContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  progressContainer: {
    margin: theme.spacing(3, 0)
  },
  percentage: {
    color: theme.palette.text.secondary,
    position: "relative",
    display: "inline-block",
    top: 10,
    transform: "translateX(-50%)"
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: theme.spacing(1)
  }
}));

const DietData = ({
  breakfastCalo,
  lunchCalo,
  dinnerCalo,
  snackCalo,
  total,
  percentageOfLimit
}) => {
  const classes = useStyles();

  const progressCursorOffset = percentageOfLimit > 100 ? 100 : percentageOfLimit;

  return (
    <div className={classes.root}>
      <div className={classes.calContainer}>
        <DataText
          primary={`${total} cal`}
          secondary="consumed"
          textAlign="start"
        />
        <DataText primary="1500 cal" secondary="daily goal" textAlign="end" />
      </div>
      <div className={classes.progressContainer}>
        <LinearProgress variant="determinate" value={progressCursorOffset} />
        <p
          className={classes.percentage}
          style={{ left: `${progressCursorOffset}%` }}
        >{`${percentageOfLimit}%`}</p>
      </div>
      <div className={classes.categoryContainer}>
        <DataText primary={breakfastCalo} secondary="Breakfast" />
        <DataText primary={lunchCalo} secondary="Lunch" />
        <DataText primary={dinnerCalo} secondary="Dinner" />
        <DataText primary={snackCalo} secondary="Snack" />
      </div>
    </div>
  );
};

const calcCalories = (list, type) => {
  const targetList = list.filter(item => item.meal_type === type);

  const totalCalories = targetList.reduce((acc, currentItem) => {
    return (
      acc +
      calcTotal(
        currentItem.serving_qty,
        currentItem.nf_calories,
        currentItem.serving_size
      )
    );
  }, 0);

  return totalCalories;
};

const mapStateToProps = state => {
  const selectedDate = state.base.selectedDate;
  const currentData = state.diet.find(item => item.date === selectedDate);
  let breakfastCalo = 0;
  let lunchCalo = 0;
  let dinnerCalo = 0;
  let snackCalo = 0;
  let total = 0;
  let percentageOfLimit = 0;
  if (currentData && currentData.intake_list.length > 0) {
    const currentIntakeList = currentData.intake_list;
    breakfastCalo = calcCalories(currentIntakeList, "breakfast");
    lunchCalo = calcCalories(currentIntakeList, "lunch");
    dinnerCalo = calcCalories(currentIntakeList, "dinner");
    snackCalo = calcCalories(currentIntakeList, "snack");
    total = breakfastCalo + lunchCalo + dinnerCalo + snackCalo;
    percentageOfLimit = Math.round((total / 1500) * 100);
  }

  return {
    breakfastCalo,
    lunchCalo,
    dinnerCalo,
    snackCalo,
    total,
    percentageOfLimit
  };
};

export default connect(
  mapStateToProps,
  null
)(DietData);
