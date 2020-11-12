import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import ChatroomCreationAvatar from '../img/uploadAvatar.png';
import {Link} from 'react-router-dom';

class ChatroomCreation extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-box">
                <div className="elements">
                    <div className="chatroomAvatar">
                        <a href="#"><img src={ChatroomCreationAvatar} alt="chatroomPic" /></a>
                        <a href="#"><h3>choose an avatar</h3></a>
                    </div>
                    <div className="nameField">
                        <input placeholder="Enter chatroom name" />
                    </div>
                    <Link to="/chatroomCreationFirst">
                        <button className="backButtonLast" type="button">Back</button>
                    </Link>
                    <Link to="/">
                        <button className="createButtonLast" type="button">Create</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreation;