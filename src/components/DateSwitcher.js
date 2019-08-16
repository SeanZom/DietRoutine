import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRightcon from "@material-ui/icons/KeyboardArrowRight";

import DetailDialog from './DetailDialog';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    color: 'white',
    width: '100%',
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      width: "560px",
    },

    '& h2': {
      fontSize: '1.9rem',
      fontWeight: 300,
    }
  },
  icon: {
    color: 'white',
  }
}));

const DateSwitcher = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton>
        <ArrowLeftIcon className={classes.icon}/>
      </IconButton>
      <h2>Today</h2>
      <IconButton>
        <ArrowRightcon className={classes.icon}/>
      </IconButton>

      <DetailDialog />
    </div>
  );
};

export default DateSwitcher;
