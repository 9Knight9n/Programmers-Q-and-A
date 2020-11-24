import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import './CSS/chatroomInfo.css';
import MyAccount from './myAccount';
import ChatroomInfo from './chatroomInfo';
import SubmitField from './submitField';
import AnswerChatBox from './AnswerChatBox';
import defaultProfileImg from '../img/default-profile-picture.jpg';

import './CSS/answersPage.css';


class AnswersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: 'This is the question',
            chatroomName: 'chatroom name',
            titleOfChatroom: 'Title',
            show: false,//modal
            submit: -2,//modal
            
            answers:[
                {
                    id:1,
                    answer: 'This is answer 1',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString,
                },
                {
                    id:2,
                    answer: 'This is answer 2',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString,
                },
                {
                    id:3,
                    answer: 'This is answer 3',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString,
                }
            ]
        }
    }


    tabClicked=(id)=>{
        this.setState({activeTab:id})
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
          <div className="Setting-bg d-flex justify-content-center">
            <div className="right h-100 empty-125"></div>
            <div className="center w-75">
                <div className="infoBox">
                    <div className="infoElements d-flex flex-row">
                        <div className="infoImg">
                            <img src={defaultProfileImg} alt=""/>
                        </div>
                        <div className="userInfo">
                            <h2>{this.state.chatroomName}</h2>
                            <h3>{this.state.titleOfChatroom}</h3>
                        </div>
                        <div className="buttons d-flex flex-column bd-highlight mb-3">
                            <button className="answerButton">Submite answer</button>
                            <button className="LinkButtons">Link</button>
                        </div>
                    </div>
                </div>
                <div className="abed-add-scroll-active">
                    <div className="question">
                        {this.state.question}
                    </div>
                    <div className="answers  ">
                        {this.state.answers.map(answer => 
                            <div className="mt-5" key={answer.id}>
                                <AnswerChatBox answer={answer.answer} vote={parseInt(answer.vote)} trueAnswer={answer.trueAnswer} answerSubmiteDate={answer.answerSubmiteDate}>

                                </AnswerChatBox> 
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="left h-100 empty-125"></div>
          </div>
          
        );
        
    }
    

    
}


 
export default AnswersPage;