import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
import { Dropdown } from 'react-bootstrap';
import LoadingPage from './loading';
import './CSS/questionChatbox.css';
import icon from "../img/default-profile-picture.jpg";


class QuestionChatbox extends Component {
    state = {
        loading:false,
        sameProblem:false,
        sameProblemCount:0,
        senderId:1,
        senderUsername:"username",
        senderAvatar:icon,
        title:"Question title",
        context:<div>
            Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" 
                                    target="_blank" rel="noopener noreferrer">yahoo.com
                                    </a> adipiscing elit, sed do eiusmod tempor incididunt 
                                    <a href="https://www.google.bg/" title="Google" 
                                        rel="nofollow" target="_blank" rel="noopener noreferrer"> www.google.bg
                                    </a> ut labore et dolore magna amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </div>,
        sentDate:new Date().toLocaleString(),

    }

    componentDidMount=()=>{
        this.loadData()
    }

    loadData=()=>{
        //request to load data from backend
    }

    handleSameProblemClicked=()=>{
        this.setState({loading:true})
        //request to back to change same question status
        setTimeout(() => {
            if(this.state.sameProblem)
                this.setState({sameProblemCount:this.state.sameProblemCount-1})
            else
                this.setState({sameProblemCount:this.state.sameProblemCount+1})
            this.setState({sameProblem:!this.state.sameProblem})
            
            this.setState({loading:false})
            
          }, 1300);
        
    }
    render() { 
        return (  
            <React.Fragment>
                {this.state.loading?<LoadingPage/>: ""}
                <div id="Question"
                    style={{ 
                        width:this.props.width+"vw",
                    }}
                    className="d-flex flex-column">

                        <div id="header" className="d-flex flex-row">
                            <div className="d-flex pl-4 ml-3 align-top" id="profile">
                                <div className="d-flex align-items-center mr-3"><img  id="profile-img" 
                                    src={this.state.senderAvatar}/></div>
                                <p className="pt-1 h5 d-flex align-items-center pr-4">{this.state.senderUsername}</p>
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


                            <div id="left" className="d-flex flex-column mt-2">

                                <small className="ml-3 mt-2">{this.state.sameProblemCount} users have same problem!</small>
                                <div className="d-flex flex-row pr-3 ml-auto mr-auto mt-2 mb-auto">
                                    <div class="form-check">
                                        <input class="form-check-input mt-4" type="checkbox" 
                                            checked={this.state.sameProblem} 
                                            onClick={this.handleSameProblemClicked}
                                            value="" id="defaultCheck1"/>
                                        <label class="form-check-label d-flex flex-column" for="defaultCheck1">
                                                <small>i have</small>
                                                <small style={{lineHeight: "1"}}>same </small>
                                                <small>problem</small>
                                        </label>  
                                    </div>
                                </div>
                            </div>



                            <div id="middle" className="mt-2 mb-4 pl-3 border-left">
                                <div className="h2">
                                    {this.state.title}
                                </div>
                                <ShowMoreText
                                /* Default options */
                                lines={3}
                                more={<p className="ml-auto blue-on-hover" >Show more</p>}
                                less={<p className="ml-auto blue-on-hover">Show less</p>}
                                className='content-css'
                                anchorClass='show-more-less d-flex flex-row'
                                onClick={this.executeOnClick}
                                expanded={false}>
                                    {this.state.context}
                                </ShowMoreText>
                            </div>




                            <div id="right" className="">
                                
                            </div>


                        </div>
                        <div id="footer" className="d-flex flex-row">
                            <small className="ml-auto mr-2">Submitted on : {this.state.sentDate}</small>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default QuestionChatbox;