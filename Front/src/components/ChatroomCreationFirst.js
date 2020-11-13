import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import './CSS/ChatroomCreation.css';
import osImg from '../img/operating-system.png';
import appImg from '../img/mobile-app.png';
import prLangImg from '../img/coding-language.png';


class ChatroomCreationOs extends Component {
    state = { 
       chatroomContext: null,
     }
    render() { 
        return ( 
                <div class="main-box">
                    <div class="elements">
                        <div class="contextKinds">
                            <label for="contextKinds"><h1>Choose a context for your chatroom:</h1></label>
                            <div className="contextLogo">
                                <div className="osBox">
                                    <div className="os">
                                        <Link name="OS" to="/chatroomCreationOs" onClick={this.handleClick}>
                                            <img src={osImg} />
                                            <h3>Operating system</h3>
                                        </Link> 
                                    </div>
                                </div>
                                <div className="appBox">
                                    <div className="application">
                                        <Link to="/chatroomCreationApp">
                                            <img src={appImg} />
                                            <h3>Application</h3>
                                        </Link> 
                                    </div>
                                </div>
                                <div className="prLangBox">
                                    <div className="prlang">
                                        <Link to="/chatroomCreationPl">
                                            <img src={prLangImg} />
                                            <h3>Programming Languages</h3>
                                        </Link>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/">
                            <button class="backButtonFirst" type="button">Back</button>
                        </Link>
                    </div>
                </div>
         );
    }
}
 
export default ChatroomCreationOs;