import React, { Component } from 'react';
import './CSS/AnswerChatBox.css';
import negativeVoteImg from '../img/negativeVoteImg.png';
import positiveVoteImg from '../img/positiveVoteImg.png';
import defaultProfileImg from '../img/default-profile-picture.jpg';
import moreOptionsImg from '../img/dots-menu.png';
import { Dropdown } from 'react-bootstrap';

class AnswerChatBox  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: null,
            trueAnswer: false,
            positiveVote: 0,
            negativeVote: 0,
            vote: 1,
            newAnswer: null,
            profileImg: null,
        }
        this.handlePositiveVote = this.handlePositiveVote.bind(this);
        this.handleNegativeVote = this.handleNegativeVote.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    handlePositiveVote() {
        return this.state.positiveVote++;
    }

    handleNegativeVote() {
        return this.state.negativeVote++;
    }

    handleVote() {
        let pVote = this.handlePositiveVote();
        let nVote = this.handleNegativeVote();
        if (pVote > nVote) {
            return pVote - nVote;
        }else {
            return nVote - pVote;
        }
    }

    render() { 
        return ( 
                <div id="answer"
                    style={{ 
                        width:this.props.width+"vw",
                    }}
                    className="d-flex flex-column">
                        <div id="header" className="d-flex flex-row ">
                            <img className="profileImg" src={defaultProfileImg} />
                            <label className="profileUsername" for="profileImg">UserName</label>
                            <div id="options" className="options ml-auto">
                                <Dropdown>
                                    <Dropdown.Toggle className="mr-2" id="dropdown-basic">
                                        <img className="moreOptionsImg" src={moreOptionsImg} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as="button">Edit</Dropdown.Item>
                                        <Dropdown.Item as="button">Delete</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                             
                        </div>

                        <div id="body" className="d-flex flex-row w-100">
                            <div id="left" className="">
                                <img onClick={this.handlePositiveVote} className="positiveVoteImg" src={positiveVoteImg} />
                                    <p className="voteCount">10{this.handleVote}</p>
                                <img onClick={this.handleNegativeVote} className="negativeVoteImg" src={negativeVoteImg} />
                            </div>



                            <div id="middle" className="">
                                Hi this is the answer.
                            </div>




                            <div id="right" className="">
                                {/* <button className="editButton" type="button">Edit</button>
                                <button className="removeButton" type="button">Remove</button> */}
                            </div>

                        </div>
                        <div id="footer" className="">
                            <p className="date">Date: 11/21/2020</p>
                        </div>
                </div>
         );
    }
}
 
export default AnswerChatBox;