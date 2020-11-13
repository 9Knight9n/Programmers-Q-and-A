import React, { Component } from 'react';
import './CSS/profileOne.css';


class ProfileOne extends Component {
    state = {
        usernameError:false,
        emailError:false,
        succeed:false
    }
    render() { 
        return ( 
            <React.Fragment>
        

                    <div class="content-form1 d-flex justify-content-center align-items-center">
                    
                        <div class="INPUT-FORM1"> 
                            <p>First Name :</p>
                            <input type="text" class="input p-2" placeholder="Enter First name"/><br></br>
                            <p>Last Name :</p>
                            <input type="text" class="input p-2" placeholder="Enter Last name"/><br></br>
                            <p>Username :</p>
                            <input type="text" class="input p-2" placeholder="Enter Username"/>
                            {this.state.usernameError? <p className="pro-error">Username already exist!</p> : <br/>}
                            <p>Email :</p>
                            <input type="text" class="input p-2" placeholder="Enter Email"/>
                            {this.state.emailError? <p className="pro-error">Email already registered!</p> : <br/>}
                            <div class="btn btn-pro">Save</div>
                            {this.state.succeed? <p className="pro-success">Saved successfully!</p> : <br/>}
                        </div>
                            
                            
                            
                    </div>
                
                
            </React.Fragment>
            
         );
    }
}
 
export default ProfileOne;