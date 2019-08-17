import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import { calcTotal } from "../utils/mathutil";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    width: "100%",
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up("md")]: {
      flex: 1
    }
  },
  thumb: {
    borderRadius: "6px"
  },
  tailRoot: {
    flexGrow: 0,
    textAlign: "end",
    paddingRight: theme.spacing(2)
  },
  capitalize: {
    textTransform: "capitalize"
  }
}));

const generateServingsInfo = ({
  serving_qty,
  serving_unit,
  serving_weight_grams,
  serving_size
}) => {
  const totalWeight = calcTotal(
    serving_qty,
    serving_weight_grams,
    serving_size
  );

  return `${serving_size} ${serving_unit} (${totalWeight} g)`;
};

const getCaloriesInfo = ({ serving_qty, nf_calories, serving_size }) => {
  const totalCalories = calcTotal(serving_qty, nf_calories, serving_size);
  return `${totalCalories} cal`;
};

const ListContent = ({ listData, classes }) => {
  return (
    <List>
      {listData.map(item => (
        <React.Fragment key={item.food_name}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                classes={{ root: classes.thumb }}
                alt={item.food_name}
                src={item.thumb}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.food_name}
              secondary={generateServingsInfo(item)}
            />
            <ListItemText
              classes={{
                root: classes.tailRoot,
                secondary: classes.capitalize
              }}
              primary={getCaloriesInfo(item)}
              secondary={item.meal_type}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

const IntakeList = ({ intakeList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {intakeList && intakeList.length > 0 && (
        <ListContent classes={classes} listData={intakeList} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const selectedDate = state.base.selectedDate;
  const currentData = state.diet.find(item => item.date === selectedDate);
  const intakeList = currentData ? currentData.intake_list : [];

  return {
    intakeList: intakeList
  };
};

export default connect(
  mapStateToProps,
  null
)(IntakeList);
