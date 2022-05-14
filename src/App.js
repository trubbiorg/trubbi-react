import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import './App.css';

const App = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => {
    setLoggedIn(true);
  }

  const logOut = () => {
    setLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        {(loggedIn) ? <Route path="/" element={<Home loggedIn={loggedIn} onLoggedOut={logOut} />} /> : <Route path="/" element={<Login onLoggedIn={logIn} />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
