import React, { Component } from 'react';
import SubmitField from './submitField'
import './CSS/questionsPage.css';

class QuestionsPage extends Component {
    state = {
        questions:[
            {
                
            }

        ]

    }


    showModal = (submit) => {
        this.setState({ submit: submit });
        this.setState({ show: true });
        // console.log(this.state.submit)

    };

    hideModal = () => {
        this.setState({ show: false });
        this.setState({ submit: -2 });
        // this.loadChat();
    };



    render() { 
        return (
            <React.Fragment>
                <div className="w-100 h-100 p-3">
                    <div id="question-page" className="d-flex flex-column h-100 w-100">
                        <div id="chatroom-info" className="border">
                            Chatroom info
                        </div>
                        <button onClick={() => this.showModal(-1)} className="btn btn-primary submit-button" type="button">
                                Submit a Question
                            </button>
                        <SubmitField 
                            ref={this.state.refToChatroom} 
                            hideModal={this.hideModal} 
                            show={this.state.show} 
                            submit={this.state.submit} />
                        <div className="m-3">
                            <div className={"add-scroll ".concat(this.state.isClicked ? "add-scroll-active":"")}>
                                <div className="mr-5 mt-2">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default QuestionsPage;