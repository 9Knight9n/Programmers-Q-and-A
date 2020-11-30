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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


class Homepage extends Component {
//chatrooms id must be non negetive
    state = {
        activeChatroom : sessionStorage.getItem("targetURL")?sessionStorage.getItem("targetURL").split('cr')[1]:null,
        // chatrooms:[
        //     {
        //         id:1,
        //         ButtonName:'Java',
        //         img:j_logo
        //     },
        //     {
        //         id:2,
        //         ButtonName:'Python',
        //         img:p_logo
    
        //     },
            
        // ]
    }

    componentDidMount=()=>{
        if(sessionStorage.getItem("targetURL"))
        {
            document.getElementById("selectChatroom").click()
            sessionStorage.removeItem("targetURL")
        }
            

    }
    


    chatroomClicked = (id) =>{
        this.setState({activeChatroom:id})
        // let chatrooms = [...this.state.chatrooms];
        // for (let i = 0; i < chatrooms.length; i++)
        //     if (chatrooms[i].id===id)
        //     {
        //         chatrooms[i].isActive = true;
        //         let activeChatroom = <Chatroom chatID={chatrooms[i].id}/>
        //         this.setState({activeChatroom:activeChatroom});
        //     }
        //     else
        //         chatrooms[i].isActive = false;
        // this.setState({chatrooms}); 
        console.log("__________________________________________________________")     
        console.log("chatroom ",id," selected")
        this.forceUpdate()
        // document.getElementById("selectChatroom").HTML(<QuestionsPage ChatroomID={id} />)
    }



    render() { 
        return (
            <div className="bg">
                <Link id="selectChatroom" to={"/cr"+this.state.activeChatroom}/>
                <div className="LeftColumn">
                    <LeftMenu refToSelectComponent={this.props.refToSelectComponent} chatrooms={this.state.chatrooms} chatroomClicked={this.chatroomClicked}/>
                </div>
                <div className="RightColumn">
                    <Navbar />
                    <div style={{height:"91vh"}}>
                        {/* <p>{this.state.activeChatroom}</p> */}

                        {this.state.activeChatroom? 
                            <Route exact path={"/cr"+this.state.activeChatroom}>
                                {/* {this.state.activeChatroom} */}
                                <QuestionsPage ChatroomID={this.state.activeChatroom} />
                            </Route> : ""
                        }
                        
                        
                    </div>
                    
                </div>
                    
                    
            </div>
        );
    }
}
 
export default Homepage;