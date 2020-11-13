import React, { Component } from 'react';
import SelectAvatar from './selectAvatar';
import ProfileOne from './profileOne';
import ProfileTwo from './profileTwo';
import ProfileThree from './profileThree';
import './CSS/myAccount.css';

class MyAccount extends Component {
    constructor(props) {
        super(props)
        const src = require('../img/default-profile-picture.jpg');
        this.state = {
            tabs:[
                {
                    id:1,
                    label:"Personal Info",
                    content:<ProfileOne/>
                },
                {
                    id:2,
                    label:"Activity",
                    content:<ProfileTwo/>
                },
                {
                    id:3,
                    label:"Interests",
                    content:<ProfileThree/>
                }
            ],
            selectedTab:1,
          src,
          preview:null,
          avatarChanged:false,
          currentComponent:<React.Fragment>
            
          </React.Fragment>
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onSave = this.onSave.bind(this)
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

      tabSelected=(id)=>{
          this.setState({selectedTab:id})
      }

    render() { 
        return ( 
            <React.Fragment>
                <nav className="">
                    <ul class="nav nav-tabs">
                        <div className="w-25 avatar-size p-2">
                            <SelectAvatar src={this.state.src}
                                onCrop={this.onCrop}
                                onClose={this.onClose}
                                onSave={this.onSave} side="20" />
                        </div>
                        <div className="w-75 d-flex flex-column justify-content-center">
                        <p className="h1">Username</p>
                        <p>User@email.com</p>
                        </div>
                        {this.state.tabs.map(tab =>
                            <li class="pl-1 pr-1 nav-item d-flex align-items-end">
                                <a key={tab.id}
                                    onClick={()=>this.tabSelected(tab.id)}
                                    class={"mb-0 w-100 nav-link d-flex justify-content-center".concat(this.state.selectedTab===tab.id?" active":"").concat(tab.id===2?" disabled":"")} href="#">
                                    {tab.label}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="myAccount-content">
                    {this.state.tabs[this.state.selectedTab-1].content}
                </div>
            </React.Fragment>
        );
    }
}
 
export default MyAccount;