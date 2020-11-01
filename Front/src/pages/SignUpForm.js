import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignInForm from './SignInForm';
import emailImg from '../img/email.png';
import passImg from '../img/password.png';
import confirmImg from '../img/confirm.png';

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

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  handleClick = () => {
    this.props.refToSelectComponent(0);
    console.log("Props:",this.props);
  }


    render() {
        return (
                    <div>
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