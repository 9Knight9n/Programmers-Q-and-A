import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import MyAccount from './myAccount';
import defaultProfileImg from '../img/default-profile-picture.jpg';
import linkImg from '../img/link.png';
import './CSS/chatroomInfo.css';
import Cookies from 'js-cookie';
import CopyToClipboard from "reactjs-copy-to-clipboard";
import ReactTooltip from 'react-tooltip';
import {request} from './requests';




class ChatroomInfo extends Component {
    state = {
      chatroomName: 'chatroom name',
      chatroomContext: 'Title',
      chatroomProfileImg: null,
      chatroomLink: "link to chatroom",
      copied:false,
    }


    handleCopy=(e)=>{
        // copyToClipboard('Text to copy');
        console.log("Clicked")
        this.setState({copied:true})
    }


    handleSubmitQuestion= async ()=>{
        let config ={
            url:"http://127.0.0.1:8000/api/AddQuestion/",
            needToken:true,
            type:"post",
            formKey:[
                "user_id",
                "chatroom",
                "text"
            ],
            formValue:[
                Cookies.get('id'),
                3,
                


            ]
        }
        let data = []
        // console.log("outside 0",data)
        data = await request(config)
        // console.log(await request(config))
        // console.log("outside",data)
        if (data)
            this.setState({questions:data})
    }



    

    render() { 
        return (  
            <div className="infoBox">
                <ReactTooltip place="bottom" effect="solid" type="dark"/>
                <div className="infoElements d-flex flex-row">
                    <div className="infoImg">
                        <img src={defaultProfileImg} alt="chatroom profile image"/>
                    </div>
                    <div className="userInfo">
                        <div className="d-flex flex-row">
                            <h2 className="">{this.state.chatroomName}</h2>
                            <CopyToClipboard text={this.state.chatroomLink} onCopy={() => this.handleCopy()}>
                                <div className=" d-flex flex-row">
                                    
                                    <img src={linkImg} className="h-100"
                                        data-tip={this.state.copied?"Copied":"Click to copy"} />
                                    <small className="ml-3 h-100">{this.state.copied?"Copied":""}</small>
                                </div>
                                
                                
                            </CopyToClipboard>
                            
                        </div>
                        <h3>{this.state.chatroomContext}</h3>
                    </div>
                    <div className="parisa-css buttons d-flex flex-column bd-highlight ml-auto mr-2">
                        <button style={{outline:"none"}} onClick={this.handleSubmitQuestion} className="btn-pro answerButton">Submit Question</button>
                    </div>
                </div>
            </div>
          
        );
        
    }
    

    
}


 
export default ChatroomInfo;