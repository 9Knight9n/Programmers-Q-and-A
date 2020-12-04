import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Homepage from './components/homepage';
import Setting from './components/setting';
import Cookies from 'js-cookie';
import AnswerPage from './components/answersPage';
import QuestionsPage from './components/questionsPage';
import ProfilePreview from './components/ProfilePreview';
import './index.css';



class App extends Component {
  state={
    
  }

  componentDidMount=()=>{
    
    if(!sessionStorage.getItem("avatar"))
    {
      console.log(window.location.pathname)
      sessionStorage.setItem("targetURL",window.location.pathname)
      document.getElementById("loginfirst").click()
      
    }
      
  }

  // getUrl()
  // {
  //   const location = useLocation();
  //   console.log(location.pathname);
  // }


  render(){
    return (
      <Router>
          <Link id="loginfirst" to="/login"/>
          <Switch>

            <Route path="/profilePreview">
              <ProfilePreview />
            </Route>

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
        {/* {this.state.currentComponent} */}
        <Redirect to="/profilePreview" />
      </Router>
    ); 
  }
}
export default App;