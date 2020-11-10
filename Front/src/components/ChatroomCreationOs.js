import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import windowsImg from '../img/windows.png';
import linuxImg from '../img/linux.png';
import macImg from '../img/apple.png';

class ChatroomCreationOs extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="main-box">
                <div class="elements">
                    <div class="osKinds">
                        <label for="osKinds">Choose os:</label>
                        <select>
                            <option value="windows">Windows</option>
                            <option value="linux">Linux</option>
                            <option value="mac">Mac</option>
                        </select>
                    </div>
                    <div class="description descriptionOs">
                        <h3>description :</h3>
                        <textarea class="textarea" maxlength="175" rows="4" cols="50">
                        </textarea>
                    </div>
                    <button class="nextButtonOs" type="button">Next</button>
                    <button class="backButtonOs" type="button">Back</button>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationOs;