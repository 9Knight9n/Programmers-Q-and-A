import React, {Component} from 'react';
import '../App.css';
import SignUpForm from './SignUpForm';
import emailImg from '../img/email.png'
import passImg from '../img/password.png'

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

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleClick = () => {
    this.props.refToSelectComponent(1);
    console.log("Props:",this.props);
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


// function signUpForm() {
//       return(
//         <div>
//           <div className="emailField">
//             <input placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} className="emailField" type="email" />
//           </div>
                    
//           <div className="passField">
//             <input placeholder="Enter your password" name="password" className="passField" type="password" />
//           </div>
//           <div className="confirmPassField">
//             <input placeholder="Enter your password again" name="confirmPassword" className="confirmPassField" type="password" />
//           </div>
//           <div className="signInTransfer">
//             <button name= "signInButton" type="button" onClick={this.handleSubmit} >Sign In</button>
//             <br />
//           </div>
//           <br />
//           <br />
//           <div className="signUpTransfer">
//             <p>Don't have an account ?</p> 
//             <Link to= "/signInForm"><button className="aa" name= "signUpButton" type="button">Sign In</button></Link>
//           </div> 
//         </div>
//       );
// }


// function myFunction() {
//   var x = document.getElementsByClassName("passField");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

export default SignInForm;