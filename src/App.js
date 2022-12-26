import React from 'react';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from './components/LoginPage/LoginPage.tsx';
import MainPAge from './components/MainPage/MainPAge.tsx';
import RegisTer from './components/Regis/RegisTer.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisTer/>}></Route>
          <Route path='/iot' element={<MainPAge/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
