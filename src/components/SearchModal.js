import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from '@material-ui/core/Paper';

import Modal from "./Modal";
import SearchBar from "./SearchBar";

const useStyles = makeStyles(theme => ({
  result: {
    marginTop: '10px',
  }
}));

const SearchModal = () => {
  const classes = useStyles();

  return (
    <Modal>
      <SearchBar />
      <Paper className={classes.result}>
        <h1>Paper here</h1>
      </Paper>
    </Modal>
  );
};

export default SearchModal;
