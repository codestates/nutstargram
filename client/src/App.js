import './App.css';
import { React, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Write from './Pages/Write';
import Mypage from './Pages/Mypage';
import Nav from './Components/Nav';
import Edituserinfo from './Pages/Edit_userInfo';

function App() {
  const [userinfo, setUserinfo] = useState({
    id: '',
    username: '',
    user_img: '',
    email: '',
    mobile: '',
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleUserInfo = () => {};

  const handleLogout = () => {
    console.log('로그아웃?');
    axios.post('https://localhost:4000/signout').then(res => {
      setUserinfo(null);
      setIsLogin(false);
      Navigate('/login'); // '/login' 페이지로 이동시켜야한다.
    });
  };

  return (
    <div className="App">
      <Nav handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/writePage"
          element={<Write userinfo_id={userinfo.id} />}
        />
        <Route path="/mypage" element={<Mypage userinfo={userinfo} />} />
        <Route path="/edituserinfo" element={<Edituserinfo />} />
      </Routes>
    </div>
  );
}

export default App;
