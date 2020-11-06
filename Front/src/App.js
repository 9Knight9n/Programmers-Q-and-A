import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import Profile from './components/profile';
import './index.css';



class App extends Component {
  state={
    currentComponent:<div className="w-70"> <Profile refToSelectComponent={this.selectComponent.bind(this)}/></div>
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
