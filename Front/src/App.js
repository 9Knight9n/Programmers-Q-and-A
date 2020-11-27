
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
import TextEditor from './components/textEditor';

import './index.css';



class App extends Component {
  state={
    editorContent:null,
    editorVisible:true,
    
  }

  showEditor = () => {
    this.setState({ editorVisible: true });
    // console.log(this.state.submit)

  };

  hideEditor = () => {
      this.setState({ editorVisible: false });
  };

  updateContent = (value) => {
    this.setState({editorContent:value})
  };


  render(){
    return (
      <Router>
        {this.state.editorContent}
          <Switch>
          <Route path="/Texteditor">
            <TextEditor 
              content={this.state.content} 
              updateContent={this.updateContent} 
              hideEditor={this.hideEditor}
              editorVisible={this.state.editorVisible}/>
          </Route>
          <Route path="/login">
            <SignInForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        {!sessionStorage.getItem("avatar")? <Redirect to="/Texteditor" /> : ""}
        {/* {this.state.currentComponent} */}
      </Router>
    ); 
  }
}
export default App;