import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import Opinions from './pages/opinions.jsx'
import TopBar from './components/topbar';
import { Container } from '@mui/material';

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
      {(loggedIn) ? <TopBar onLoggedOut={logOut} /> : ""}
      <Container sx={{ marginTop: 10 }}>
        <Routes>
          {(loggedIn) ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login onLoggedIn={logIn} />} />}
          <Route path="/opinions" element={<Opinions />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
