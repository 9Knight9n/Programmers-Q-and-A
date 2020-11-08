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
                        <div className="osLogo">
                            <div className="windows">
                                <input className="winCheck" type="checkbox" name="windows" />
                                <img src={windowsImg} /> 
                                <label for="winCheck">Windows</label>  
                            </div>
                            <div className="linux">
                                <input className="linuxCheck" type="checkbox" name="mac" />
                                <img src={linuxImg} /> 
                                <label for="winCheck">Linux</label>  
                            </div>
                            <div className="mac">
                                <input className="macCheck" type="checkbox" name="mac" />
                                <img src={macImg} /> 
                                <label for="winCheck">Mac</label>  
                            </div>
                        </div>
                    </div>
                    <div class="description descriptionOs">
                        <h3>description :</h3>
                        <textarea class="textarea" maxlength="170" rows="4" cols="50">
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