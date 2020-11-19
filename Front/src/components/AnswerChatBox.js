import React, { Component } from 'react';
import './CSS/AnswerChatBox.css';

class AnswerChatBox  extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-box">
                <div className="elements">

                    <div className="left">
                    </div>

                    <div className="center">
                        <h1>This is my Answer.</h1>
                    </div>

                    <div className="right">
                    </div>  

                </div>
            </div>
         );
    }
}
 
export default AnswerChatBox;