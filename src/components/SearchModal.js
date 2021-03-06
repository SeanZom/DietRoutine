import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import Modal from "./Modal";
import SearchBar from "./SearchBar";
import { clearCurrentResult } from "../actions";
import ResultList from "./ResultList";
import DetailDialog from "./DetailDialog";

const useStyles = makeStyles(theme => ({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "560px"
    }
  },
  result: {
    marginTop: "10px",
    flex: "1",
    overflow: "scroll"
  },
  progress: {
    marginTop: 10,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    borderRadius: 4
  }
}));

const SearchModal = ({
  onClose,
  foods,
  currentResult,
  clearCurrentResult,
  isLoading
}) => {
  const classes = useStyles();

  useEffect(() => {
    const pageClick = ({ target }) => {
      if (target.parentNode.id === "modal") {
        clearCurrentResult();
        onClose();
      }
    };

    document.addEventListener("click", pageClick);

    return () => {
      document.removeEventListener("click", pageClick);
    };
  }, [clearCurrentResult, onClose]);

  const content = () => {
    if (isLoading) {
      return (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      );
    } else if (currentResult && foods[currentResult]) {
      return (
        <Paper className={classes.result}>
          <ResultList foods={foods[currentResult]} />
          <DetailDialog />
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
    currentResult: state.base.currentResult,
    isLoading: state.base.isLoading
  };
};

export default connect(
  mapStateToProps,
  { clearCurrentResult }
)(SearchModal);
