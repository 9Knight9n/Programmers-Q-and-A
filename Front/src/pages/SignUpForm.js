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
      error:false,
      emailCheckMassage:{massage:"Email is not valid!",active:false},
      passwordCheckMassage:{massage:"",active:false},
      ConfirmPasswordCheckMassage:{massage:"",active:false},
      signUpCheckMassage:{massage:"Wrong Email or Password!",active:false}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({error:false})
    this.clearError()
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });


    console.log("pass length",value)
    if(!this.validatePassword(value) && (value.length!==0) && (name==="passwordSignUp"))
    {
      this.setState({error:false})
      this.setState({passwordCheckMassage:{massage:"Password must contains Uppercase, Lowercase, digit and at least 8 characters",active:true}});
    }
    else
    {
      this.setState({passwordCheckMassage:{massage:"",active:true}});
    }
    

    if(name==="confirmPassword")
    {
      if (this.state.passwordSignUp!==value)
      {
        this.setState({ConfirmPasswordCheckMassage:{massage:"Password doesn't match!",active:true}});
      }
    }
    else if(name==="passwordSignUp")
    {
      if (this.state.confirmPassword!==value && this.state.confirmPassword.length!==0)
      {
        this.setState({ConfirmPasswordCheckMassage:{massage:"Password doesn't match!",active:true}});
      }
    }
    else
    {
      this.setState({ConfirmPasswordCheckMassage:{massage:"",active:true}});
    }

  }

  async handleSubmit() {

    console.log(this.state.passwordSignUp)
    this.clearError()

    if (!this.emailValidation())
    {
      this.setState({emailSignUp:""});
      return(this.setState({emailCheckMassage:{massage:"Email is not valid!",active:true}}));
    }
    if (!this.checkPassword())
    {
      return;
    }
    if (!this.validatePassword())
    {
      this.setState({error:true})
      this.setState({signUpCheckMassage:{massage:"Password must contains Uppercase, Lowercase, digit and at least 8 characters",active:true}});
    }
    
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
      return(this.setState({signUpCheckMassage:{massage:"Email already registered!",active:true}}))
    else
    {
      window.$username = this.state.emailSignUp.split("@")[0];
      return this.handleClick(2);
    }
      
  
    
   // alert('A name was submitted: ' + this.state.value);
  }


  handleClick = (index) => {
    this.props.refToSelectComponent(index);
  }

  emailValidation = () => {
    var validator = require("email-validator");
     // true
    return (validator.validate(this.state.emailSignUp));
  }
//checking confrim and pass
  checkPassword() { 
    this.setState({error:true})
    let password1 = this.state.passwordSignUp;
    let password2 = this.state.confirmPassword;
    this.setState({error:true})
    // If password not entered 
    if (password1 === '') 
    {
      this.setState({passwordCheckMassage:{massage:"Please enter Password",active:true}});
      return false; 
    }

    // If confirm password not entered 
    else if (password2 === '') 
    {
      console.log("pass not confirmed")
      this.setState({ConfirmPasswordCheckMassage:{massage:"Please enter confirm password",active:true}});
      console.log("activate?:",this.state.ConfirmPasswordCheckMassage.massage)
      return false;
    }

    // If Not same return False.
    else if (password1 !== password2) { 

      this.setState({signUpCheckMassage:{massage:"Password did not match: Please try again...",active:true}});
      return false;
    } 
    else{
      this.setState({error:false})
        return true;

    }
  }

  validatePassword(pass) {
    var passwordValidator = require('password-validator');
 
    // Create a schema
    var schema = new passwordValidator();
    


   // Add properties to it
    schema
    .is().min(8)                                    // Minimum length 8
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
    return schema.validate(pass);

  }


  clearError(){
    this.setState({ConfirmPasswordCheckMassage:{active:false}});
    this.setState({emailCheckMassage:{active:false}});
    this.setState({signUpCheckMassage:{active:false}});
    this.setState({ConfirmPasswordCheckMassage:{active:false}});
  }

    render() {
        return (
                    <div className="Abed-css">
                      <img className="logo" src={logo} alt="Logo" />
                    <div className="emailFieldSignUp">
                      <img className="emailImgSignUp" src={emailImg} /> 
                      <input className="emailFieldSignUp" placeholder="Enter your email address" name="emailSignUp" value={this.state.email} onChange={this.handleChange}  type="email" />
                    </div>
                    
                    <div className="validEmadilSignUp error">
                      {this.state.emailCheckMassage.active ? this.state.emailCheckMassage.massage:""}
                    </div>

                    <div className="passFieldSignUp">
                      <img className="passImgSignUp" src={passImg} />
                      <input className="passFieldSignUp" placeholder="Enter your password " name="passwordSignUp" value={this.state.email} onChange={this.handleChange}  type="password" />
                    </div>

                    <div className={"passValidSignUp".concat(this.state.error?" error":"")}>
                      {this.state.passwordCheckMassage.active ? this.state.passwordCheckMassage.massage:""}
                    </div>
                   
                    <div className="confirmPassField">
                      <img className="confirmImg" src={confirmImg} />
                      <input placeholder="Confirm your password" value={this.state.confirmPassword} onChange={this.handleChange} name="confirmPassword" className="confirmPassField" type="password" />
                    </div>

                    <div className={"confirmPassConflict".concat(this.state.error?" error":"")}>
                      {this.state.ConfirmPasswordCheckMassage.active ? this.state.ConfirmPasswordCheckMassage.massage:""}
                    </div>

                  <div className="signUpTransfer2">
                    <button name= "signUpButton2" type="button" onClick={this.handleSubmit} >Sign Up</button>
                    <br />
                  </div>
                  <br />
                  <div className="validFieldSignUp error">
                    {this.state.signUpCheckMassage.active ? this.state.signUpCheckMassage.massage:""}
                  </div>
                  <br />
                  <div className="signInTransfer2">
                    <p>Already have account ?</p> 
                    <button onClick={() => this.handleClick(0)} name= "signInButton2" type="button">Sign In</button>
                  </div> 
                </div>
        );
    }

}

export default SignUpForm;