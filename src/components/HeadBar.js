import React from "react";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
  root: {
    padding: "0 10px",
    backgroundColor: theme.palette.primary.main,
    height: 200
  }
}));

const HeadBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  );
};

export default HeadBar;
