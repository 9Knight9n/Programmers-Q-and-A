import React, { Component } from 'react';
import './CSS/resume.css';


class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        
               <div class="activity">
                     
                    <div class="content-form">
                    
                        <div class="INPUT-FORM"> 
                        
                            <input type="text" class="input" placeholder="ask questions"/><br></br>
                            <input type="text" class="input" placeholder="answer questions"/><br></br>
                            <input type="text" class="input" placeholder="activity time"/><br></br>
                            <input type="text" class="input" placeholder="user rate"/><br></br>
                            <div class="btn">Save all details</div>
            
                            </div>
                            
                            
                            
                            </div>
                    </div> 
                
                
            </React.Fragment>
            
         );
    }
}
 
export default Resume;