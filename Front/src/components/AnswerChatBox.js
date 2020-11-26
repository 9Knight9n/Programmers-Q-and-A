import React, { Component } from 'react';
import './CSS/AnswerChatBox.css';
import negativeVoteImg from '../img/down-arrow.png';
import positiveVoteImg from '../img/up-arrow.png';
import defaultProfileImg from '../img/default-profile-picture.jpg';
import greenCheckMark from '../img/greenCheckMark.png';
import blueCheckMark from '../img/blueCheckMark.png';
import { Dropdown } from 'react-bootstrap';

class AnswerChatBox  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PactiveVote:false,
            NactiveVote:false,
            answer: this.props.answer,
            trueAnswer: this.props.trueAnswer,
            vote: this.props.vote,
            newAnswer: null,
            profileImg: null,
            userName: null,
            answerSubmiteDate: this.props.answerSubmiteDate,
        }

        this.handleVote = this.handleVote.bind(this);
        this.handleTrueAnswer = this.handleTrueAnswer.bind(this);
    }

    componentDidMount = () => {
        console.log(this.props.answerSubmiteDate)
        this.setState({
            profileImg: defaultProfileImg,
            userName: 'abed',
        })
    }

    handleVote(e) {

            if (e.target.className === "positiveVoteImg" && this.state.PactiveVote === false && this.state.NactiveVote === false) {
                this.setState({
                    vote: this.state.vote + 1,
                    PactiveVote: true,
                })
            }else if (e.target.className === "positiveVoteImg" && this.state.PactiveVote === true) {

            }else if (e.target.className === "negativeVoteImg" && this.state.NactiveVote === false && this.state.PactiveVote === true) {
                this.setState({
                    vote: this.state.vote - 1,
                    PactiveVote: false,
                })
            }else if (e.target.className === "negativeVoteImg" && this.state.NactiveVote === false && this.state.PactiveVote === false) {
                this.setState({
                    vote: this.state.vote - 1,
                    NactiveVote: true,
                })
            }else if (e.target.className === "negativeVoteImg" && this.state.NactiveVote === true) {
   
            }else if (e.target.className === "positiveVoteImg" && this.state.NactiveVote === true && this.state.PactiveVote === false) {
                this.setState({
                    vote: this.state.vote + 1,
                    NactiveVote: false,
                })
            }
        
    }

    handleEdit() {
        //handle edit answer and opening submit answer component and send new answer to back
    }

    handleRemove() {
        //handle Remove answer send request for removing answer and remove for front

    }

    handleTrueAnswer(){
        this.setState({
            trueAnswer: !this.state.trueAnswer,
        })
    }

    render() { 
        return ( 
                <div id="answer"
                    style={{ 
                        width:this.props.width+"vw",
                    }}
                    className="d-flex flex-column">
                        <div id="header" className="d-flex flex-row ">
                            <img className="profileImg" src={this.state.profileImg} />
                            <label className="profileUsername" for="profileImg">{this.state.userName}</label>
                            <div id="options" className="options ml-auto">
                                <Dropdown>
                                    <Dropdown.Toggle className="mr-2" id="dropdown-basic">
                                    <svg color="#9d9dd1" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg%22%3E" >
                                            <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu  className="dropDown">
                                        <Dropdown.Item onClick={this.handleEdit} as="button">Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={this.handleRemove} as="button">Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                             
                        </div>

                        <div id="body" className="d-flex flex-row w-100">
                            <div id="left" className="d-flex flex-column bd-highlight">
                                <div className="trueAnswer">
                                    {!this.state.trueAnswer? 
                                    <img data-toggle="tooltip" data-placement="top" title="This answer is true" src={blueCheckMark} onClick={this.handleTrueAnswer}/> :
                                    <img data-toggle="tooltip" data-placement="top" title="This answer is not true" src={greenCheckMark} onClick={this.handleTrueAnswer}/>}
                                    
                                    
                                </div>
                                <div className="d-flex flex-column bd-highlight">
                                    <div onClick={this.handleVote} >
                                        <img className="positiveVoteImg" data-toggle="tooltip" data-placement="top" title="This answer is useful" className="positiveVoteImg" src={positiveVoteImg} />
                                    </div>
                                    <div className="">
                                        <p className="voteCount" >{this.state.vote}</p>
                                    </div>

                                    <div onClick={this.handleVote} >
                                        <img className="negativeVoteImg" data-toggle="tooltip" data-placement="top" title="This answer is not useful" className="negativeVoteImg" src={negativeVoteImg} />
                                    </div>
                                </div>
                            </div>



                            <div id="middle" className="">
                                {this.state.answer}
                            </div>

                        </div>
                        <div id="footer" className="d-flex justify-content-around">
                            <div className="form-group col-xs-4 col-md-4 p-2 w-100 bd-highlight trueAnswer  flex-column">
                                
                            </div>
                            <div></div>
                            <div className="p-2 flex-shrink-1 bd-highlight"><p className="date">Submitted on: {this.state.answerSubmiteDate}</p></div>
                        </div>
                </div>
         );
    }
}
 
export default AnswerChatBox;