import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import MyAccount from './myAccount';
import SubmitField from './submitField';
import './CSS/answersPage.css';


class AnswersPage extends Component {
    state = {
        show: false,
        submit: -2,
        refToChatroom:React.createRef()
    }

    showModal = (submit) => {
        this.setState({ submit: submit });
        this.setState({ show: true });
        // console.log(this.state.submit)

    };

    hideModal = () => {
        this.setState({ show: false });
        this.setState({ submit: -2 });
      
    };

    render() { 
        return (  

        <React.Fragment>

            <SubmitField ref={this.state.refToChatroom} hideModal={this.hideModal} show={this.state.show} submit={this.state.submit} />

            <button onClick={() => this.showModal(-1)} className="flex-row justify-content-center align-self-end btn btn-primary submit-button" type="button">
                                Answer Question
                            </button>






        </React.Fragment>
        );
        
    }
    

    
}


 
export default AnswersPage;