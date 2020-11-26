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
import QuestionsPage from './questionsPage';


class Homepage extends Component {
//chatrooms id must be non negetive
    state = {
        activeChatroom : 
            <div className="d-flex justify-content-center my-auto">
                    Select a Chatroom
            </div>,
        chatrooms:[
            {
                id:1,
                ButtonName:'Java',
                img:j_logo
            },
            {
                id:2,
                ButtonName:'Python',
                img:p_logo
    
            },
            
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
            <div className="bg">
                <div className="LeftColumn">
                    <LeftMenu refToSelectComponent={this.props.refToSelectComponent} chatrooms={this.state.chatrooms} chatroomClicked={this.chatroomClicked}/>
                </div>
                <div className="RightColumn">
                    <Navbar />
                    <div style={{height:"91vh"}}>
                        <QuestionsPage ChatroomID={3} />
                    </div>
                    
                </div>
                    
                    
            </div>
        );
    }
}
 
export default Homepage;