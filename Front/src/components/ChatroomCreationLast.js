import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import {Link} from 'react-router-dom';
import { isExpired } from "react-jwt";
import SelectAvatar from './selectAvatar';
import Cookies from 'js-cookie';
import axios from 'axios';
import {renewToken} from './token';

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
        this.handleBack = this.handleBack.bind(this);
      }

      handleBack() {
        return "/chatroomCreation" + Cookies.get("selectedTopic");
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
        if (name === "chatroomName" && value !== "") {
            this.setState({
                error: false,
            });
        }
      }

      async handleClick() {
        if (!this.state.chatroomName && !this.state.error) {
            return this.setState({
                error: true,
            });
        }
        console.log(Cookies.get("id"))
        Cookies.set("topic" , this.state.chatroomName);
        Cookies.set("chatroomName" , this.state.chatroomName);
        let token = Cookies.get("access")
        if(isExpired(Cookies.get("access"))){
        console.log("renewing")
        token=await renewToken()
        }
        console.log("fetching data")
        token = "Bearer "+token;
        console.log(token)
        const form = new FormData()
        if(this.state.avatarChanged)
          form.set('Base64',this.state.src)
        if (Cookies.get("selectedTopic") === "OS") {
          form.set('selectedTopic', Cookies.get("selectedTopic"))
          form.set('chatroomName', Cookies.get("chatroomName"))
          form.set('owner', Cookies.get("id"))
          form.set('selected', Cookies.get("selected"))
          form.set('selectedSub', Cookies.get("selectedSub"))
          form.set('Description', Cookies.get("Description"))
        }

        if (Cookies.get("selectedTopic") === "PL") {
          let selected = Cookies.get("selected")
          form.set('selectedTopic', Cookies.get("selectedTopic"))
          form.set('chatroomName', Cookies.get("chatroomName"))
          form.set('owner', Cookies.get("id"))
          form.set('selected', Cookies.get("selected") )
          form.set('Link', Cookies.get("Link"))
          form.set('Description', Cookies.get("selected"))
        }

        if (Cookies.get("selectedTopic") === "App") {
          form.set('selectedTopic', Cookies.get("selectedTopic"))
          form.set('chatroomName', Cookies.get("chatroomName"))
          form.set('owner', Cookies.get("id"))
          form.set('Link', Cookies.get("Link"))
          form.set('Description', Cookies.get("Description"))
        }

        const response =
        await axios.post('http://127.0.0.1:8000/api/createchatroom/', form, {
        headers: { 'Content-Type': 'multipart/form-data',
                    'Authorization': token
      },
    })
    Cookies.remove("selectedSub")
    Cookies.remove("selected")
    Cookies.remove("selectedTopic")
    Cookies.remove("Description")
    Cookies.remove("Link")

    this.props.hideModal()


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
                    <Link to={this.handleBack}>
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