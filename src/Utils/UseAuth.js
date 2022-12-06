import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();


  // call this function when you want to save the token in local storage after login
  const login = async (data) => {
    setUser(data.data);
    navigate("/Private");
  };

  // call this function to refresh the short-lived local storage token

  const refreshUser = async (data) => {
        setUser(data.data);
};

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/Login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      refreshUser,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};