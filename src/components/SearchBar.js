import React from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import { updateSearchContent, fetchFoods } from "../actions";

const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: 50,
    [theme.breakpoints.up("md")]: {
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
    width: "100%",
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1)
  }
}));

const SearchBar = ({
  autoFocus = false,
  searchContent,
  updateSearchContent,
  fetchFoods
}) => {
  const classes = useStyles();

  const onSearchSubmit = e => {
    e.preventDefault();
    fetchFoods(searchContent);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <div className={classes.inputRoot}>
        <form onSubmit={onSearchSubmit}>
          <InputBase
            autoFocus={autoFocus}
            readOnly={!autoFocus}
            placeholder="Search foods…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            value={searchContent}
            onChange={e => updateSearchContent(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchContent: state.base.searchContent
  };
};

export default connect(
  mapStateToProps,
  { updateSearchContent, fetchFoods }
)(SearchBar);
