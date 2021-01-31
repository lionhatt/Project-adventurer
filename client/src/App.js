import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UserAuthentication from './pages/userAuthentication'
import Trails from './pages/Trails'
import Nav from './components/nav'
import { UserProvider } from "./utils/GlobalState"

function App() {
  return (
    <Router>
      <div className="App">
        <UserProvider>
          <Nav />
          <Switch>
            <Route exact path="/user">
              <UserAuthentication />
            </Route>
            <Route exact path="/">
              <Trails />
            </Route>   
          </Switch>
        </UserProvider>
      </div>
    </Router>

  );
}


export default App;
