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
import Map from "./components/map.jsx";
import AdminCategories from "./pages/categories.jsx"
import CategoryForm from "./pages/categoryForm.jsx"

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
            path="opinions/:id"
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
            path="providerProfile/:id"
            element={
              loggedIn ? <ProviderProfile /> : <Login onLoggedIn={logIn} />
            }
          />
          <Route path="categories" 
          element={
            adminLoggedIn ? (
            <AdminCategories />
            ) : (
            <Login onLoggedIn={adminLogIn} />
            )
          }
          />
          <Route path="categories/categoryForm" 
          element={
            adminLoggedIn ? (
            <CategoryForm />
            ) : (
            <Login onLoggedIn={adminLogIn} />
            )
          }
          />

        </Routes>
      
      </Container>
    </BrowserRouter>
  );
};
export default App;
