import React, { Component } from 'react';
import './CSS/ChatroomCreation.css';
import windowsImg from '../img/windows.png';
import linuxImg from '../img/linux.png';
import macImg from '../img/apple.png';
import {Link} from 'react-router-dom';

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
                            {name: "Windows-XP", link: "https://github.com/ShizukuIchi/winXP"},
                            {name: "Windows-7", link:"https://github.com/B00merang-Project/Windows-7"},
                            {name: "Windows-8", link:"https://github.com/owncloudarchive/windows8"},
                            {name: "Windows-10", link:"https://github.com/Disassembler0/Win10-Initial-Setup-Script"},
                        ]
                    },
                    {
                        id:2,
                        name: "Mac",
                        subOs: [
                            {name: "Select a distro", link: ""},
                            {name: "MacOS-Catalina", link: "https://www.apple.com/macos/big-sur/"},
                            {name: "MacOS-Mojave" , link: "https://www.apple.com/newsroom/2018/06/apple-introduces-macos-mojave/"},
                            {name: "MacOS-High-Sierra", link: "https://support.apple.com/en-us/HT208969"},
                            {name: "MacOS-Sierra", link: "https://support.apple.com/en-us/HT208202"},
                        ]
                    },
                    {
                        id:3,
                        name: "Linux",
                        subOs: [
                            {name: "Select a distro", link: ""},
                            {name: "Ubuntu", link:"https://github.com/ubports/ubuntu-touch"},
                            {name: "Debian", link:"https://github.com/mate-desktop/debian-packages"},
                            {name: "ElementaryOS", link:"https://github.com/elementary/os"},
                            {name: "Mint", link:"https://github.com/yonaskolb/Mint"},
                            {name: "MX-linux", link:"https://github.com/MX-Linux/mx-snapshot"},
                            {name: "Arch-Linux", link:"https://github.com/helmuthdu/aui"},
                            {name: "Manjaro", link:"https://github.com/manjaro/packages-core"},
                            {name: "Kali", link:"https://github.com/LionSec/katoolin"},
                            {name: "Red", link:"https://github.com/ras0219/ReDOS"},
                            {name: "Hat", link:"https://github.com/qiuqiangkong/Hat"},
                            {name: "CentOS", link:"https://github.com/CentOS/Community-Kickstarts"},
                            {name: "Fedora", link:"https://github.com/coreos/fedora-coreos-tracker"},
                        ]
                    },
                    {
                        id:4,
                        name: "BSD",
                        subOs: [
                            {name: "Select a distro", link: ""},
                            {name: "FreeBSD", link: "https://github.com/freebsd/freebsd"},
                            {name: "OpenBSD", link: "https://github.com/job/openbsd-src"},
                            {name: "NetBSD", link: "https://github.com/NetBSD/src"},
                            {name: "DragonFlyBSD", link: "https://github.com/DragonFlyBSD/DragonFlyBSD"},
                            {name: "PC", link: "https://github.com/trueos/pcbsd"},
                            {name: "BSD", link: "https://github.com/weiss/original-bsd"},
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

        if (name === "selectedOs") {
            this.setState({
                selectedSubOs: '',
            });
        }

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
                        <div className="mainOs">
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
                            <a href={this.state.OS.find(os => os.name === this.state.selectedOs).subOs.find(subOs => subOs.name === this.state.selectedSubOs ).link}  target="_blank">
                                {"This link"}
                            </a>
                        {" for more information about selected OS"}

                        </div> : ''}
                    
                    <div class="description descriptionOs">
                        <h3>Description :</h3>
                        <textarea class="textarea" maxlength="175" rows="4" cols="53">
                        </textarea>
                    </div>
                        <Link to="/chatroomCreationFirst">
                            <button class="backButtonOs" type="button">Back</button>
                        </Link>
                        <Link to="/chatroomCreationLast">
                            <button class="nextButtonOs" type="button">Next</button>
                        </Link>
                </div>
            </div>
         );
    }
}
 
export default ChatroomCreationOs;