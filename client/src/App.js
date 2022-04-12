import './App.css';
import { React, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Write from './Pages/Write';
import Mypage from './Pages/Mypage';
import NavBar from './Components/Nav';
import Edituserinfo from './Pages/Edit_userInfo';

axios.defaults.withCredentials = true;
function App() {
  const [islogin, setLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({
    id: '',
    username: '',
    user_img: '',
    email: '',
    mobile: '',
  });
  const [contents, setContents] = useState({
    // db로부터 받아올 컨텐츠 관련 정보를 담은 State를 선언해줍니다.
    // edit_content 페이지에서 Props로 내려받아서 수정할 데이터를 받아올 수 있으며
    // Main 페이지로 top-down 형식으로 데이터를 흘려보내줄 수 있을거라 생각합니다.
    user_id: '',
    content_img: [],
    content_text: '',
    content_emoji: null,
    content_weather: null,
  });

  const handleLogin = () => {
    setLogin(true);
  };

  const handleUserInfo = () => {};

  const [isLogin, setIsLogin] = useState(true);

  const handleLogout = () => {
    console.log('로그아웃?');
    axios.post('http://localhost:4000/signout').then(res => {
      setUserinfo(null);
      setIsLogin(false);
      Navigate('/login'); // '/login' 페이지로 이동시켜야한다.
    });
  };
  const handelContents = () => {
    axios.get('http://localhost:4000/users');
  };
  return (
    <div className="App">
      {islogin ? (
        <div>
          <NavBar handleLogout={handleLogout} />
          <Main />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/writePage" element={<Write />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/edituserinfo" element={<Edituserinfo />} />
      </Routes>
    </div>
  );
}

export default App;
