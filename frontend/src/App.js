import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from './components/SignUp';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext';
import { UserProfile } from './components/UserProfile';
function App() {
  const [token, setToken] = useState('');
  return (
    <LoginContext.Provider value={{token, setToken}}>
    <Router>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <h2 className="navbar-brand" to={"/login"}>User Authentication</h2>
        </div>
      </nav>
      </header>
      <div className="container" style={{paddingTop: 100}}>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/user" element={<UserProfile/>} />
            </Routes>
          </div>
          </div>
      </div>
      </Router>
      </LoginContext.Provider>
  );
}

export default App;
