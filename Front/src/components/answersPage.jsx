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
import QuestionChatbox from './questionChatbox';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LoadingPage from './loading';

import './CSS/answersPage.css';


class AnswersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading:false,
            question: sessionStorage.getItem('context'),
            QuestionID: sessionStorage.getItem('QuestionID'),
            commonQuestion: parseInt(sessionStorage.getItem('sameProblemCount')),
            sameProblem: parseInt(sessionStorage.getItem('sameProblem')),
            userid: sessionStorage.getItem('senderId'),
            user: sessionStorage.getItem('senderUsername'),
            text: sessionStorage.getItem('context'),
            time: sessionStorage.getItem('sentDate'),
            isAnswered: sessionStorage.getItem('isAnswered'),
            ChatroomID: sessionStorage.getItem('ChatroomID'), 
            answers:[],
        }
        // console.log("receivied vote state is ",this.state.sameProblem)
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
        this.setState({loading:true})
        console.log("-------------------",this.state.QuestionID)
        let config = {
            url:"http://127.0.0.1:8000/api/ShowAnswer/",
            needToken:true,
            type:"post",
            formKey:[
                "QuestionID",
                "user_id",
            ],
            formValue:[
            //    this.props.QuestionID
                this.state.QuestionID,
                Cookies.get("id")
            ]
        };
        let data = [];
        data = await request(config);
        if (data) {
            this.setState({
                answers: data,
            });
        }
        console.log(data)
        this.setState({loading:false})
    }

    render() { 
        return (  
          <div className="Setting-bg d-flex justify-content-center">
              {this.state.loading?<LoadingPage/>: ""}
            <ReactTooltip place="right" effect="solid" type="dark"/>
            <div className="right h-100 empty-125">
                <div className="d-flex flex-column h-100">
                    <div className="mt-auto">
                        <Link to={'/cr'+this.state.ChatroomID}><button className="backButton ">Back</button></Link>
                    </div>
                </div>
            </div>
            <div className="center w-75">
                <div className="infoBox">
                    <ChatroomInfo Cid={this.state.ChatroomID} />
                </div>
                <div className="abed-add-scroll-active">
                    <div className="question">
                        <QuestionChatbox    sameProblemCount={this.state.commonQuestion}
                                            sameProblem={this.state.sameProblem}
                                            senderId={this.state.userid}
                                            senderUsername={this.state.user}
                                            context={this.state.text}
                                            sentDate={this.state.time}
                                            showMoreButton={false}
                                            isAnswered={this.state.isAnswered}
                                            Qid={this.state.QuestionID}
                                            Cid={this.state.ChatroomID}
                                            loadAnswers={this.loadData} />
                    </div>
                    <div className="answers  ">
                        {this.state.answers.map(answer => 
                            <div className="mt-5" key={answer.id}>
                                <AnswerChatBox loadAnswers={this.loadData}
                                Qid={this.state.QuestionID} 
                                QsenderId={this.state.userid}
                                answerId={answer.id} 
                                userName={answer.user} 
                                userid={answer.userid} 
                                answer={answer.text} 
                                vote={parseInt(answer.vote)} 
                                trueAnswer={answer.isAccepted} 
                                answerSubmiteDate={answer.time}
                                voteState={answer.voteState}>
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