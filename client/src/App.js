import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Write from './Pages/Write';

function App() {
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
