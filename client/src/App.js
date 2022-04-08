import './App.css';
import React from 'react';
import NavBar from './Components/Nav';
import Modal from './Components/Modals/Modal';
// import logo from './logo.svg';

function App() {
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
