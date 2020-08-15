import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useLocalStorage } from "../../hooks";

function ProtectedRoute({ children, ...rest }) {
  const [token] = useLocalStorage();
  const location = useLocation();
  return (
    <Route {...rest}>
      {token ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}

export default ProtectedRoute;
