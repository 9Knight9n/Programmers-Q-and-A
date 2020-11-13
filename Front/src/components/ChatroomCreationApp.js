import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';

import {Link} from 'react-router-dom';

class ChatroomCreationApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLink: null,
            appDescription: null,
            error: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
          [name]: value,
        });
        
        if (this.state.appLink) {
            this.setState({
                error: false,
            });
        }
    }

    handleClick() {
        if (!this.state.appLink && !this.state.error) {
            this.setState({
                error: true,
            });
        }
    }

    render() { 
        return ( 
            <div className="main-box">
                <div className="elements">
                    <div className="inputs">
                        <div className="linkFieldApp">
                            <label for="linkFieldApp">Put a link for more information about application:</label>
                            <input name="appLink" value={this.state.appLink} type="url" placeholder="Application link" onChange={this.handleChange} /> 
                        </div>
                        {this.state.error ? <div className="abed-css appError">Please put a link for application.</div> : ''}
                        <div className="description descriptionApp">
                            <h3>Description :</h3>
                            <textarea name="appDescription" value={this.state.appDescription} class="textarea" maxlength="175" rows="4" cols="53">
                            </textarea>
                        </div>
                    </div>
                    <Link to="/chatroomCreationFirst">
                        <button className="backButtonApp" type="button">Back</button>
                    </Link>
                    <Link to={!this.state.appLink ? "/chatroomCreationApp": "/chatroomCreationLast"} onClick={this.handleClick}>
                        <button className="nextButtonApp" type="button">Next</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationApp;