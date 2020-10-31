import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignInForm from './SignInForm';
import emailImg from '../img/email.png';
import passImg from '../img/password.png';

class SignUpForm extends Component{
    constructor(props) {
    super(props);
    this.state = {
      emailSignUp: '',
      passwordSignUp: '',
      confirmPassWord:'',
      verifyCode:'',
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
                        <div className="emailFieldSignUp">
                          <h4>Email :</h4>
                          <input name="emailSignUp" value={this.state.email} onChange={this.handleChange}  type="email" />
                        </div>
                        <div className="passFieldSignUp">
                          <h4>Password :</h4>
                          <input name="passwordSignUp" value={this.state.email} onChange={this.handleChange}  type="password" />
                        </div>
                        <div className="confirmPassField">
                          <h4>Confirm password :</h4>
                          <input name="confirmPassword" value={this.state.email} onChange={this.handleChange}  type="password" />
                        </div>
                        <div className="verifyField">
                          <h4>Verify code :</h4>
                          <input name="verifyCode" value={this.state.email} onChange={this.handleChange}  type="code" type="text" />
                        </div>
                      </div>
                      <div className="signUpTrasfer2">
                        <button name= "signUpButton" type="button" onClick={this.handleSubmit}>Sign Up</button>
                        <br />
                        <br />
                      </div>
                      <div className="signInTransfer2">
                        <p className="signText">Already a member ?</p>
                        <Link to="/signInForm"><button className= "signInButton2" name= "signInButton" type="button">Sign In</button></Link>
                      </div>
                    </div>
                    <Route path="/signInForm" component={SignInForm}></Route>
            </Router>
        );
    }

}

export default SignUpForm;