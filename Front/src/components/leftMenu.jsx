//Coded by Sajad
//expremental solution is used for passing (this) to functions

import React, { Component } from 'react';
import './CSS/leftMenu.css';

class LeftMenu extends Component {
    state = {  
        options:this.props.tabs,
        activeTab:-1
    }

    handleTabClick = (id) =>{
        this.props.onTabClicked(id)
        this.setState({activeTab:id})
    }


    render() { 
        return (
                <div className="nav flex-column nav-pills left-menu">
                    <div id="profile">
                        <div className="container-fluid bottom-border">
                            <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" />
                            <div className="text-next-to-img">Username</div>
                        </div>
                    </div>
                    {this.state.options.map(sOption => 
                    <a key={sOption.id} 
                        className={"nav-link left-menu-tab ".concat(this.state.activeTab===sOption.id? "active":"")} 
                        onClick={()=> this.handleTabClick(sOption.id)} 
                        href="#" ><img id="chatroom-img" src={sOption.img} /> 
                        <div className="text-next-to-img">{sOption.ButtonName}</div>
                    </a>)}
                    <div className="container-fluid align-bottom">
                        <button className="btn btn-primary col-lg-6">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-door-open-fill m-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                            </svg>Logout
                        </button>
                        <button className="btn btn-primary col-lg-6 ">Setting
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sliders m-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                            </svg>
                        </button>
                    </div>
                {/* <div className="col-lg-10" >
                    <div id="tab-detail">
                        <h2>Select a chatroom</h2>
                    </div>
                </div> */}
            </div>
        );
    }
}
 
export default LeftMenu;