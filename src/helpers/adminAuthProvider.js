import React from "react";
import Login from "../pages/login.jsx";
import { AdminTopBar } from "../components/topbars";
import { AuthContext } from "./authProvider.js";

let AdminAuthContext = React.createContext({});

function useAuth() {
  return React.useContext(AuthContext);
}

function AdminRequireAuth({ loading, children }) {
  let auth = useAuth();

  if (!auth.user) {
    return <Login role={'admins'} loading={loading} />
  }

  return (<div><AdminTopBar useAuth={useAuth} />{children}</div>);
}

export { AdminAuthContext, AdminRequireAuth };