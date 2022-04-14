import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [islogin, setLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({
    id: '',
    username: '',
    user_img: '',
    email: '',
    mobile: '',
  });
  const [content, setContent] = useState([]);

  // console.log(userinfo);
  const handleLogout = () => {
    // console.log('로그아웃?');
    axios.post('http://localhost:4000/logout').then(res => {
      setUserinfo(null);
      setLogin(false);
      navigate('/login'); // '/login' 페이지로 이동시켜야한다.
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
        console.log(post);
        setContent(post.data);
        // console.log(post);
      });
  };
  // console.log(content);
  const isAuthorized = async () => {
    await axios
      .get('http://localhost:4000/auth', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(async aa => {
        await setUserinfo(aa);
        handleContents(userinfo.data.data.jwt.id);
      });
  };
  // console.log(userinfo);
  const handleLoginSuccess = async () => {
    // console.log('app.js', userInfo.data.data.id); 디비속 유저의 아이디값이 나옵니다
    setLogin(true);
    await isAuthorized();
  };

  useEffect(() => {
    isAuthorized();
    // console.log(userinfo);
  }, []);

  // element={<Signup username={userinfo.username}
  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} />

      {!islogin ? (
        <Login handleLoginSuccess={handleLoginSuccess} />
      ) : (
        <Routes>
          <Route
            path="/main"
            element={<Main content={content} userinfo={userinfo} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/writePage" element={<Write userinfo={userinfo} />} />
          <Route path="/mypage" element={<Mypage userinfo={userinfo} />} />
          <Route path="/edituserinfo" element={<Edituserinfo />} />
        </Routes>
      )}
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
