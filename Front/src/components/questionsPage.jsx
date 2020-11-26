import React, { Component } from 'react';
import SubmitField from './submitField'
import {request} from './requests';
import Cookies from 'js-cookie';
import axios from 'axios';
import './CSS/questionsPage.css';
import QuestionChatbox from './questionChatbox';

class QuestionsPage extends Component {
    // state = {
    //     questions:[
    //         {
    //             id:1,
    //             sameProblemCount:5,
    //             senderId:1,
    //             title:"this is first Question",
    //             context:<div>
    //                         Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" 
    //                                                 target="_blank" rel="noopener noreferrer">yahoo.com
    //                                                 </a> adipiscing elit, sed do eiusmod tempor incididunt 
    //                                                 <a href="https://www.google.bg/" title="Google" 
    //                                                     rel="nofollow" target="_blank" rel="noopener noreferrer"> www.google.bg
    //                                                 </a> ut labore et dolore magna amet, consectetur adipiscing elit, 
    //                                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //                                                 minim veniam, quis nostrud exercitation ullamco laboris nisi
    //                                                 ut aliquip ex Lorem ipsum dolor sit amet, consectetur
    //                                                 adipiscing elit, sed do eiusmod tempor incididunt ut labore
            
    //                                                 et dolore magna aliqua. Ut enim ad minim veniam, quis
    //                                                 nostrud exercitation ullamco laboris nisi ut aliquip ex
    //                                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //                                                 do eiusmod tempor incididunt ut labore et dolore magna
    //                                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //                     </div>,
    //             sentDate:new Date().toLocaleString()
    //         },
    //         {
    //             id:2,
    //             sameProblemCount:5,
    //             senderId:1,
    //             title:"this is second Question",
    //             context:<div>
    //                         Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" 
    //                                                 target="_blank" rel="noopener noreferrer">yahoo.com
    //                                                 </a> adipiscing elit, sed do eiusmod tempor incididunt 
    //                                                 <a href="https://www.google.bg/" title="Google" 
    //                                                     rel="nofollow" target="_blank" rel="noopener noreferrer"> www.google.bg
    //                                                 </a> ut labore et dolore magna amet, consectetur adipiscing elit, 
    //                                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //                                                 minim veniam, quis nostrud exercitation ullamco laboris nisi
    //                                                 ut aliquip ex Lorem ipsum dolor sit amet, consectetur
    //                                                 adipiscing elit, sed do eiusmod tempor incididunt ut labore
            
    //                                                 et dolore magna aliqua. Ut enim ad minim veniam, quis
    //                                                 nostrud exercitation ullamco laboris nisi ut aliquip ex
    //                                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //                                                 do eiusmod tempor incididunt ut labore et dolore magna
    //                                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //                     </div>,
    //             sentDate:new Date().toLocaleString()
    //         },
    //         {
    //             id:3,
    //             sameProblemCount:5,
    //             senderId:1,
    //             title:"this is third Question",
    //             context:<div>
    //                         Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" 
    //                                                 target="_blank" rel="noopener noreferrer">yahoo.com
    //                                                 </a> adipiscing elit, sed do eiusmod tempor incididunt 
    //                                                 <a href="https://www.google.bg/" title="Google" 
    //                                                     rel="nofollow" target="_blank" rel="noopener noreferrer"> www.google.bg
    //                                                 </a> ut labore et dolore magna amet, consectetur adipiscing elit, 
    //                                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //                                                 minim veniam, quis nostrud exercitation ullamco laboris nisi
    //                                                 ut aliquip ex Lorem ipsum dolor sit amet, consectetur
    //                                                 adipiscing elit, sed do eiusmod tempor incididunt ut labore
            
    //                                                 et dolore magna aliqua. Ut enim ad minim veniam, quis
    //                                                 nostrud exercitation ullamco laboris nisi ut aliquip ex
    //                                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //                                                 do eiusmod tempor incididunt ut labore et dolore magna
    //                                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //                     </div>,
    //             sentDate:new Date().toLocaleString()
    //         }

    //     ]
        
    // }

    constructor(props) {
        super(props);
        this.state = {
            questions:[]
        };
        this.componentDidMount=this.componentDidMount.bind(this)
        this.loadQuestions=this.loadQuestions.bind(this)
    }


    componentDidMount(){
        this.loadQuestions()
    }


    async loadQuestions(){
        console.log("fetching Questions")
        let config ={
            url:"http://127.0.0.1:8000/api/ShowQuestion/",
            needToken:true,
            type:"post",
            formKey:[
                "ChatroomID"
            ],
            formValue:[
                this.props.ChatroomID
            ]
        }
        let data = []
        // console.log("outside 0",data)
        data = await request(config)
        // console.log(await request(config))
        // console.log("outside",data)
        if (data)
            this.setState({questions:data})
        console.log(data)
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
                <div className="w-100 h-100 p-2">
                    <div id="question-page" className="d-flex flex-column h-100 w-100">
                        <div id="chatroom-info" className="border d-flex flex-row">
                            <div>
                                Chatroom info
                            </div>
                            
                            <div className="d-flex ml-auto mt-auto">
                                <button onClick={() => this.showModal(-1)} className="btn btn-primary submit-button2" type="button">
                                    Submit a Question
                                </button>
                                <SubmitField 
                                    ref={this.state.refToChatroom} 
                                    hideModal={this.hideModal} 
                                    show={this.state.show} 
                                    submit={this.state.submit} />
                            </div>
                        </div>
                        <div className="mt-1 mb-1 ml-3">
                            <div className={"add-scroll add-scroll-active"}>
                                <div className="mr-5 mb-2">
                                    {this.state.questions.map(question =>
                                    <div key={question.id} className="mb-3">
                                        <QuestionChatbox sameProblemCount={question.sameProblemCount}
                                            senderId={question.senderId}
                                            // title={question.title}
                                            text={question.context}
                                            sentDate={question.sentDate}/>
                                    </div>
                                    )}
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