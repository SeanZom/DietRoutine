import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import DateSwitcher from "./DateSwitcher";
import SearchModal from "./SearchModal";
import SearchBar from "./SearchBar";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  searchContainer: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "560px"
    }
  }
}));

const HeadBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <div className={classes.searchContainer} onClick={toggleModal}>
        <SearchBar />
      </div>

      {/* Others */}
      <DateSwitcher />

      {showModal ? <SearchModal /> : null}
    </div>
  );
};

export default HeadBar;
