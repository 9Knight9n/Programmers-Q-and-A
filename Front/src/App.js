import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
class App extends Component {
  render(){
    return (
      <Router>
        <Route path="/signUpForm" component={SignUpForm}>

        </Route>

      </Router>
    ); 
  }
}
export default App;
