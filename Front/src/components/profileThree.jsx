import React, { Component } from 'react';
import './CSS/profileThree.css';


class profileThree extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <div class="choosefile">
                    <input type="file" id="real-file"/>
                
                    </div>     
            </React.Fragment>
            
         );
    }
}
 
export default profileThree;