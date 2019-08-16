import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { setOpenDialog, setSelectedFood } from "../actions";

const useStyles = makeStyles(theme => ({
  thumb: {
    borderRadius: "6px"
  }
}));

const ResultItem = ({ food, setOpenDialog, setSelectedFood }) => {
  const classes = useStyles();

  const onItemClick = () => {
    setSelectedFood(food);
    setOpenDialog(true);
  }

  return (
    <div>
      <ListItem button onClick={onItemClick}>
        <ListItemAvatar>
          <Avatar
            classes={{ root: classes.thumb }}
            alt={food["food_name"]}
            src={food.photo.thumb}
          />
        </ListItemAvatar>
        <ListItemText
          primary={food["food_name"]}
          secondary={food["brand_name"]}
        />
      </ListItem>
    </div>
  );
};

export default connect(
  null,
  { setOpenDialog, setSelectedFood }
)(ResultItem);
