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
import {request} from "./requests.jsx";
import ReactTooltip from 'react-tooltip';
import ChatroomInfo from './chatroomInfo';

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
            answers:[],
            // answers:[
            //     {
            //         id:1,
            //         answer: 'This is answer 1',
            //         trueAnswer: false,
            //         vote: '0',
            //         answerSubmiteDate: new Date().toLocaleString(),
            //     },
            //     {
            //         id:2,
            //         answer: 'This is answer 2',
            //         trueAnswer: false,
            //         vote: '0',
            //         answerSubmiteDate: new Date().toLocaleString(),
            //     },
            //     {
            //         id:3,
            //         answer: 'This is answer 3',
            //         trueAnswer: false,
            //         vote: '0',
            //         answerSubmiteDate: new Date().toLocaleString(),
            //     },
            //     {
            //         id:4,
            //         answer: 'This is answer 4',
            //         trueAnswer: false,
            //         vote: '0',
            //         answerSubmiteDate: new Date().toLocaleString(),
            //     },
            //     {
            //         id:5,
            //         answer: 'This is answer 5',
            //         trueAnswer: false,
            //         vote: '0',
            //         answerSubmiteDate: new Date().toLocaleString(),
            //     },
            //     {
            //         id:6,
            //         answer: 'This is answer 6',
            //         trueAnswer: false,
            //         vote: '0',
            //         answerSubmiteDate: new Date().toLocaleString(),
            //     }
            // ]
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

    componentDidMount = () => {
        this.loadData();
    }

    loadData = async () => {
        let config = {
            url:"http://127.0.0.1:8000/api/ShowAnswer/",
            needToken:true,
            type:"post",
            formKey:[
                "QuestionID",
            ],
            formValue:[
                // this.props.QuestionID
                1
            ]
        };
        let data = [];
        data = await request(config);
        if (data) {
            this.setState({
                answers: data,
            });
        }
    }

    render() { 
        return (  
          <div className="Setting-bg d-flex justify-content-center">
            <ReactTooltip place="right" effect="solid" type="dark"/>
            <div className="right h-100 empty-125"></div>
            <div className="center w-75">
                <div className="infoBox">
                    {/* <ChatroomInfo /> */}
                </div>
                <div className="abed-add-scroll-active">
                    <div className="question">
                        {this.state.question}
                    </div>
                    <div className="answers  ">
                        {this.state.answers.map(answer => 
                            <div className="mt-5" key={answer.id}>
                                <AnswerChatBox answer={answer.text} vote={parseInt(answer.vote)} trueAnswer={answer.isAccepted} answerSubmiteDate={answer.time}>

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