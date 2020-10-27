//Coded by Sajad

import React, { Component } from 'react';
import LeftMenu from './leftMenu';
import Navbar from './navbar';
import Chatroom from './chatroom';
import './CSS/homepage.css';
import j_logo from "../img/java-logo.png";
import p_logo from "../img/python-logo.png";

class Homepage extends Component {

    state = {
        activeChatroom : <div>Select a Chatroom</div>,
        options:[
            {
                id:1,
                ButtonName:'Chat Room 1',
                img:j_logo
            },
            {
                id:2,
                ButtonName:'Chat Room 2',
                img:p_logo
    
            }
        ]
    }


    tabClicked = (id) =>{
        let activeChatroom = <div>empty</div>
        let options = [...this.state.options];
        for (let i = 0; i < options.length; i++)
            if (options[i].id===id)
            {
                options[i].isActive = true;
                activeChatroom = <Chatroom chatID={options[i].id}/>
                this.setState({activeChatroom:activeChatroom});
            }
            else
                options[i].isActive = false;
        this.setState({options});      
    }


    render() { 
        return (
            <React.Fragment>
                <div className="LeftColumn">
                    <LeftMenu tabs={this.state.options} onTabClicked={this.tabClicked}/>
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