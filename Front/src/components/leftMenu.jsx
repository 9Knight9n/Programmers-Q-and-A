//Coded by Sajad
//expremental solution is used for passing (this) to functions
//

import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './CSS/leftMenu.css';
// import pro from "../img/";

class LeftMenu extends Component {
    state = {  
        chatrooms:this.props.chatrooms,
        activeChatroom:-1
    }

    handleTabClick = (id) =>{
        this.props.chatroomClicked(id)
        this.setState({activeChatroom:id})
    }

    // handleLogOutClick = () =>{
    //     window.$username = "";
    //     this.props.refToSelectComponent(0);
    // }

    render() { 
        window.$username="username"
        return (
            <div className="max-height">

            
                <div className="d-flex flex-column justify-content-center fix-height">
                    <div className="d-flex pl-4 align-top" id="profile">
                        <div className="d-flex align-items-center mr-3"><img  id="profile-img" 
                            src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" /></div>
                        <h1 className="pt-1 h4 d-flex align-items-center pr-4">{window.$username}</h1>
                    </div>



                    <div className="nav d-flex flex-column nav-pills fill">
                        <div>
                            {this.state.chatrooms.map(chatroom => 
                            <a key={chatroom.id} 
                                className={"nav-link ".concat(this.state.activeChatroom===chatroom.id? "active":"")} 
                                onClick={()=> this.handleTabClick(chatroom.id)} 
                                href="#" >
                                <div className="d-flex flex-row ">
                                    <img className="d-flex align-items-center mr-3" id="chatroom-img" src={chatroom.img} />
                                    <div className="d-flex align-items-center pr-5">{chatroom.ButtonName}</div>
                                </div>
                            </a>)}
                        </div>
                    </div>



                    <div className="d-flex flex-row container-fluid align-bottom">
                    <Link className=" col-lg-6 p-0" to="/login">
                    {/* onClick={() => this.handleLogOutClick()} */}
                        <button  className=" w-100 d-flex align-items-center justify-content-center btn lm-btn btn-primary">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-door-open-fill m-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                            </svg>Logout
                        </button>
                        </Link>
                        <Link className=" col-lg-6 p-0" to="/setting">
                        <button className="w-100 btn lm-btn btn-primary d-flex align-items-center justify-content-center">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sliders m-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                            </svg>Setting
                        </button></Link>
                    </div>
                    
                    
                    
                {/* <div className="col-lg-10" >
                    <div id="tab-detail">
                        <h2>Select a chatroom</h2>
                    </div>
                </div> */}
            </div>
            </div>
        );
    }
}
 
export default LeftMenu;