import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from '@material-ui/core/Divider';

import CommonItem from './CommonItem';


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper
  },
  groupHeader: {
    fontSize: "0.9rem",
    padding: '12px 16px',
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    color: theme.palette.text.secondary
  }
}));

const CommonList = ({foods}) => {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.groupHeader}>Common</p>
      <List className={classes.root}>
        {foods.map((food, index) => {
          return (
            <div key={food['food_name']}>
              <CommonItem food={food} />
              <Divider variant={index === foods.length - 1 ? 'fullWidth' : 'inset'} component="li" />
            </div>
          );
        })}
      </List>
    </div>
    
  );
}

export default CommonList;