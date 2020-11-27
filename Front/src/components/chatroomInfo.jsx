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

    tabClicked=(id)=>{
      this.setState({activeTab:id})
    }

    

    render() { 
        return (  
          <div className="infoBox">
          <div className="infoElements d-flex flex-row">
              <div className="infoImg">
                  <img src={defaultProfileImg} alt="chatroom profile image"/>
              </div>
              <div className="userInfo">
                  <img data-toggle="tooltip" data-placement="top" title="Click to copy link" src={linkImg} alt=" Link Image " />
                  <h2>{this.state.chatroomName}</h2>
                  <h3>{this.state.chatroomContext}</h3>
              </div>
              <div className="buttons d-flex flex-column bd-highlight mb-3">
                  <button className="answerButton">Submite answer</button>
              </div>
          </div>
      </div>
          
        );
        
    }
    

    
}


 
export default ChatroomInfo;