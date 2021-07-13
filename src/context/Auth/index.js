import React, { createContext, useCallback, useContext, useState } from "react";
// import { useRouter } from "next/router";
import { AuthService } from "../../services";
import { useLocalStorageState } from "../../hooks/useLocalStorage";
import { KEY_AUTH } from "../../sysconfig";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorageState(
    KEY_AUTH,
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = () => {
    window.localStorage.removeItem(KEY_AUTH);
    setIsAuthenticated(null);
  };

  const handleLogin = useCallback(
    ({ username, password }) => {
      setIsLoading(true);
      AuthService.login({ username, password })
        .then((result) => {
          const { authenticated } = result || {};

          setIsLoading(false);

          if (result && result.error) {
            setIsLoading(true);
          }
          if (authenticated) {
            setIsAuthenticated(authenticated);
          } else {
            setError({ message: "Something wrong!" });
          }
          //   window.location.href = "/";
        })
        .catch((err) => {
          window.location.href = "/";
        })
        .finally(() => {
          // setIsLoading(false);
        });
    },
    [setIsAuthenticated]
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        logout,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
