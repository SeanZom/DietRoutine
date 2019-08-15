import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

import Modal from "./Modal";
import SearchBar from "./SearchBar";
import { clearCurrentResult } from "../actions";
import CommonList from "./CommonList";

const useStyles = makeStyles(theme => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  result: {
    marginTop: "10px",
    flex: '1',
    overflow: 'scroll',
  }
}));

const SearchModal = ({ onClose, foods, currentResult, clearCurrentResult }) => {
  const classes = useStyles();

  const pageClick = ({ target }) => {
    console.log(target);
    if (target.parentNode.id === "modal") {
      clearCurrentResult();
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", pageClick);

    return () => {
      document.removeEventListener("click", pageClick);
    };
  }, []);

  const content = () => {
    if (currentResult && foods[currentResult]) {
      return (
        <Paper className={classes.result}>
          <CommonList foods={foods[currentResult].common} />
        </Paper>
      );
    }

    return null;
  };

  return (
    <Modal>
      <div className={classes.contentContainer}>
        <SearchBar autoFocus={true} />
        {content()}
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    foods: state.foods,
    currentResult: state.base.currentResult
  };
};

export default connect(
  mapStateToProps,
  { clearCurrentResult }
)(SearchModal);
