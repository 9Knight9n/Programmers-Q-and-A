import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import osImg from '../img/operating-system.png';
import appImg from '../img/mobile-app.png';
import prLangImg from '../img/coding-language.png';

class ChatroomCreationOs extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="main-box">
                <div class="elements">
                    <div class="contextKinds">
                        <label for="contextKinds">Choose a context for your chatroom:</label>
                        <div className="contextLogo">
                            <div className="osBox">
                                <div className="os">
                                    <a href="#">
                                        <img src={osImg} />
                                        <h3>Operating system</h3>
                                    </a> 
                                </div>
                            </div>
                            <div className="appBox">
                                <div className="application">
                                    <a href="#">
                                        <img src={appImg} />
                                        <h3>Application</h3>
                                    </a> 
                                </div>
                            </div>
                            <div className="prLangBox">
                                <div className="prlang">
                                    <a href="#">
                                        <img src={prLangImg} />
                                        <h3>Programming Languages</h3>
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationOs;