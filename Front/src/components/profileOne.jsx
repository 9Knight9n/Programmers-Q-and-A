import React, { Component } from 'react';
import './CSS/profileOne.css';


class ProfileOne extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        

                    <div class="content-form1 d-flex justify-content-center d-flex align-items-center">
                    
                        <div class="INPUT-FORM1"> 
                        
                            <input type="text" class="input p-2" placeholder="First name"/><br></br>
                            <input type="text" class="input p-2" placeholder="Last name"/><br></br>
                            <input type="text" class="input p-2" placeholder="User name"/><br></br>
                            <input type="text" class="input p-2" placeholder="Email"/><br></br>
                            <div class="btn">Save all details</div>
            
                        </div>
                            
                            
                            
                    </div>
                
                
            </React.Fragment>
            
         );
    }
}
 
export default ProfileOne;