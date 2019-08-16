import React from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { showSearch } from "../actions";

const style = {
  position: "fixed",
  bottom: "16px",
  right: "16px"
};

const FabAdd = ({ showSearch }) => {
  return (
    <div style={style}>
      <Fab color="primary" aria-label="add" onClick={() => showSearch(true)}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default connect(
  null,
  { showSearch }
)(FabAdd);
