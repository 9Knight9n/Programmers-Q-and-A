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

    componentDidUpdate(prevProps) {
        // console.log("inside componentDidUpdate")
        // console.log("chatroom changed from ",prevProps.Cid ," to ",this.props.Cid)
        if (prevProps.Cid !== this.props.Cid) {
            
            this.setState({chatroomId:this.props.Cid})
            console.log("chatroom changed from ",prevProps.Cid ," to ",this.props.Cid)
            this.loadData()
            
        }
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
                this.state.chatroomId,
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
        if(this.props.loadQuestions)
            this.props.loadQuestions()
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
                this.props.Cid
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
                chatroomLink: "http://localhost:3000/cr"+this.state.chatroomId,
            });
        }
        // console.log(data.chatroom_profile_image)
    }

    

    render() { 
        return (  
            <div className="w-100 chatroomInfo-infoBox">
                <Texteditor 
                content={this.state.content} 
                updateContent={this.updateContent} 
                hideEditor={this.hideEditor}
                editorVisible={this.state.editorVisible}/>
                {/* <ReactTooltip place="bottom" effect="solid" type="dark"/> */}
                <div className="chatroomInfo-infoElements d-flex flex-row">
                    <div className="chatroomInfo-infoImg">
                        <img src={this.state.chatroom_profile_image} alt="chatroom profile image"/>
                    </div>
                    <div className="chatroomInfo-userInfo">
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
                    <div className="chatroomInfo buttons d-flex flex-column bd-highlight ml-auto mr-2">
                        <button style={{outline:"none"}} onClick={this.showEditor} className="btn-pro chatroomInfo-submiteAnswerButton">Submit Question</button>
                    </div>
                </div>
            </div>
          
        );
        
    }
    

    
}


 
export default ChatroomInfo;