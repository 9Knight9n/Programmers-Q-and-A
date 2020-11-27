import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import './CSS/chatroomInfo.css';
import AnswerChatBox from './AnswerChatBox';
import defaultProfileImg from '../img/default-profile-picture.jpg';
import linkImg from '../img/link.png';
import Cookies from 'js-cookie';
import axios from 'axios';
import {renewToken} from './token';
import { isExpired } from "react-jwt";

import './CSS/answersPage.css';


class AnswersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: 'This is the question',
            QuestionID: 1,
            chatroomName: 'chatroom name',
            chatroomContext: 'Title',
            chatroomProfileImg: null,
            chatroomLink: null,
            text:[
                {
                    id:1,
                    answer: 'This is answer 1',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString(),
                },
                {
                    id:2,
                    answer: 'This is answer 2',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString(),
                },
                {
                    id:3,
                    answer: 'This is answer 3',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString(),
                },
                {
                    id:4,
                    answer: 'This is answer 4',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString(),
                },
                {
                    id:5,
                    answer: 'This is answer 5',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString(),
                },
                {
                    id:6,
                    answer: 'This is answer 6',
                    trueAnswer: false,
                    vote: '0',
                    answerSubmiteDate: new Date().toLocaleString(),
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

    loadData = async () => {

    }

    render() { 
        return (  
          <div className="Setting-bg d-flex justify-content-center">
            <div className="right h-100 empty-125"></div>
            <div className="center w-75">
                <div className="infoBox">
                    <div className="infoElements d-flex flex-row">
                        <div className="infoImg">
                            <img src={defaultProfileImg} alt="chatroom profile image"/>
                        </div>
                        <div className="userInfo">
                            <img data-toggle="tooltip" data-placement="top" title="Click to copy link" src={linkImg} alt=" Link Image " />
                            <h2>{this.state.chatroomName}</h2>
                            <h3>{this.state.chatroomContext}</h3>
                        </div>
                        <div className="buttons d-flex flex-column bd-highlight mb-3">
                            <button className="answerButton">Submite answer</button>
                        </div>
                    </div>
                </div>
                <div className="abed-add-scroll-active">
                    <div className="question">
                        {this.state.question}
                    </div>
                    <div className="answers  ">
                        {this.state.text.map(answer => 
                            <div className="mt-5" key={answer.id}>
                                <AnswerChatBox answer={answer.text} vote={parseInt(answer.vote)} trueAnswer={answer.trueAnswer} answerSubmiteDate={answer.answerSubmiteDate}>

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