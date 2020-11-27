import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import MyAccount from './myAccount';
import defaultProfileImg from '../img/default-profile-picture.jpg';
import linkImg from '../img/link.png';
import './CSS/chatroomInfo.css';





class ChatroomInfo extends Component {
    state = {
      chatroomName: 'chatroom name',
      chatroomContext: 'Title',
      chatroomProfileImg: null,
      chatroomLink: null,
    }

    

    render() { 
        return (  
            <div className="infoBox">
                <div className="infoElements d-flex flex-row">
                    <div className="infoImg">
                        <img src={defaultProfileImg} alt="chatroom profile image"/>
                    </div>
                    <div className="userInfo">
                        <div className="d-flex flex-row">
                            <h2 className="">{this.state.chatroomName}</h2>
                            <img className="" data-toggle="tooltip" data-placement="top" title="Click to copy link" src={linkImg} alt=" Link Image " />
                        </div>
                        <h3>{this.state.chatroomContext}</h3>
                    </div>
                    <div className="parisa-css buttons d-flex flex-column bd-highlight ml-auto mr-2">
                        <button onClick={this.handleClick} className="btn-pro answerButton">Submit Question</button>
                    </div>
                </div>
            </div>
          
        );
        
    }
    

    
}


 
export default ChatroomInfo;