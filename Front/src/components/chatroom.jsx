import React, { Component } from 'react';
import axios from 'axios';
import './CSS/chatroom.css';
import SubmitField from './submitField';
import ChatBox from './chatBox';

class Chatroom extends Component {
    state = {
        isClicked:false,
        QOrR:-2,
        refToChatroom:React.createRef()
    }

    // constructor(props) {
    //     super(props);
    //     this.state = { chats:this.loadChat() };
    //     console.log(this.state);
    //   }
    async loadChat(){
        let url = "https://run.mocky.io/v3/5e0b398a-0bae-4a57-b1fd-c2be3ac2957a";
        const response =
          await axios.get(url)
        // console.log(response);
        console.log("data found (test): ",response.data);
        console.log(response)
        this.setState({chats:response.data.chats});
        console.log(this.state.chats)
    }

    componentDidMount(){
        console.log("mounted");
        this.loadChat();
    }
    

    handleSubContent = (id) =>{
        let counter= 0;
        let subContent;
        let content = <React.Fragment></React.Fragment>;
        for(let index=0;index<this.state.chats.length;index++)
        {
            if(this.state.chats[index].type===id)
            {
                counter++;
                let chat = this.state.chats[index];
                subContent =  
                <React.Fragment>
                    <li>
                        <ChatBox chat={chat} refToChatroom={this.state.refToChatroom}/>
                        {this.handleSubContent(this.state.chats[index].id)}
                    </li>
                </React.Fragment>;
                content = <React.Fragment>{content}{subContent}</React.Fragment>;
            }
        }
        if (counter===0)
            return <React.Fragment></React.Fragment>;
        return <ul>{content}</ul>;
    }

    handleContent = () =>{
        // let index = 0;
        let finalResult = <ul className="simple-nested"><div className="comment"> No Chat in here!</div></ul>;
        if (this.state.chats.length===0)
            return finalResult;
        // finalResult = <React.Fragment></React.Fragment>;
        return <ul className="simple-nested">{this.handleSubContent(0)}</ul>;
    }

    handleClick = (QOrR,content) =>{
        let isClicked = !this.state.isClicked;
        this.setState({QOrR:QOrR});
        this.setState({isClicked:isClicked});
        this.loadChat();
    }

    

    

    render() { 
        if (this.state.chats)
            return (  
                <React.Fragment>
                    <div>
                        <div className="m-3 chatbox">
                            <div className={"add-scroll ".concat(this.state.isClicked ? "add-scroll-active":"")}>
                                <div className="mr-5 mt-2">
                                    {this.handleContent()}
                                </div>
                            </div>
                            <SubmitField ref={this.state.refToChatroom} handleClick={this.handleClick} isClicked={this.isClicked}/>
                        </div>
                    </div>
                </React.Fragment>
            );
        else
            return(<React.Fragment></React.Fragment>);
    }
}
 
export default Chatroom;