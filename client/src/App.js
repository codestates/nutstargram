import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/Nav';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Pages/Main';
// import logo from './logo.svg';

function App() {
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
      <Routes>
        <Route path="/" element={Login} />
        <Route path="/signup" element={Signup()} />
      </Routes>

      <div>{/* <NavBar /> */}</div>
      {/* NavBar는 일단 죽여놨습니다. 로그인 주고받고 & 상태 받아 올 때까지 */}
    </div>
  );
}

export default App;
