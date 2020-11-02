import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignInForm from './SignInForm';
import emailImg from '../img/email.png';
import passImg from '../img/password.png';
import confirmImg from '../img/confirm.png';
import axios from 'axios';
import logo from '../img/backgr.jpg';

class SignUpForm extends Component{
    constructor(props) {
    super(props);
    this.state = {
      emailSignUp: '',
      passwordSignUp: '',
      confirmPassword:'',
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

  async handleSubmit() {

    if (!this.emailValidation())
      return(alert("Email is not valid"));
    if (!this.checkPassword()) 
      return;
    if (!this.validatePassword())
      return;
    
    const form = new FormData()
    form.set('email', this.state.emailSignUp.toLowerCase());
    console.log(this.state.emailSignUp.toLowerCase())
    form.set('password', this.state.passwordSignUp)
    const response =
    await axios.post('http://localhost:8000/signup', form, {
      headers: { 'Content-Type': 'multipart/form-data'
      },
    })

    console.log(response)
    if(response.data.error)
      return(alert(response.data.error))
    else
    {
      alert("Sign up Compeleted!")
      window.$username = this.state.emailSignUp.split("@")[0];
      return this.handleClick(2);
    }
      
  
    
   // alert('A name was submitted: ' + this.state.value);
  }


  handleClick = () => {
    this.props.refToSelectComponent(0);
  }

  emailValidation = () => {
    var validator = require("email-validator");
     // true
    return (validator.validate(this.state.emailSignUp));
  }
//checking confrim and pass
  checkPassword() { 
    let password1 = this.state.passwordSignUp;
    let password2 = this.state.confirmPassword;
    // If password not entered 
    if (password1 === '') 
    {
      alert ("Please enter Password"); 

      return false; 
    }

    // If confirm password not entered 
    else if (password2 === '') 
    {
      alert ("Please enter confirm password"); 

      return false; 
    }

    // If Not same return False.
    else if (password1 !== password2) { 
        alert ("\nPassword did not match: Please try again...") ;
        return false; 
    } 
    else{
        return true;

    }
  }

  validatePassword() {
    var passwordValidator = require('password-validator');
 
    // Create a schema
    var schema = new passwordValidator();
    
    // if (!schema.is(this.state.passwordSignUp).min(8)) {
    //   return(alert("Minimum password length must be 8 characters"));
    // }

    // if (!schema.is(this.state.passwordSignUp).max(30)) {
    //   return(alert("Maximum password length must be 30 characters"));
    // }

    // if (!schema.has(this.state.passwordSignUp).uppercase()) {
    //   return(alert("Password must contain an uppercase character"));
    // }

    // if (!schema.has(this.state.passwordSignUp).lowercase()) {
    //   return(alert("Password must contain an lowercase character"));
    // }

    // if (!schema.has(this.state.passwordSignUp).digits(1)) {
    //   return(alert("Password must contain at least 1 digits"));
    // }

    // if (!schema.is(this.state.passwordSignUp).not().oneOf(['Passw0rd', 'Password123'])) {
    //   return(alert("Select a stronger password"));
    // }else {
    //   return(true);
    // }

   // Add properties to it
    schema
    .is().min(8)                                    // Minimum length 8
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
    if (!schema.validate(this.state.passwordSignUp)) {
      return(alert("password must contain uppercase, lowercase, digit and at least 8 characters"))
    }else {
      return true;
    }
   // Validate against a password string
    //console.log(schema.validate('validPASS123'));
   // => true
    //console.log(schema.validate('invalidPASS'));
   // => false
    
    //Get a full list of rules which failed
    //console.log(schema.validate('joke', { list: true }));
    //=> [ 'min', 'uppercase', 'digits' ]
  }

    render() {
        return (
                    <div className="Abed-css">
                      <img className="logo" src={logo} alt="Logo" />
                    <img className="emailImgSignUp" src={emailImg} />
                    <div className="emailFieldSignUp">
                      <input className="emailFieldSignUp" placeholder="Enter your email address" name="emailSignUp" value={this.state.email} onChange={this.handleChange}  type="email" />
                    </div>
                    <img className="passImgSignUp" src={passImg} />
                    <div className="passFieldSignUp">
                      <input className="passFieldSignUp" placeholder="Enter your password " name="passwordSignUp" value={this.state.email} onChange={this.handleChange}  type="password" />
                    </div>
                    <img className="confirmImg" src={confirmImg} />
                    <div className="confirmPassField">
                      <input placeholder="Enter your password again" value={this.state.confirmPassword} onChange={this.handleChange} name="confirmPassword" className="confirmPassField" type="password" />
                    </div>
                  <div className="signUpTransfer2">
                    <button name= "signUpButton2" type="button" onClick={this.handleSubmit} >Sign Up</button>
                    <br />
                  </div>
                  <br />
                  <br />
                  <div className="signInTransfer2">
                    <p>Don't have an account ?</p> 
                    <button onClick={this.handleClick} name= "signInButton2" type="button">Sign In</button>
                  </div> 
                </div>
        );
    }

}

export default SignUpForm;