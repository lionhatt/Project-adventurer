import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UserAuthentication from './pages/userAuthentication'
import { UserProvider } from "./utils/GlabalState"

function App() {
  return (
    <Router>
      <div className="App">
        <UserProvider>
          <Switch>
            <Route exact path="/" component={UserAuthentication} />   
          </Switch>
        </UserProvider>
      </div>
    </Router>

  );
}


export default App;
