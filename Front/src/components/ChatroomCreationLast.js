import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import ChatroomCreationAvatar from '../img/uploadAvatar.png';

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
                    {/* <div className="chatroomContext">
                        <label for="context">Choose a context:</label>
                        <select className="context">
                            <option value="operatingSystem">Operating system</option>
                            <option value="programmingLang">Programming language</option>
                            <option value="application">Application</option>
                        </select>
                    </div> */}
                    <button className="createButtonLast" type="button">Create</button>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreation;