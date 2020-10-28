import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

class SignUpToSignIn extends Component {
    state = { 
        signUpComponent: <SignUpForm onClick = {this.handleClick} />,
        signInComponent: <SignInForm onClick = {this.handleClick} />,
        activeComponent: <SignInForm onClick = {this.handleClick} />,
     }

     handleClick = () => {
        if (this.state.activeComponent === <SignInForm />)
            this.setState({activeComponent: <SignUpForm />});
        else
            this.setState({activeComponent: <SignInForm />});
     }


    render() { 
        return ( 
            <React.Fragment>
                {this.state.activeComponent}
            </React.Fragment>
         );
    }
}
 
export default SignUpToSignIn;