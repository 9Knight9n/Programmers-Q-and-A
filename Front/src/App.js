import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import SelectAvatar from './components/selectAvatar';
import './index.css';



class App extends Component {
  state={
    currentComponent:<SelectAvatar src={require("./img/default-profile-picture.jpg")} side="50"/>
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
