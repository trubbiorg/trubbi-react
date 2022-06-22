import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/login.jsx";
import { TopBar } from "../components/topbars";
import { fetchProviderToken } from "./apiClient.jsx";
import { useStateIfMounted } from "use-state-if-mounted";

function AuthProvider({ children }) {
  let [user, setUser] = useStateIfMounted(localStorage.getItem('token'));

  let signin = async (newUser, callback) => {
    let response = await fetchProviderToken(newUser).then(
      response => {
        let token = response.data.access_token;
        // localStorage.setItem("token", token);
        setUser(token);
        return { token };
      }
    ).catch(
      error => { return {error: error.response.data.message} }
    )
    if(response.token){
      localStorage.setItem("token", response.token);
      callback();
      return response;
    }
    else{
      response = (response.error?.constructor === Array) ? response.error[0] : response.error;
      return response;
    }
  };

  let signout = (callback) => {
    console.log('llegooo');
    setUser(null);
    localStorage.clear();
    callback();
  };

  let value = { user, setUser, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

let AuthContext = React.createContext({});

function useAuth() {
  return React.useContext(AuthContext);
}


function RequireAuth({ loading, children }) {
  let auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <Login loading={loading} />
  }

  return (<div><TopBar useAuth={useAuth} />{children}</div>);
}

export { AuthContext, RequireAuth, AuthProvider };