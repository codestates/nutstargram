import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;
// eslint-disable-next-line react/prop-types
const MainPage = ({ handleLogout }) => {
  return (
    <div>
      <div>메인 페이지</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainPage;
