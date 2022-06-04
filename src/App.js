import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import Opinions from "./pages/opinions.jsx";
import { TopBar, AdminTopBar } from "./components/topbars";
import { Container } from "@mui/material";
import LoginAdmin from "./pages/loginadmin.jsx";
import EventForm from "./pages/eventForm";
import AdminHome from "./pages/providers.jsx";
import ProviderForm from "./pages/providerForm.jsx";
import ProviderProfile from "./pages/providerProfile.jsx";
// import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => {
    setLoggedIn(true);
  };

  const logOut = () => {
    setLoggedIn(false);
  };

  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  const adminLogIn = () => {
    setAdminLoggedIn(true);
  };

  const adminLogOut = () => {
    setAdminLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {loggedIn ? <TopBar onLoggedOut={logOut} /> : ""}
      {adminLoggedIn ? <AdminTopBar onLoggedOut={adminLogOut} /> : ""}
      <Container sx={{ marginTop: 10 }}>
        <Routes>
          <Route
            path="/admin"
            element={
              adminLoggedIn ? (
                <AdminHome />
              ) : (
                <LoginAdmin onLoggedIn={adminLogIn} />
              )
            }
          />
          <Route
            path="/"
            element={loggedIn ? <Home /> : <Login onLoggedIn={logIn} />}
          />
          <Route
            path="opinions"
            element={loggedIn ? <Opinions /> : <Login onLoggedIn={logIn} />}
          />
          <Route
            path="eventForm"
            element={loggedIn ? <EventForm /> : <Login onLoggedIn={logIn} />}
          />
          <Route
            path="providerForm"
            element={
              adminLoggedIn ? (
                <ProviderForm />
              ) : (
                <Login onLoggedIn={adminLogIn} />
              )
            }
          />
          <Route
            path="providerProfile"
            element={
              loggedIn ? <ProviderProfile /> : <Login onLoggedIn={logIn} />
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
export default App;
