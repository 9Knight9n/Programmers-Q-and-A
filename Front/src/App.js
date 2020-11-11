import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import chatroomCreationLast from './components/ChatroomCreationLast';
import chatroomCreationApp from './components/ChatroomCreationApp';
import chatroomCreationOs from './components/ChatroomCreationOs';
import chatroomCreationFirst from './components/ChatroomCreationFirst';
import chatroomCreationPl from './components/ChatroomCreationPl';
import './index.css';




class App extends Component {
  state={
    currentComponent:<chatroomCreationFirst refToSelectComponent={this.selectComponent.bind(this)}/>
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
      <Router>
        <div>
        
          <Switch>
            <Route exact path="/"  component={chatroomCreationFirst} />

            <Route exact path="/chatroomCreationOs" component={chatroomCreationOs} />

            <Route exact path="/chatroomCreationApp" component={chatroomCreationApp} />

            <Route exact path="/chatroomCreationPl" component={chatroomCreationPl} />
          </Switch>
        </div>
      </Router>
    ); 
  }
}
export default App;
