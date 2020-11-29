import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './components/homepage';
import Setting from './components/setting';
import Cookies from 'js-cookie';
import AnswerPage from './components/answersPage'
import QuestionsPage from './components/questionsPage'
import './index.css';



class App extends Component {
  state={
    
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
          <Route path="/answerPage">
            <AnswerPage />
          </Route>
          <Route path="questionPage">
            <QuestionsPage />
          </Route> 
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        {/* {!sessionStorage.getItem("avatar")? <Redirect to="/" /> : ""} */}
        {/* {this.state.currentComponent} */}
      </Router>
    ); 
  }
}
export default App;