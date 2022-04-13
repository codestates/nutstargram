import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Write from './Pages/Write';
import Mypage from './Pages/Mypage';
import NavBar from './Components/Nav';
import Edituserinfo from './Pages/Edit_userInfo';
import Signup from './Pages/Signup';

// axios.defaults.withCredentials = true;
function App() {
  const [islogin, setLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({
    id: '',
    username: '',
    user_img: '',
    email: '',
    mobile: '',
  });
  const [content, setContent] = useState([]);

  console.log(userinfo);
  const handleLogout = () => {
    // console.log('로그아웃?');
    axios.post('http://localhost:4000/signout').then(res => {
      setUserinfo(null);
      setLogin(false);
      Navigate('/login'); // '/login' 페이지로 이동시켜야한다.
    });
  };
  // console.log(userinfo.id); // 숫자 찍힘
  const handleContents = user_id => {
    axios
      .post(
        'http://localhost:4000/main',
        {
          user_id,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then(post => {
        console.log(post.data);
        setContent(post.data);
      });
  };
  // console.log(content);
  const isAuthorized = () => {
    axios
      .get('http://localhost:4000/auth', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(aa => {
        setUserinfo(aa);
        handleContents(userinfo.data.data.jwt.id);
      });
  };
  // console.log(userinfo);
  const handleLoginSuccess = userInfo => {
    // console.log('app.js', userInfo.data.data.id); 디비속 유저의 아이디값이 나옵니다
    setLogin(true);
    isAuthorized();
  };

  useEffect(() => {
    isAuthorized();
    // console.log(userinfo);
  }, []);

  // element={<Signup username={userinfo.username}

  console.log(islogin);
  return (
    <div className="App">
      {/* {islogin ? <NavBar /> : null} */}
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Login handleLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/main"
          element={<Main content={content} userinfo={userinfo} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/writePage" element={<Write userinfo={userinfo} />} />
        <Route path="/mypage" element={<Mypage userinfo={userinfo} />} />
        <Route path="/edituserinfo" element={<Edituserinfo />} />
      </Routes>
    </div>
  );
}

export default App;
