import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import AppAvatar from '../img/uploadAvatar.png';

class ChatroomCreation extends Component {
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
                            <textarea class="textarea" maxlength="175" rows="4" cols="50">
                            </textarea>
                        </div>
                    </div>
                    <button class="createButtonApp" type="button">Next</button>
                    <button class="backButtonApp" type="button">Back</button>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreation;