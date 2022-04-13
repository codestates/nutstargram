import './App.css';
import { React, useState } from 'react';
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
  const handleLoginSuccess = userInfo => {
    // console.log('app.js', userInfo.data.data.id); 디비속 유저의 아이디값이 나옵니다
    setLogin(true);
    setUserinfo({
      id: userInfo.data.data.id,
      username: userInfo.data.data.username,
      user_img: userInfo.data.data.user_img,
      email: userInfo.data.data.email,
      mobile: userInfo.data.data.mobile,
    });
  };
  const [content, setContent] = useState({
    // 여기서 contents를 관리하고 db에서 받아온 뒤 main page에 Props로 내려줘서 렌더링 할 것입니다.
    user_id: '',
    content_img: [],
    content_text: '',
    content_emoji: null,
    content_weather: null,
  });
  const [isLogin, setIsLogin] = useState(true);
  const handleUserInfo = () => {};

  const handleLogout = () => {
    console.log('로그아웃?');
    axios.post('http://localhost:4000/signout').then(res => {
      setUserinfo(null);
      setIsLogin(false);
      Navigate('/login'); // '/login' 페이지로 이동시켜야한다.
    });
  };
  const handleContents = () => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/',
    }).then(res => {
      console.log(res.data);
    });
  };
  // element={<Signup username={userinfo.username}
  return (
    <div className="App">
      {islogin ? (
        <div>
          <NavBar />
          <Main userinfo={userinfo} />
        </div>
      ) : (
        <div>
          <Login handleLoginSuccess={handleLoginSuccess} />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/main"
          element={<Main handleContents={handleContents} />}
        />
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
