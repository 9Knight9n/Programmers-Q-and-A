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
import QuestionChatbox from './questionChatbox'

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
            commonQuestion: this.props.commonQuestion,
            sameProblem: this.props.sameProblem,
            userid: this.props.userid,
            user: this.props.user,
            text: this.props.text,
            time: this.props.time,
            isAnswered: this.props.isAnswered,
            id: 1,
            ChatroomID: this.props.ChatroomID,
            answers:[],
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
            //    this.props.QuestionID
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
            <div className="right h-100 empty-125">
                <Link to="/questionPage"><button className="backButton">Back</button></Link>
            </div>
            <div className="center w-75">
                <div className="infoBox">
                    <ChatroomInfo />
                </div>
                <div className="abed-add-scroll-active">
                    <div className="question">
                        <QuestionChatbox    sameProblemCount={this.state.commonQuestion}
                                            sameProblem={this.state.sameProblem}
                                            senderId={this.state.userid}
                                            senderUsername={this.state.user}
                                            context={this.state.text}
                                            sent Date={this.state.time}
                                            showMoreButton={false}
                                            isAnswered={this.state.isAnswered}
                                            Qid={this.state.id}
                                            Cid={this.state.ChatroomID} />
                    </div>
                    <div className="answers  ">
                        {this.state.answers.map(answer => 
                            <div className="mt-5" key={answer.id}>
                                <AnswerChatBox Qid={this.state.id} answerId={answer.id} userName={answer.user} userid={answer.userid} answer={answer.text} vote={parseInt(answer.vote)} trueAnswer={answer.isAccepted} answerSubmiteDate={answer.time}>

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