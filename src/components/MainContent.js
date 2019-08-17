import React from "react";

import UserInfo from "./UserInfo";
import IntakeList from "./IntakeList";

const style = {
  display: "flex",
  flexWrap: "wrap",
  flex: 1
};

const MainContent = () => {
  return (
    <div style={style}>
      <UserInfo />
      <IntakeList />
    </div>
  );
};

export default MainContent;
