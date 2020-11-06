import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';

class ChatroomCreationOs extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="main-box">
                <div class="elements">
                    <div class="inputs">
                        <div class="osKinds">
                            <label for="opKinds">Choose an operating system:</label>
                            <select class="os">
                                <option value="operatingSystem">Windows</option>
                                <option value="programmingLang">Linux</option>
                                <option value="application">Mac</option>
                            </select>
                        </div>
                        <div class="description">
                            <h3>description :</h3>
                            <textarea class="textarea" maxlength="170" rows="4" cols="50">
                            </textarea>
                        </div>
                    </div>
                        <button class="createButton" type="button">Create</button>
                        <button class="backButton" type="button">Back</button>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationOs;