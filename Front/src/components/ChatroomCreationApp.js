import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import AppAvatar from '../img/uploadAvatar.png';
import {Link} from 'react-router-dom';

class ChatroomCreationApp extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-box">
                <div className="elements">
                    <div className="inputs">
                        <div className="linkFieldApp">
                            <label for="linkFieldApp">Put a link for more information about application:</label>
                            <input placeholder="Application link" /> 
                        </div>
                        <div class="description descriptionApp">
                            <h3>Description :</h3>
                            <textarea class="textarea" maxlength="175" rows="4" cols="53">
                            </textarea>
                        </div>
                    </div>
                    <Link to="/chatroomCreationFirst">
                        <button class="backButtonApp" type="button">Back</button>
                    </Link>
                    <Link to="/chatroomCreationLast">
                        <button class="nextButtonApp" type="button">Next</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationApp;