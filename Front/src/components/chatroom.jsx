import React, { Component } from 'react';
import './CSS/chatroom.css';
import SubmitField from './submitField';
import ChatBox from './chatBox';

class Chatroom extends Component {
    state = {
        chats:[
            {
                id:1,
                type:0,
                by:"Ali",
                time:"Feb 23rd",
                content:"this is general comment.",
            }
            ,
            {
                id:2,
                type:1,
                by:"Zahra",
                time:"Feb 23rd",
                content:"this is first reply comment.",
            },
            {
                id:3,
                type:2,
                by:"reza",
                time:"Feb 23rd",
                content:"this is second reply comment..",
            },
            {
                id:7,
                type:3,
                by:"reza",
                time:"Feb 23rd",
                content:"this is second reply comment..",
            },
            {
                id:8,
                type:7,
                by:"reza",
                time:"Feb 23rd",
                content:"this is second reply comment..",
            },
            {
                id:9,
                type:8,
                by:"reza",
                time:"Feb 23rd",
                content:"this is second reply comment..",
            },
            {
                id:6,
                type:2,
                by:"reza",
                time:"Feb 23rd",
                content:"new comment"
            },
            {
                id:4,
                type:1,
                by:"Ali",
                time:"Feb 23rd",
                content:"this is a reply to initial comment.",
            },
            {
                id:5,
                type:0,
                by:"maryam",
                time:"Feb 23rd",
                content:"this is forth reply comment..",
            }
        ],
        isClicked:false,
        QOrR:-2,
        refToChatroom:React.createRef()
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

    handleClick = (QOrR) =>{
        let isClicked = !this.state.isClicked;
        this.setState({QOrR:QOrR});
        this.setState({isClicked:isClicked});
    }
    render() { 
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
    }
}
 
export default Chatroom;