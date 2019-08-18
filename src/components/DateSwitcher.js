import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRightcon from "@material-ui/icons/KeyboardArrowRight";

import { getTheDateBefore } from "../utils/dateutil";
import { setSelectedDate } from "../actions";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "white",
    width: "100%",
    height: 64,
    padding: theme.spacing(0.5, 2),
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
      order: -1,
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "560px",
    },

    "& h2": {
      fontSize: "1.4rem",
      fontWeight: 500,
      color: theme.palette.text.primary,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.9rem",
        fontWeight: 300,
        color: "white"
      }
    }
  },
  icon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      color: "white"
    }
  }
}));

const dates = [getTheDateBefore(2), "Yesterday", "Today"];

const DateSwitcher = ({ currentDate, setSelectedDate }) => {
  const classes = useStyles();

  const [index, setIndex] = useState(2);

  useEffect(() => {
    setSelectedDate(dates[index]);
  }, []);

  const handleDateSwitch = operation => {
    let current = index;
    if (operation === "next") {
      current += 1;
    } else {
      current -= 1;
    }

    if (current === 3) {
      current = 0;
    } else if (current === -1) {
      current = 2;
    }

    setIndex(current);
    setSelectedDate(dates[current]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <IconButton onClick={() => handleDateSwitch("prev")}>
          <ArrowLeftIcon className={classes.icon} />
        </IconButton>
        <h2>{currentDate}</h2>
        <IconButton onClick={() => handleDateSwitch("next")}>
          <ArrowRightcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentDate: state.base.selectedDate
  };
};

export default connect(
  mapStateToProps,
  { setSelectedDate }
)(DateSwitcher);
