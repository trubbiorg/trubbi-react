import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import Opinions from "./pages/opinions.jsx";
import Tourists from "./pages/tourists.jsx";
import { TopBar } from "./components/topbars";
import { Container } from "@mui/material";
import EventForm from "./pages/eventForm";
// import AdminHome from "./pages/providers.jsx";
// import ProviderForm from "./pages/providerForm.jsx";
import Provider from "./pages/provider.jsx";
// import AdminCategories from "./pages/categories.jsx";
// import CategoryForm from "./pages/categoryForm.jsx";
// import ProviderEvents from "./pages/providerEvents.jsx";
// import EventEditForm from "./pages/eventEditForm.jsx";
import { fetchProviderToken } from "./helpers/apiClient.jsx";
import { useStateIfMounted } from "use-state-if-mounted";
import Loading from './components/loading.jsx'
import { AuthProvider, RequireAuth } from './helpers/authProvider.js'

const App = () => {
  const [loading, setLoading] = useStateIfMounted(false)

  return (
    <div>
      { (loading) ? <Loading open={loading} /> : '' }
      <BrowserRouter>
        <AuthProvider>
          {/* { user ? <AdminTopBar /> : '' } */}
          <Container sx={{ marginTop: 10 }}>
            <Routes>
              <Route path="login" element={<Login loading={setLoading} />} />
              <Route path="/" element={<RequireAuth loading={setLoading}><Home loading={setLoading} /></RequireAuth>} />
              <Route path="eventForm" element={<RequireAuth loading={setLoading}><EventForm loading={setLoading} /></RequireAuth>} />
              <Route path="eventForm/:id" element={<RequireAuth loading={setLoading}><EventForm loading={setLoading} /></RequireAuth>} />
              <Route path="provider" element={<RequireAuth loading={setLoading}><Provider loading={setLoading} /></RequireAuth>} />
              <Route path="events/:id/opinions" element={<RequireAuth loading={setLoading}><Opinions loading={setLoading} /></RequireAuth>} />
              <Route path="events/:id/tourists" element={<RequireAuth loading={setLoading}><Tourists loading={setLoading} /></RequireAuth>} />
              {/*
                <Route path="/admin" element={<RequireAuth><AdminHome /></RequireAuth>} />
                <Route path="providerForm" element={<RequireAuth><ProviderForm /></RequireAuth>} />
                <Route path="categories" element={<RequireAuth><AdminCategories /></RequireAuth>} />
                <Route path="categories/categoryForm" element={<RequireAuth><CategoryForm /></RequireAuth>} />
                <Route path="admin/providerEvents/:id" element={<RequireAuth><ProviderEvents /></RequireAuth>} />
              */}
            </Routes>
          </Container>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;