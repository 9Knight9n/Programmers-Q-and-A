import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
class App extends Component {
  render(){
    console.log("entered1");
    return (
      <Router>
        <div className="App">
           <Switch> 
              {/* Render the login component alone if we're on /login */}
              <Route exact path="/signUpForm" component={SignUpForm} />

              {/* Otherwise, render the Landing component */}
              <Route exact path="/signInForm" component={SignInForm} />
            </Switch>
        </div>
      </Router>
    ); 
  }
}
export default App;
