import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import windowsImg from '../img/windows.png';
import linuxImg from '../img/linux.png';
import macImg from '../img/apple.png';
import {Link} from 'react-router-dom';

class ChatroomCreationOs extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="main-box">
                <div class="elements">
                <div class="plKinds">
                        <label for="plKinds"><h1>Choose a programming language:</h1></label>
                        <select>
                            <option value=" ">Select a programming language </option>
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
                    <div className="plLink">
                        <label for="plLink"><h1>Put a link for more information about programming language:</h1></label>
                        <input placeholder="Programming language link" /> 
                    </div>

                    <div class="description descriptionPl">
                        <h1>Description :</h1>
                        <textarea class="textarea" maxlength="175" rows="4" cols="53">
                        </textarea>
                    </div>
                    <Link to="/chatroomCreationFirst">
                    <button class="backButtonPl" type="button">Back</button>
                    </Link>
                    <Link to="/chatroomCreationLast">
                    <button class="nextButtonPl" type="button">Next</button>
                    </Link>

                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationOs;