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
import Texteditor from './texteditor'




class ChatroomInfo extends Component {
    state = {
        chatroomName: 'chatroom name',
        selectedTopic: 'Title',
        chatroom_profile_image: null,
        chatroomLink: "link to chatroom",
        copied:false,
        editorContent:null,
        editorVisible:false,
        chatroomId: this.props.Cid
    }


    handleCopy=(e)=>{
        // copyToClipboard('Text to copy');
        console.log("Clicked")
        this.setState({copied:true})
    }

      showEditor = () => {
    this.setState({ editorVisible: true });
  };
  hideEditor = (submit) => {
      this.setState({ editorVisible: false });
      if(submit)
        this.handleSubmitQuestion()
  };
  updateContent = (value) => {
    this.setState({editorContent:value})
  };


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
                this.state.editorContent
            ]
        }
        let data = []
        // console.log("outside 0",data)
        data = await request(config)
        // console.log(await request(config))
        // console.log("outside",data)
        // console.log(data)
        this.setState({editorContent:null})

    }

    componentDidMount = () => {
        this.loadData();
    }

    loadData = async () => {
        let config = {
            url:"http://127.0.0.1:8000/api/ShowChatroomProfile/",
            needToken:true,
            type:"post",
            formKey:[
                "chatroomId",
            ],
            formValue:[
                this.state.chatroomId
            ]
        };
        let data = [];
        data = await request(config);
        if (data) {
            this.setState({
                selectedTopic: data.selectedTopic,
                chatroomName: data.chatroomName,
                Description: data.Description,
                chatroom_profile_image: data.chatroom_profile_image,
                chatroomLink: data.chatroomLink,
            });
        }
        console.log(data)
    }

    

    render() { 
        return (  
            <div className="w-100 infoBox">
                <Texteditor 
                content={this.state.content} 
                updateContent={this.updateContent} 
                hideEditor={this.hideEditor}
                editorVisible={this.state.editorVisible}/>
                {/* <ReactTooltip place="bottom" effect="solid" type="dark"/> */}
                <div className="infoElements d-flex flex-row">
                    <div className="infoImg">
                        <img src={this.state.chatroom_profile_image} alt="chatroom profile image"/>
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
                        <h3>{this.state.selectedTopic}</h3>
                    </div>
                    <div className="parisa-css buttons d-flex flex-column bd-highlight ml-auto mr-2">
                        <button style={{outline:"none"}} onClick={this.showEditor} className="btn-pro answerButton">Submit Question</button>
                    </div>
                </div>
            </div>
          
        );
        
    }
    

    
}


 
export default ChatroomInfo;