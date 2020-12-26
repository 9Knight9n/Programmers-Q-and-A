import React, { Component } from 'react';
import ChatroomInfo from './chatroomInfo.jsx';
import LoadingPage from './loading';
import MessageBox from './messageBox';
import {connect,listen,send} from './socket';
import { Input } from 'react-chat-elements'
import { isExpired } from "react-jwt";
import {renewToken} from './requests'
import Cookies from 'js-cookie';


class GeneralChatroom extends Component {


    constructor(props) {
        super(props);
        this.state = {
            inputValue:"",
            loading:false,
            inputRef:React.createRef(),
            chats:[
                {
                    user:12,
                    message_id:100,
                    username:'sajad',
                    text:<a>Hello there!</a>,
                    time:new Date().toLocaleString(),
                },
                {
                    user:12,
                    message_id:200,
                    username:'sadegh',
                    text:<a>Hi! </a>,
                    time:new Date().toLocaleString(),
                    replyTo:100
                },
                {
                    user:12,
                    message_id:300,
                    username:'sajad',
                    text:<a>I have problem with socket, some error saying socket closed before connection established,any suggestions? </a>,
                    time:new Date().toLocaleString(),
                },
                {
                    user:12,
                    message_id:400,
                    username:'sadegh',
                    text:<a>what are you using to call connect function? componentdidmount ?</a>,
                    time:new Date().toLocaleString(),
                    replyTo:300
                },
                {
                    user:12,
                    message_id:500,
                    username:'sajad',
                    text:"yes exactly whats the problem with that?",
                    time:new Date().toLocaleString(),
                    replyTo:400
                },
                {
                    user:12,
                    message_id:600,
                    username:'sadegh',
                    text:"you shouldn't use componentdidmount for socket as it will be intrupted use componentwillmount, that should fix your problem!",
                    time:new Date().toLocaleString(),
                    replyTo:500
                },
                {
                    user:12,
                    message_id:700,
                    username:'Abed',
                    text:"you can call connect in constructor as well !",
                    time:new Date().toLocaleString(),
                    replyTo:500
                },
            ],
            ChatroomID:parseInt(this.props.match.params.chatroomid)
        };
        this.componentDidMount=this.componentDidMount.bind(this)
        this.loadQuestions=this.loadQuestions.bind(this)
    }
    newMessage=(message)=>{
        this.setState({chats:[...this.state.chats,message]})
        // console.log("received info:",message.data)
        // console.log("old chats:",this.state.chats)
        // console.log("new chats:",this.state.chats)
        // let data = JSON.parse(message.data);
        //   console.log(data);
        //   if (data.message)
        // this.setState({time:data.message})
      }

    async componentWillMount(){
        await connect("ws://127.0.0.1:8000/ws/api/generalchatroom/"+this.state.ChatroomID+"/");
        await listen("message",this.newMessage);   
      }


    componentDidMount(){
        sessionStorage.removeItem("search")
        // var msg = document.getElementById("message"); 
        let button = document.getElementById("generalChatroomSendButton"); 
        let textBox = document.getElementById("sendOnEnter"); 
  
        // This event is fired when button is clicked 
  
        textBox.addEventListener("keyup", function (event) { 
            if (event.keyCode == 13) { 
                button.click();  
            } 
        }); 
    }

    componentDidUpdate(prevProps) {
        console.log("something changed")
        if (prevProps.match.params.chatroomid !== this.props.match.params.chatroomid) {
          this.setState({ChatroomID:this.props.match.params.chatroomid})
        // this.loadQuestions()
        }
      }


    async loadQuestions(){
        // this.setState({loading:true})
        // console.log("fetching Questions")
        // let config ={
        //     url:"http://127.0.0.1:8000/api/ShowQuestion/",
        //     needToken:true,
        //     type:"post",
        //     formKey:[
        //         "ChatroomID",
        //         "user"
        //     ],
        //     formValue:[
        //         this.props.match.params.chatroomid,
        //         Cookies.get("id")
        //     ]
        // }
        // let data = []
        // // console.log("outside 0",data)
        // data = await request(config)
        // // console.log(await request(config))
        // console.log("outside",data)
        // if (data)
        // {
        //     this.setState({questions:data})
        //     console.log("state set")
        // }
        // this.setState({loading:false})
        // // console.log(data)
    }


    inputOnChange=(e)=>{
        let target = e.target;
        let value = target.value;
        this.setState({inputValue:value})
        
    }

    sendMessage=async()=>{
        let token = Cookies.get("access")
        if(isExpired(Cookies.get("access"))){
        token=await renewToken()
        }
        send({
            'order_type' : 'create_message',
            'chatroom_id':this.state.ChatroomID,
            'token': token,
            'message': this.state.inputValue,
        })
        this.state.inputRef.clear();
        this.setState({inputRef:""})
    }



    render() { 
        return (
            <React.Fragment>
                {this.state.loading?<LoadingPage/>: ""}
                <div className="w-100 h-100 p-2">
                    <div id="question-page" className="d-flex flex-column h-100 w-100">
                        <div id="chatroom-info" className=" d-flex flex-row">
                            <ChatroomInfo 
                                loadQuestions={this.loadQuestions}
                                Cid={this.state.ChatroomID}  />
                        </div>
                        <div className="mt-1 mb-1 ml-5 h-100">
                            <div className="messages-box">
                                <div className="mr-5 mb-2">
                                    {this.state.chats.map(chat =>
                                    <div key={chat.message_id} className="mb-3">
                                        <MessageBox
                                        userid={chat.user}
                                        title={chat.username}
                                        text={chat.text}
                                        dateString={chat.time}
                                        isReply={chat.replyTo}
                                        titleRep={chat.replyTo?this.state.chats.find(reply => reply.message_id === chat.replyTo).username:null}
                                        messageRep={chat.replyTo?this.state.chats.find(reply => reply.message_id === chat.replyTo).text:null}/>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div id="sendOnEnter">
                            <Input
                                ref={el => (this.state.inputRef = el)}
                                onChange={this.inputOnChange}
                                placeholder="Type here..."
                                multiline={false}
                                rightButtons={
                                    <button
                                        className="p-2 rounded"
                                        onClick={this.sendMessage}
                                        id="generalChatroomSendButton"
                                        style={{backgroundColor:'black',color:'white'}}>
                                            Send
                                        </button>
                                }/>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default GeneralChatroom;