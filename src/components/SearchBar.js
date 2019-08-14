import React from "react";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";




const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "560px"
    }
  },
  searchIcon: {
    width: theme.spacing(4),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#757575"
  },
  inputRoot: {
    flex: 1,
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1),
    width: "100%"
  }
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search foods…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search"}}
      />
    </div>
  );
};

export default SearchBar;
