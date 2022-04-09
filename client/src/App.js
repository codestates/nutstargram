import './App.css';
import { React } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/Nav';
import Main from './Pages/Main';

const App = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Main} />
      <Route path="/nav" component={NavBar} />
    </div>
  );
};

export default App;
