import React from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { showSearch } from "../actions";

import SearchModal from "./SearchModal";
import SearchBar from "./SearchBar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 70,
    padding: "0 10px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    order: -3,
  },
  searchContainer: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "560px"
    }
  }
}));

const HeadBar = props => {
  const toggleModal = () => {
    props.showSearch(!props.isShowSearch);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.searchContainer} onClick={toggleModal}>
        <SearchBar />
      </div>

      {props.isShowSearch ? <SearchModal onClose={toggleModal} /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isShowSearch: state.base.showSearch
  };
};

export default connect(
  mapStateToProps,
  { showSearch }
)(HeadBar);
