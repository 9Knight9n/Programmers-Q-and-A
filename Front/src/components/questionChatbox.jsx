import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
import { Dropdown } from 'react-bootstrap';
import './CSS/questionChatbox.css';
import icon from "../img/default-profile-picture.jpg";


class QuestionChatbox extends Component {
    state = {
        sameProblem:false
    }
    render() { 
        return (  
            <React.Fragment>
                <div id="Question"
                    style={{ 
                        width:this.props.width+"vw",
                    }}
                    className="d-flex flex-column">

                        <div id="header" className="d-flex flex-row">
                            <div className="d-flex pl-4 align-top" id="profile">
                                <div className="d-flex align-items-center mr-3"><img  id="profile-img" 
                                    src={icon}/></div>
                                <p className="pt-1 h5 d-flex align-items-center pr-4">Username</p>
                            </div>
                            <div id="options" className="ml-auto">
                                <Dropdown>
                                    <Dropdown.Toggle className="mr-2" id="dropdown-basic">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                            <div id="left" className="d-flex flex-column ">
                                <div className="d-flex flex-row ml-auto mr-auto mt-auto mb-auto">
                                    
                                    <small>same problem</small>

                                </div>
                                
                            </div>



                            <div id="middle" className="mb-4">
                                <div className="h2">
                                    Question title
                                </div>
                                <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-css'
                                anchorClass='show-more-less'
                                onClick={this.executeOnClick}
                                expanded={false}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt 
                                    <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer"> www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText>
                            </div>




                            <div id="right" className="">
                                Right pannel
                            </div>


                        </div>
                        <div id="footer" className="d-flex flex-row">
                            <small className="ml-auto mr-2">Date : 2020/9/9</small>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default QuestionChatbox;