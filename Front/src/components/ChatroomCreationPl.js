import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

class ChatroomCreationPl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPl: Cookies.get("selectedPl"),
            plDescription: Cookies.get("plDescription"),
            plLink: Cookies.get("plLink"),
            error1: false,
            error2: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        if (!this.state.selectedPl && !this.state.error1) {
            this.setState({
                error1: true,
            });
        }
        if (!this.state.plLink && !this.state.error2) {
            this.setState({
                error2: true,
            });
        }
        if (this.state.selectedPl && this.state.plLink) {
            Cookies.set("selectedPl" , this.state.selectedPl);
            Cookies.set("plLink" , this.state.plLink);
            Cookies.set("plDescription" , this.state.plDescription);
        }
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
          [name]: value,
        });
        if (name === "selectedPl" && value !== "Select a programming language") {
            
            this.setState({
                error1: false,//select
            });
        }
        if (name === "plLink" && value !== '') {
            
            this.setState({
                error2: false,//link
            });
        }
     }
    render() { 
        return ( 
            <div className="main-box">
                <div className="elements">
                <div className="plKinds">
                        <label for="plKinds"><h1>Choose a programming language:</h1></label>
                        <select name="selectedPl" value={this.state.selectedPl} onChange={this.handleChange}>
                            <option value="Select a programming language">Select a programming language </option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="Php">Php</option>
                            <option value="Csharp">Csharp</option>
                            <option value="C">C</option>
                            <option value="C++">C++</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Html">Html</option>
                            <option value="Css">Css</option>
                        </select>
                    </div>
                    {this.state.error1 ? <div className="plError">Please select a programming language.</div> : ''}
                    <div className="plLink">
                        <label for="plLink"><h1>Put a link for more information about programming language:</h1></label>
                        <input name="plLink" value={this.state.plLink} type="url" placeholder="Programming language link" onChange={this.handleChange} required /> 
                    </div>
                    {this.state.error2 ? <div className="plError">Please put a link for selected programming language.</div> : ''}
                    <div className="description descriptionPl">
                        <h1>Description :</h1>
                        <textarea name="plDescription" value="plDescription" className="textarea" value={this.state.plDescription} maxlength="175" rows="4" cols="53" onChange={this.handleChange}>
                            {this.state.plDescription}
                        </textarea>
                    </div>
                    <Link to="/chatroomCreationFirst">
                        <button className="backButtonPl" type="button">Back</button>
                    </Link>
                    <Link to={this.state.selectedPl && this.state.plLink ? "/chatroomCreationLast": "/chatroomCreationPl"} onClick={this.handleClick}>
                        <button className="nextButtonPl" type="button">Next</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationPl;