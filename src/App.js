import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import Opinions from './pages/opinions.jsx'
import Providers from './pages/providers.jsx';
import LoginAdmin from './pages/loginadmin.jsx';
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
        <Route path="/opinions" element={<Opinions loggedIn={loggedIn} onLoggedOut={logOut}/>}/>
        <Route path='/providers' element={<Providers loggedIn={loggedIn} onLoggedOut={logOut}/>}/>
        <Route path='/loginadmin' element={<LoginAdmin loggedIn={loggedIn} onLoggedOut={logOut}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
