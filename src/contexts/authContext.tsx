import type React from "react";
import { createContext, useState } from "react";

interface AuthContextType {
  token: string | null;
  setAuth: (auth: { token: string | null }) => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setAuth: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const setAuth = (auth: { token: string | null }) => {
    setToken(auth.token);
  };

  return (
    <AuthContext.Provider value={{ token, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
