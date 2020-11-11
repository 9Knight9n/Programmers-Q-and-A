import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import windowsImg from '../img/windows.png';
import linuxImg from '../img/linux.png';
import macImg from '../img/apple.png';

class ChatroomCreationOs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOs: null,
            selectedSubOs: null,

            OS: [
                    {
                        id:0,
                        name: "Select an OS",
                        subOs: [],
                    },
                    {
                        id:1,
                        name: "Windows",
                        subOs: [
                            {name: "Select a distro", link: ""},
                            {name: "Windows-XP", link: "https://www.microsoft.com/en-us/software-download/windows10"},
                            {name: "Windows-7", link:"#"},
                            {name: "Windows-8", link:"#"},
                            {name: "Windows-10", link:"#"},
                        ]
                    },
                    {
                        id:2,
                        name: "Mac",
                        subOs: [
                            {name: "Select a distro", link: ""},
                            {name: "MacOS-Catalina", link: "#"},
                            {name: "MacOS-Mojave" , link: "#"},
                            {name: "MacOS-High-Sierra", link: "#"},
                            {name: "MacOS-Sierra", link: "#"},
                        ]
                    },
                    {
                        id:3,
                        name: "Linux",
                        subOs: [
                            {name: "Select a distro", link: ""},
                            {name: "Ubuntu", link:"#"},
                            {name: "Debian", link:"#"},
                            {name: "ElementaryOS", link:"#"},
                            {name: "Mint", link:"#"},
                            {name: "MX-linux", link:"#"},
                            {name: "Arch-Linux", link:"#"},
                            {name: "Manjaro", link:"#"},
                            {name: "Kali", link:"#"},
                            {name: "Red", link:"#"},
                            {name: "Hat", link:"#"},
                            {name: "CentOS", link:"#"},
                            {name: "Fedora", link:"#"},
                        ]
                    },
                    {
                        id:4,
                        name: "BSD",
                        subOs: [
                            {name: "Select a distro", link: ""},
                            {name: "FreeBSD", link: "href"},
                            {name: "OpenBSD", link: "href"},
                            {name: "NetBSD", link: "href"},
                            {name: "DragonFlyBSD", link: "href"},
                            {name: "PC", link: "href"},
                            {name: "BSD", link: "href"},
                            {name: "Manjaro", link: "href"},
                            {name: "Kali", link: "href"},
                            {name: "Red", link: "href"},
                            {name: "Hat", link: "href"},
                            {name: "CentOS", link: "href"},
                            {name: "Fedora", link: "href"},
                        ]
                    },
            ]        
        };
        this.handleChange = this.handleChange.bind(this);
      }

     handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
          [name]: value,
        });
        if (value === "Select an OS") {
            this.setState({
                selectedOs: null,
                selectedSubOs: null,
            });

        }else if (value === "Select a distro") {
            this.setState({
                selectedSubOs: null,
            });
        }

     }
    render() { 
        return ( 
            <div class="main-box">
                <div class="elements">
                    <div class="osKinds">
                        <div className="Os">
                            <select name="selectedOs" value={this.state.selectedOs} onChange={this.handleChange}>
                                {this.state.OS.map(os => 
                                   <option key={os.id} value={os.name}>{os.name}</option> 
                                )}
                            </select>
                        </div>  
                        {this.state.selectedOs ? 
                            <div className="subOs">
                                <select name="selectedSubOs" value={this.state.selectedSubOs} onChange={this.handleChange}>
                                    {this.state.OS.find(os => os.name === this.state.selectedOs).subOs.map(subOs => 
                                        <option value={subOs.name}>{subOs.name}</option>  
                                    )}
                                </select>
                            </div> : ''
                        }
                    </div>
                    {this.state.selectedSubOs ? <div className="osLink">
                        {"You can check "}    
                        <a href={this.state.OS.find(os => os.name === this.state.selectedOs).subOs.find(subOs => subOs.name === this.state.selectedSubOs ).link}>
                            This link
                        </a>
                        {" for more information about selected OS"}
                    </div> : ''}
                    <div class="description descriptionOs">
                        <h3>Description :</h3>
                        <textarea class="textarea" maxlength="175" rows="4" cols="50">
                        </textarea>
                    </div>
                    <button class="nextButtonOs" type="button">Next</button>
                    <button class="backButtonOs" type="button">Back</button>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationOs;