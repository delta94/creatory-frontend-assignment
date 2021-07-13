import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PATH } from "../../constants/path";
import { useAuth } from "../../context";

export default function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            exact
            to={{
              pathname: PATH.LOGIN,
            }}
          />
        )
      }
    />
  );
}
