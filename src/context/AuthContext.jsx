import { createContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );
  const login = () => {
    localStorage.setItem("auth", true);
    setIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}>
      
      {children}
    </AuthContext.Provider>
  );
}
