import React, {Component} from 'react';
import '../App.css';
import SignUpForm from './SignUpForm';
import emailImg from '../img/email.png'
import passImg from '../img/password.png'
import axios from 'axios';
import logo from '../img/backgr.jpg';
import { Link } from 'react-router-dom';

class SignInForm extends Component{ 
  static displayName = 'RememberMe';
  state = {
    test:false,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailCheckMassage:{massage:"Email is not valid!",active:false},
      passwordCheckMassage:{massage:"",active:false},
      loginCheckMassage:{massage:"Wrong Email or Password!",active:false}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  validatePassword() {
    var passwordValidator = require('password-validator');
 
    // Create a schema
    var schema = new passwordValidator();
    schema
    .is().min(8)                                    // Minimum length 8
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
    return(schema.validate(this.state.password))
  }

  async handleSubmit() {
    this.clearErrors()
    if (!this.emailValidation())
    {
      this.setState({email:""})
      this.setState({emailCheckMassage:{massage:"Email is not valid!",active:true}});
      return;
    }
    
    if (this.state.password.length===0)
    {
      this.setState({password:""})
      return(this.setState({passwordCheckMassage:{massage:"Enter your password",active:true}}));
    }

    if (!this.validatePassword())
    {
      this.setState({password:""})
      return(this.setState({passwordCheckMassage:{massage:"Password is incorrect!",active:true}}));
    }
    
    const form = new FormData()
    form.set('email', this.state.email.toLowerCase());
    form.set('password', this.state.password)
    const response =
    await axios.post('http://localhost:8000', form, {
      headers: { 'Content-Type': 'multipart/form-data'
      },
    })

    console.log(response)

    if(response.data.error==="wellcome")
    {
      window.$username = this.state.email.split("@")[0];
      return this.handleClick(2);
    }

    this.setState({email:""})
    this.setState({password:""})
    return(this.setState({loginCheckMassage:{massage:response.data.error,active:true}}));
  }


  clearErrors(){
    this.setState({emailCheckMassage:{active:false}});
    this.setState({passwordCheckMassage:{active:false}})
    this.setState({loginCheckMassage:{active:false}})
  }

  


  emailValidation = () => {
    var validator = require("email-validator");
     // true
    return (validator.validate(this.state.email));
  }

    render() {
        return (
          <div className="Abed-css">
            <img className="logo" src={logo} alt="Logo" />
            <div className="emailField">
              <img className="emailImg" src={emailImg} />
              <input placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} className="emailField" type="email" />
            </div>
            <div className="validEmailSignIn error">
              {this.state.emailCheckMassage.active ? this.state.emailCheckMassage.massage:""}
            </div>
            <div className="passField">
              <img className="passImg" src={passImg} />
              <input placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} name="password" className="passField" type="password" />
            </div>
            <div className="validpassSignIn error">
              {this.state.passwordCheckMassage.active ? this.state.passwordCheckMassage.massage:""}
            </div>
            <div className="signInTransfer">
              <button name= "signInButton" type="button" onClick={this.handleSubmit} >Sign In</button>
              <br />
            </div>
            <br />
            <div className="validFieldsSignIn error">
              {this.state.loginCheckMassage.active ? this.state.loginCheckMassage.massage:""}
            </div>
            <br />
              <div className="signUpTransfer">
                <p>Don't have an account ?</p> 
                <Link to="/signup">
                  <button name= "signUpButton" type="button">Sign Up</button>
                </Link>
              </div>
          </div>
          ); 
      }

}

export default SignInForm;