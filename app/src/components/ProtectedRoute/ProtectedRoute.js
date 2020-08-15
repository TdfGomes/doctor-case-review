import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useToken } from "../../hooks/useToken";

function ProtectedRoute({ children, ...rest }) {
  const [token] = useToken();
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
