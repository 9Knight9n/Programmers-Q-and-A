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
                    <div className="plLink">
                        <label for="plLink">Put a link for more information about programming language:</label>
                        <input placeholder="Programming language link" /> 
                    </div>
                    <div class="plKinds">
                        <label for="plKinds">Choose a programming language:</label>
                        <select>
                            <option value="windows">Java</option>
                            <option value="linux">Python</option>
                            <option value="mac">Php</option>
                            <option value="mac">JavaScript</option>
                            <option value="mac">C</option>
                            <option value="mac">C++</option>
                            <option value="mac">Csharp</option>
                            <option value="mac">Html</option>
                            <option value="mac">Css</option>
                            <option value="mac">Csharp</option>
                        </select>
                    </div>
                    <div class="description descriptionPl">
                        <h3>description :</h3>
                        <textarea class="textarea" maxlength="175" rows="4" cols="50">
                        </textarea>
                    </div>
                    <button class="nextButtonPl" type="button">Next</button>
                    <button class="backButtonPl" type="button">Back</button>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationOs;