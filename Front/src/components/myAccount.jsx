import React, { Component } from 'react';
import SelectAvatar from './selectAvatar';
import './CSS/myAccount.css';

class MyAccount extends Component {
    constructor(props) {
        super(props)
        const src = require('../img/default-profile-picture.jpg');
        this.state = {
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


    render() { 
        return ( 
            <React.Fragment>
                <nav className="">
                    <ul class="nav nav-tabs">
                        <div className="avatar-size p-2">
                            <SelectAvatar src={this.state.src}
                                onCrop={this.onCrop}
                                onClose={this.onClose}
                                onSave={this.onSave} side="20" />
                        </div>
                        <li class="nav-item d-flex align-items-end">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item d-flex align-items-end">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item d-flex align-items-end">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </nav>
                <div className="myAccount-content">
                    hello
                </div>
            </React.Fragment>
        );
    }
}
 
export default MyAccount;