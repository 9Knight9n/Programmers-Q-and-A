import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import SelectAvatar from './components/selectAvatar';
import './index.css';



class App extends Component {

  constructor(props) {
    super(props)
    const src = require('./img/default-profile-picture.jpg');
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

  selectComponent(index){
    if(index===0)
      this.setState({currentComponent:<SignInForm refToSelectComponent={this.selectComponent.bind(this)}/>})
    if(index===1)
      this.setState({currentComponent:<SignUpForm refToSelectComponent={this.selectComponent.bind(this)}/>})
    if(index===2)
      this.setState({currentComponent:<Homepage refToSelectComponent={this.selectComponent.bind(this)}/>})
  }

  render(){
    return (
      <React.Fragment>
        <SelectAvatar src={this.state.src}
        onCrop={this.onCrop}
        onClose={this.onClose}
        onSave={this.onSave} side="50" />
        <img src={this.state.src} alt="Preview" />
      </React.Fragment>
    ); 
  }
}
export default App;
