import React, { Component } from 'react';
import './CSS/profileOne.css';


class ProfileOne extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        
               <div class="profile">
                     <h2>parisa zafari</h2>  
                    <div class="content-form">
                    
                        <div class="INPUT-FORM"> 
                        
                            <input type="text" class="input" placeholder="First name"/><br></br>
                            <input type="text" class="input" placeholder="Last name"/><br></br>
                            <input type="text" class="input" placeholder="User name"/><br></br>
                            <input type="text" class="input" placeholder="Email"/><br></br>
                            <div class="btn">Save all details</div>
            
                            </div>
                            
                            
                            
                            </div>
                    </div> 
                
                
            </React.Fragment>
            
         );
    }
}
 
export default ProfileOne;