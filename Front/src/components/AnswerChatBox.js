import React, { Component } from 'react';
import './CSS/AnswerChatBox.css';
import negativeVoteImg from '../img/negative-vote.png';
import positiveVoteImg from '../img/positive-vote.png';
import defaultProfileImg from '../img/default-profile-picture.jpg';
import { Dropdown } from 'react-bootstrap';

class AnswerChatBox  extends Component {
    state = {  }
    render() { 
        return ( 
                <div id="answer"
                    style={{ 
                        width:this.props.width+"vw",
                    }}
                    className="d-flex flex-column">

                        <div id="header" className="d-flex flex-row ">
                            <img className="profileImg" src={defaultProfileImg} />
                            <label className="profileImg" for="profileImg">UserName</label>
                            <div className="d-flex justify-content-center w-100"><h1 >This is the title</h1></div>
                            <div id="options" className="options ml-auto ">
                                <Dropdown>
                                    <Dropdown.Toggle className="mr-2" id="dropdown-basic">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg%22%3E">
                                            <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>
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
                                <img className="positiveVoteImg" src={positiveVoteImg} />
                                <img className="negativeVoteImg" src={negativeVoteImg} />
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
                            this is footer
                        </div>
                </div>
         );
    }
}
 
export default AnswerChatBox;