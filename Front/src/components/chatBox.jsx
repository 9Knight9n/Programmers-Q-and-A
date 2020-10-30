import React, { Component } from 'react';
import './CSS/chatBox.css';
class ChatBox extends Component {
    state = { 
     }
    render() { 
        return (
            <div className="comment">
                <p><a href="">{this.props.chat.by}</a></p>
                <em>{this.props.chat.time}</em>
                <p>{this.props.chat.content}</p>
                <p><a onClick={() => this.props.refToChatroom.current.clicked(this.props.chat.id)} href="#">reply</a></p>
            </div> 
        );
    }
}
 
export default ChatBox;