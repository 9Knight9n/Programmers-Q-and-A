//Coded by Sajad
//initial check done
//tasks remaining :
//1.connecting to backend and reading chatroom list

import React, { Component } from 'react';
import LeftMenu from './leftMenu';
import Navbar from './navbar';
import Chatroom from './chatroom';
import './CSS/homepage.css';
import j_logo from "../img/java-logo.png";
import p_logo from "../img/python-logo.png";

class Homepage extends Component {
//chatrooms id must be non negetive
    state = {
        activeChatroom : 
            <div className="black-text my-auto">
                    Select a Chatroom
            </div>,
        chatrooms:[
            {
                id:1,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:2,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            },
            {
                id:3,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:4,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            },
            {
                id:5,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:6,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            },
            {
                id:7,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:8,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            },
            {
                id:9,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:10,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            },
            {
                id:11,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:12,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            },
            {
                id:13,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:14,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            },
            {
                id:15,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:16,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            }
        ]
    }


    chatroomClicked = (id) =>{
        let chatrooms = [...this.state.chatrooms];
        for (let i = 0; i < chatrooms.length; i++)
            if (chatrooms[i].id===id)
            {
                chatrooms[i].isActive = true;
                let activeChatroom = <Chatroom chatID={chatrooms[i].id}/>
                this.setState({activeChatroom:activeChatroom});
            }
            else
                chatrooms[i].isActive = false;
        this.setState({chatrooms});      
    }


    render() { 
        return (
            <React.Fragment>
                <div className="LeftColumn">
                    <LeftMenu chatrooms={this.state.chatrooms} chatroomClicked={this.chatroomClicked}/>
                </div>
                <div className="RightColumn">
                    <Navbar />
                    {this.state.activeChatroom}
                </div>
                    
                    
            </React.Fragment>
        );
    }
}
 
export default Homepage;