import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppStateProvider } from "../Store";
import ProtectedRoute from "../ProtectedRoute";

import Ehr from "../Ehr";
import Login from "../Login";
import Header from "../Header";

function App() {
  return (
    <Router>
      <AppStateProvider>
        <div className="app_container">
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute path="/ehr">
              <Header />
              <Ehr />
            </ProtectedRoute>
          </Switch>
        </div>
      </AppStateProvider>
    </Router>
  );
}

export default App;
