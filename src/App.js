import React from 'react';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import LoginPage from './components/LoginPage/LoginPage.tsx';
import MainPAge from './components/MainPage/MainPAge.tsx';
import RegisTer from './components/Regis/RegisTer.tsx';
import 'react-toastify/dist/ReactToastify.css';
import Terms from './components/Terms/Terms.tsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisTer/>}></Route>
          <Route path='/iot/:id' exact element={<MainPAge/>}></Route>
          <Route path='/register/terms' element={<Terms/>}></Route>

        </Routes>
      </Router>
      <ToastContainer autoClose="1000"/>
    </div>
  );
}

export default App;