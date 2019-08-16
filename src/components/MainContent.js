import React from 'react';

import UserInfo from './UserInfo';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  flex: 1
}

const MainContent = () => {

  return (
    <div style={style}>
      <UserInfo />
    </div>
  );
}

export default MainContent;