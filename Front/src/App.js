import React, { Component } from 'react';
import './App.css';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
// import Homepage from './components/homepage';
class App extends Component {
  state={
    currentComponent:<SignInForm refToSelectComponent={this.selectComponent.bind(this)}/>
  }

  selectComponent(index){
    if(index===0)
      this.setState({currentComponent:<SignInForm refToSelectComponent={this.selectComponent.bind(this)}/>})
    if(index===1)
    this.setState({currentComponent:<SignUpForm refToSelectComponent={this.selectComponent.bind(this)}/>})
    // if(this.selectComponent===2)
    //   return <Homepage/>
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
