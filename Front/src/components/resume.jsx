import React, { Component } from 'react';
import './CSS/resume.css';


class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <div class="choosefile">
                    <input type="file" id="real-file"/>
                    <button type="button" id="custum-button">Choose file</button>
                    <spn id="custum-text">No file chosen,yet</spn>
                    </div>
                    
                
            </React.Fragment>
            
         );
    }
}
 
export default Resume;