import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from './SignUpForm';
// import emailImg from './emailImg'
import emailImg from '../img/email.png';
import passImg from '../img/password.png';


class SignInForm extends Component{ 

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

    render() {
        return (
          <Router>
              <div className="mainBox">
                <div className="fields">
                  <div className="emailField">
                    <img className="emailImg" src={emailImg}/>
                    <input name="email" value={this.state.email} onChange={this.handleChange} className="emailField" placeholder="Enter your email address" type="email" />
                  </div>
                  <div className="passField">
                    <img className="passImg" src={passImg}/>
                    <input name="password" className="passField" placeholder="Enter your password" type="password" />
                  </div>
                  {/* <input className="checkBox2" type="checkbox" onclick="myFunction()" /><h5>Show password</h5> */}
                  <div className="rememberMe">                
                    <input className="checkBox" type="checkbox" />
                    <h5>Remember Me</h5>
                  </div>
                </div>
                <div className="signInTransfer">
                  <button name= "signInButton" type="button" onClick={this.handleSubmit} >Sign In</button>
                  <br />
                  <a href="#">Forgot Password?</a>
                </div>
                <br />
                <br />
                <div className="signUpTransfer">
                  <p>Don't have an account ?</p> 
                  <Link to= "/signUpForm"><button name= "signUpButton" type="button">Sign Up</button></Link>
                </div>
              </div> 
              <Route path="/signUpForm" component={SignUpForm}>

              </Route>
          </Router>
          ); 
    }

}

// function myFunction() {
//   var x = document.getElementsByClassName("passField");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

export default SignInForm;