import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import ResultItem from "./ResultItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper
  },
  groupHeader: {
    fontSize: "0.9rem",
    fontWeight: 500,
    padding: "12px 16px",
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    color: theme.palette.text.secondary
  }
}));

const ResultGroup = ({ groupName, groupItems }) => {
  const classes = useStyles();

  if (groupItems.length === 0) {
    return null;
  }

  return (
    <div>
      <p className={classes.groupHeader}>{groupName}</p>
      <List className={classes.root}>
        {groupItems.map((food, index) => {
          return (
            <div key={food["food_name"]}>
              <ResultItem food={food} />
              <Divider
                variant={
                  index === groupItems.length - 1 ? "fullWidth" : "inset"
                }
                component="li"
              />
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default ResultGroup;
