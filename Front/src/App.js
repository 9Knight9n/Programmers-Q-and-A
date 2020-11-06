import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import ChatroomCreation from './components/ChatroomCreation';
import './index.css';




class App extends Component {
  state={
    currentComponent:<ChatroomCreation refToSelectComponent={this.selectComponent.bind(this)}/>
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
