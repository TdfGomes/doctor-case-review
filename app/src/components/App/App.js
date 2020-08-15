import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppStateProvider } from "../Store";
import ProtectedRoute from "../ProtectedRoute";

import Ehr from "../Ehr";
import Login from "../Login";

function App() {
  return (
    <Router>
      <AppStateProvider>
        <div className="app_container">
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute path="/ehr">
              <Ehr />
            </ProtectedRoute>
          </Switch>
        </div>
      </AppStateProvider>
    </Router>
  );
}

export default App;
