import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './CSS/ChatroomCreation.css';
import osImg from '../img/operating-system.png';
import appImg from '../img/mobile-app.png';
import prLangImg from '../img/coding-language.png';
import chatroomCreationOs from './ChatroomCreationOs';

class ChatroomCreationOs extends Component {
    state = { 
       
     }
    render() { 
        return ( 
            <Router>
                <div class="main-box">
                    <div class="elements">
                        <div class="contextKinds">
                            <label for="contextKinds"><h1>Choose a context for your chatroom:</h1></label>
                            <div className="contextLogo">
                                <div className="osBox">
                                    <div className="os">
                                        <Link to="/chatroomCreationOs">
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
                                        <a href="#">
                                            <img src={prLangImg} />
                                            <h3>Programming Languages</h3>
                                        </a>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/chatroomCreationOs">
                            <chatroomCreationOs />
                        </Route>
                        <Route path="/chatroomCreationApp">
                            <chatroomCreationApp />
                        </Route>
                    </Switch>
                </div>
            </Router>
         );
    }
}
 
export default ChatroomCreationOs;