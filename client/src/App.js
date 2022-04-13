import './App.css';
import { React, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import cat from './cat.jpg';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Write from './Pages/Write';
import Mypage from './Pages/Mypage';
import Nav from './Components/Nav';
import Edituserinfo from './Pages/Edit_userInfo';

function App() {
  const [userinfo, setUserinfo] = useState({
    username: 'dummy name',
    user_img: cat,
    email: 'dummy email',
    mobile: 'dummy mobile',
  });
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
      <Nav />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/writePage" element={<Write />} />
        <Route path="/mypage" element={<Mypage userinfo={userinfo} />} />
        <Route path="/edituserinfo" element={<Edituserinfo />} />
      </Routes>
    </div>
  );
}

export default App;
