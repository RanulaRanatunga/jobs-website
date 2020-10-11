import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import Home from './components/HomeComponent';
import Profile from './components/ProfileComponent';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/signup" exact component={SignupComponent} />
        <Route path="/profile" exact component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
