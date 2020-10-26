import React, { Component } from 'react';
import './CSS/chatroom.css';

class Chatroom extends Component {
    state = {  }
    render() { 
        return (  
            <div >
                <div className="chatbox">
                    chat
                </div>
                <button className="btn btn-primary align-right">Submit Question</button>
            </div>
        );
    }
}
 
export default Chatroom;