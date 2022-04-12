/* eslint-disable */
import './App.css';
import { React, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Write from './Pages/Write';
import Mypage from './Pages/Mypage';
import Nav from './Components/Nav';
import Edituserinfo from './Pages/Edit_userInfo';

//axios.defaults.withCredentials = true;
function App() {
  const [islogin, setLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({
    username: '1번이름',
    user_img: '',
    email: '',
    mobile: '',
  });
  const handleLoginSuccess = () => {
    setLogin(true);
  };

  const handleUserInfo = () => {};

  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const handleLogout = () => {
    // navigate('/login');
    // axios({
    //   method: 'post',
    //   url: 'https://localhost:4000/logout',
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // })
    //   .then(() => {
    //     navigate('/');
    //   })
    //   .catch(err => console.log(err));
    // console.log('성공');
  };
  // element={<Signup username={userinfo.username}
  return (
    <div className="App">
      {islogin ? (
        <div>
          <Nav />
          <Main />
        </div>
      ) : (
        <div>
          <Login handleLoginSuccess={handleLoginSuccess} />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
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
