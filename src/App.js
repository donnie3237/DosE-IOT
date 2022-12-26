import React from 'react';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import LoginPage from './components/LoginPage/LoginPage.tsx';
import MainPAge from './components/MainPage/MainPAge.tsx';
import RegisTer from './components/Regis/RegisTer.tsx';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisTer/>}></Route>
          <Route path='/iot' exact element={<MainPAge/>}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
