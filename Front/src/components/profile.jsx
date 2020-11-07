import React, { Component } from 'react';
import './CSS/profile.css';



class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="profile">
                    <div class="content-form">  
                        <div class="INPUT-FORM"> 
                            <input type="text" class="input" placeholder="full name"/><br></br>
                            <br></br><br></br><br></br><br></br><br></br><br></br>
                            <input type="text" class="input" placeholder="username"/><br></br>
                            <input type="text" class="input" placeholder="phone"/><br></br>
                            <input type="text" class="input" placeholder="Email"/><br></br>
                            <input type="text" class="input" placeholder="subject"/><br></br>
                            <br></br><br></br>
            
                            </div>
                            <div class="msg">
                            <textarea placeholder="Message"></textarea><br></br>
                            <div class="btn">send</div>
                            </div>
                    </div> 
                </div>
            </React.Fragment>
            
         );
    }
}
 
export default Profile;