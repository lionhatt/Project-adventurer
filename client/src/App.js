import React from "react";
import "./App.css";
import Login from './components/userAuthentication/login'
import SignUp from './components/userAuthentication/signup'
import UserAuthentication from './pages/userAuthentication'

function App() {
  return (
    <div className="App">
      <UserAuthentication />
    </div>
  );
}


export default App;
