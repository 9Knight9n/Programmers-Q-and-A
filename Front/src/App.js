import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import './index.css';



class App extends Component {
  state={
    currentComponent:<Homepage refToSelectComponent={this.selectComponent.bind(this)}/>
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
          <Switch>
          <Route path="/login">
            <SignInForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        {/* {this.state.currentComponent} */}
      </Router>
    ); 
  }
}
export default App;
