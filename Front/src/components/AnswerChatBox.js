import React, { Component } from 'react';
import './CSS/AnswerChatBox.css';
import negativeVoteImg from '../img/negativeVoteImg.png';
import positiveVoteImg from '../img/positiveVoteImg.png';
import defaultProfileImg from '../img/default-profile-picture.jpg';
import moreOptionsImg from '../img/dots-menu.png';
import checkMarkImg from '../img/checkmark.png';
import { Dropdown } from 'react-bootstrap';

class AnswerChatBox  extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        this.setState({
            profileImg: defaultProfileImg,
            userName: 'abed',
        })
    }

    handleVote(e) {
        if (e.target.className === "positiveVoteImg") {
            this.setState({
                vote: this.state.vote + 1,
            })
        }else {
            this.setState({
                vote: this.state.vote - 1,
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
            trueAnswer: true,
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
                                       <img className="moreOptionsImg" src={moreOptionsImg} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={this.handleEdit} as="button">Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={this.handleRemove} as="button">Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                             
                        </div>

                        <div id="body" className="d-flex flex-row w-100">
                            <div id="left" className="d-flex flex-column bd-highlight">
                                <div className="d-flex flex-column bd-highlight">
                                    <div className="positiveVoteImg">
                                        <img onClick={this.handleVote} className="positiveVoteImg" src={positiveVoteImg} />
                                    </div>
                                    <div className="">
                                        <p className="voteCount" >{this.state.vote}</p>
                                    </div>

                                    <div className="negativeVoteImg">
                                        <img onClick={this.handleVote} src={negativeVoteImg} />
                                    </div>
                                </div>
                                <div className="trueAnswer">
                                    <img style={{display: this.state.trueAnswer ? false : 'none' }} className="checkMarkImg" src={checkMarkImg} />
                                </div>
                            </div>



                            <div id="middle" className="">
                                {this.state.answer}
                            </div>

                        </div>
                        <div id="footer" className="d-flex justify-content-around">
                            <div className="form-group col-xs-4 col-md-4 p-2 w-100 bd-highlight trueAnswer  flex-column">
                                <label className="control-label" for="trueAnswerButton">Does it solve your problem? Let us know.</label>
                                <button onClick={this.handleTrueAnswer} className="trueAnswerButton">Asnwer was true</button>
                            </div>
                            <div></div>
                            <div className="p-2 flex-shrink-1 bd-highlight"><p className="date">{this.state.answerSubmiteDate}</p></div>
                        </div>
                </div>
         );
    }
}
 
export default AnswerChatBox;