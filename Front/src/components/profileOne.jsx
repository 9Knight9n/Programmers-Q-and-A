import React, { Component } from 'react';
import './CSS/profileOne.css';


class ProfileOne extends Component {
    state = {
                usernameError:false,
                emailError:false,
                succeed:false,
                firstName: null,
                lastName:null,
                username:null,
                emailProfile:null
            }
            handleChange = (e) => { 
                let target=e.target;
                let name = target.name;
                let value = target.value
                this.setState({
                 [name]:value
                });
              }
    render() { 
        return ( 
            <React.Fragment>
        

                    <div class="content-form1 d-flex justify-content-center align-items-center">
                    
                        <div class="INPUT-FORM1"> 
                            <p>First Name :</p>
                            <input name="firstName" value={this.state.firstName}  onChange={this.handleChange} type="text" class="input p-2" placeholder="Enter First name"/><br></br>
                            <p>Last Name :</p>
                            <input name="lastName" value={this.state.lastName}  onChange={this.handleChange} type="text" class="input p-2" placeholder="Enter Last name"/><br></br>
                            <p>Username :</p>
                            <input name="username" value={this.state.username}  onChange={this.handleChange} type="text" class="input p-2" placeholder="Enter Username"/>
                            {this.state.usernameError? <p className="pro-error">Username already exist!</p> : <br/>}
                            <p>Email :</p>
                            <input name=" emailProfile" value={this.state. emailProfile}  onChange={this.handleChange} type="text" class="input p-2" placeholder="Enter Email"/>
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