import React from "react";

import ResultGroup from "./ResultGroup";

const ResultList = ({ foods }) => {
  return (
    <div>
      <ResultGroup groupName="Common" groupItems={foods.common} />
      <ResultGroup groupName="Branded" groupItems={foods.branded} />
    </div>
  );
};

export default ResultList;
