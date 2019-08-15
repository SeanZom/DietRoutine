import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  thumb: {
    borderRadius: '6px',
  }
}));

const CommonItem = ({ food }) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar classes={{root: classes.thumb}} alt={food["food_name"]} src={food.photo.thumb} />
      </ListItemAvatar>
      <ListItemText primary={food["food_name"]} />
    </ListItem>
  );
};

export default CommonItem;
