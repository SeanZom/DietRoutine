import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  primaryText: {
    fontSize: '1.6rem',
  },
  secondaryText: {
    color: theme.palette.text.secondary,
  }
}));

const DataText = ({primary, secondary, textAlign = 'center'}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{alignItems: textAlign}}>
      <p className={classes.primaryText}>{primary}</p>
      <p className={classes.secondaryText}>{secondary}</p>
    </div>
  )
};

export default DataText;
