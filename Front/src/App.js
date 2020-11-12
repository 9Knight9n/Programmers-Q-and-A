import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ChatroomCreationLast from './components/ChatroomCreationLast';
import ChatroomCreationApp from './components/ChatroomCreationApp';
import ChatroomCreationOs from './components/ChatroomCreationOs';
import ChatroomCreationFirst from './components/ChatroomCreationFirst';
import ChatroomCreationPl from './components/ChatroomCreationPl';
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
            <Route exact path="/"  component={ChatroomCreationFirst} />

            <Route exact path="/chatroomCreationOs" component={ChatroomCreationOs} />

            <Route exact path="/chatroomCreationApp" component={ChatroomCreationApp} />

            <Route exact path="/chatroomCreationPl" component={ChatroomCreationPl} />

            <Route exact path="/chatroomCreationLast" component={ChatroomCreationLast} />
          </Switch>
        </div>
      </Router>
    ); 
  }
}
export default App;
