import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from './SignUpForm';
// import emailImg from './emailImg'
import emailImg from '../img/email.png';
import passImg from '../img/password.png';

class SignInForm extends Component{ 
  static displayName = 'RememberMe'

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isChecked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
        this.setState({
            isChecked: true,
            email: localStorage.username,
            password: localStorage.password
        })
    }
  }

onChangeCheckbox = event => {
  this.setState({
      isChecked: event.target.checked
    })
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
    const { email, password, isChecked } = this.state
        if (isChecked && email !== "") {
          localStorage.username = email
          localStorage.password = password
          localStorage.checkbox = isChecked
        }
        // here call the API to signup/login
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

    render() {
        return (
          <Router>
              <div className="mainBox">
                <div className="fields">
                  <div className="emailField">
                    <h4>Email :</h4>
                    <input name="email" value={this.state.email} onChange={this.handleChange} className="emailField" type="email" />
                  </div>
                  <div className="passField">
                    <h4>Password :</h4>
                    <input name="password" className="passField" type="password" />
                  </div>
                  {/* <input className="checkBox2" type="checkbox" onclick="myFunction()" /><h5>Show password</h5> */}
                  <div className="rememberMe">                
                    <input className="checkBox" type="checkbox" checked={isChecked} name="lsRememberMe" onChange={this.onChangeCheckbox} />
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