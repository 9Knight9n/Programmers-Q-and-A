import React, {Component} from 'react';
import '../App.css';
import SignUpForm from './SignUpForm';
import emailImg from '../img/email.png'
import passImg from '../img/password.png'
import axios from 'axios';

class SignInForm extends Component{ 
  static displayName = 'RememberMe'

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

  async handleSubmit() {
    if (!this.emailValidation())
        return(alert("Email is not valid"));
      const form = new FormData()
      form.set('email', this.state.email);
      form.set('password', this.state.password)
      const response =
      await axios.post('http://localhost:8000', form, {
        headers: { 'Content-Type': 'multipart/form-data'
        },
      })

      console.log(response)
      if(response.data.error)
        return(alert(response.data.error))



    // event.preventDefault();

    // var axios = require('axios');
    // var FormData = require('form-data');
    // var data = new FormData();
    // data.append('email', 'jhadha@jkk.jiw');
    // data.append('password', 'mjdkwdwdkw');

    // var config = {
    //   method: 'post',
    //   url: 'http://127.0.0.1:8000/',
    //   headers: { 
    //     'Cookie': 'csrftoken=G82oeX0c0JgfXD76kiWRP495S1rGXMfamWpleY39f5iwI2hOKFvF2SGwv2xVi7hP',
    //     'Content-Length':'<calculated when request is sent>',
    //     'Content-Type':'multipart/form-data; boundary=<calculated when request is sent>'
    //   },
    //   data : data
    // };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


  }

  handleClick = () => {
    this.props.refToSelectComponent(1);
  }

  emailValidation = () => {
    var validator = require("email-validator");
     // true
    return (validator.validate(this.state.email));
  }

    render() {
        return (
          <div>
            
            <div className="emailField">
              <img className="emailImg" src={emailImg} />
              <input placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} className="emailField" type="email" />
            </div>
            <div className="passField">
              <img className="passImg" src={passImg} />
              <input placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} name="password" className="passField" type="password" />
            </div>
            <div className="signInTransfer">
              <button name= "signInButton" type="button" onClick={this.handleSubmit} >Sign In</button>
              <br />
            </div>
            <br />
            <br />
              <div className="signUpTransfer">
                <p>Don't have an account ?</p> 
                <button onClick={this.handleClick} name= "signUpButton" type="button">Sign Up</button>
              </div>
          </div>
          ); 
      }

}

export default SignInForm;