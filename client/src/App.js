import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Write from './Pages/Write';

function App() {
  // const history = useHistory();
  // 유저 정보를 받아와야한다.
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const isAuthenticated = async () => {
    await axios({
      url: 'http://localhost4000/users',
      method: 'get',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => {
      console.log(res.data);
      setIsLogin(true);
    });
  };
  const handleLogout = () => {
    axios.post('https://localhost:4000/signout').then(res => {
      setUserinfo(null);
      setIsLogin(false);
      // '/login' 페이지로 이동시켜야한다.
    });
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/writePage" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
