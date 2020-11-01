import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import SignInForm from './pages/SignInForm';
import logo from './img/backgr.jpg';
// import SignInToSignUp from './pages/SignInToSignUp';

ReactDOM.render(
  <React.StrictMode>
    
    <img className="logo" src={logo} alt="Logo" />
    <App /> 
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
