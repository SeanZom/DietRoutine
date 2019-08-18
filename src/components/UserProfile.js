import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    borderBottom: "none",
    padding: theme.spacing(2.5, 0),
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    order: -2,
    [theme.breakpoints.up("md")]: {
      width: "35%",
      height: 224,
      order: 0,
      backgroundColor: "transparent",
      justifyContent: "center",
      borderBottom: "1.5px solid rgba(0, 0, 0, 0.12)"
    }
  },
  circleBg: {
    margin: "0 10px",
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .45)",
    color: "white"
  },
  title: {
    fontSize: "1.4rem",
    fontWeight: 500
  },
  userName: {
    color: "white",
    margin: theme.spacing(1.5, 1),
    [theme.breakpoints.up("md")]: {
      width: "100%",
      textAlign: "center",
      color: theme.palette.text.primary,
      fontWeight: 400,
      order: 1
    }
  },
  userAvatar: {
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(14),
      height: theme.spacing(14)
    }
  },
  weightContainer: {
    marginRight: 0,
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      order: -1,
      marginRight: 10,
      marginLeft: 10
    }
  }
}));

const user = {
  first_name: "Jane",
  last_name: "Appleseed",
  height_cm: 163,
  weight_kg: 57
};

const UserProfile = () => {
  const classes = useStyles();
  const theme = useTheme();
  // Check if current screen's width is equal or greater than medium size
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const displayName = isUpMd
    ? `${user.first_name} ${user.last_name}`
    : user.first_name;

  return (
    <div className={classes.root}>
      <img
        className={`${classes.circleBg} ${classes.userAvatar}`}
        src="https://s3.amazonaws.com/uifaces/faces/twitter/maiklam/128.jpg"
        alt="user avatar"
      />
      <p className={`${classes.title} ${classes.userName}`}>{displayName}</p>
      <div className={`${classes.circleBg} ${classes.weightContainer}`}>
        <p className={classes.title}>{user.weight_kg}</p>
        <p>kg</p>
      </div>
      <div className={classes.circleBg}>
        <p className={classes.title}>{user.height_cm}</p>
        <p>cm</p>
      </div>
    </div>
  );
};

export default UserProfile;
