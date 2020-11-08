import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import ChatroomCreationLast from './components/ChatroomCreationLast';
import ChatroomCreationApp from './components/ChatroomCreationApp';
import ChatroomCreationOs from './components/ChatroomCreationOs';
import ChatroomCreationFirst from './components/ChatroomCreationFirst';
import './index.css';




class App extends Component {
  state={
    currentComponent:<ChatroomCreationFirst refToSelectComponent={this.selectComponent.bind(this)}/>
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
        {this.state.currentComponent}
      </React.Fragment>
    ); 
  }
}
export default App;
