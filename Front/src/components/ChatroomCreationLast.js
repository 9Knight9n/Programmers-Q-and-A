import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import ChatroomCreationAvatar from '../img/uploadAvatar.png';
import {Link} from 'react-router-dom';
import SelectAvatar from './selectAvatar';

class ChatroomCreationLast extends Component {
    

     constructor(props) {
        super(props)
        const src = require('../img/uploadAvatar.png');
        this.state = {
          src,
          preview:null,
          avatarChanged:false,
          chatroomName: null,
          error: false,
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onSave = this.onSave.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }

      onClose() {
        this.setState({preview: null})
      }
      
      onCrop(preview) {
        this.setState({preview})
        console.log(preview)
      }
    
      onSave(){
        let src = this.state.preview
        console.log("save button pressed")
        console.log("current preview:",src)
        this.setState({avatarChanged:true,src})
        console.log("changed src:",this.state.src)
      }

      handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
          [name]: value,
        });
        if (this.state.chatroomName) {
            this.setState({
                error: false,
            });
        }
      }

      handleClick() {
        if (!this.state.chatroomName && !this.state.error) {
            this.setState({
                error: true,
            });
        }
      }

    render() { 
        return ( 
            <div className="main-box">
                <div className="elements">
                    <div className="d-flex justify-content-center mt-3">
                        <SelectAvatar src={this.state.src}
                            onCrop={this.onCrop}
                            onClose={this.onClose}
                            onSave={this.onSave} side="30" />
                    </div>
                    <div className="nameField">
                        <input name="chatroomName" value={this.state.chatroomName} placeholder="Enter chatroom name" onChange={this.handleChange} />
                    </div>
                    {this.state.error ? <div className="LastError">Please select a name for chatroom</div> : ''}
                    <Link to="/chatroomCreationFirst">
                        <button className="backButtonLast" type="button">Back</button>
                    </Link>
                    <Link to={this.state.chatroomName ? "/": "/chatroomCreationLast"} onClick={this.handleClick}>
                        <button className="createButtonLast" type="button">Create</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationLast;