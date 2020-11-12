import React, { Component } from 'react';
import './CSS/profileThree.css';


class profileThree extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                  
                    
                <div >
                    <div class="fileUploadInput">
                    <label>✨ Upload File</label>
                    <input type="file" />
                    <button>+</button></div>
                </div> 

                <div class="container6">
                    <button class="btnn btn1">HTML</button>
                    <button class="btnn btn2">CSS</button>
                    <button class="btnn btn3">C++</button>
                    <button class="btnn btn4">JAVA</button>
              
                </div>
                    
            </React.Fragment>
            
         );
    }
}
 
export default profileThree;