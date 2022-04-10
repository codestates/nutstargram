import React, { useEffect, useState } from 'react';
import { Switch, Route, useNavigate, Redirect } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Main from './Pages/Main';
import NavBar from './Components/Nav';
import Modal from './Components/Modals/Modal';

axios.defaults.withCredentials = true;
// import logo from './logo.svg';

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };
  const handleLogout = () => {
    navigate('/login');
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

  return (
    <div className="App">
      <div>
        <NavBar />
        <Main handleLogout={handleLogout} />
      </div>
    </div>
  );
}

export default App;
