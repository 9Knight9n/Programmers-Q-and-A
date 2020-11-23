import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
import { Dropdown } from 'react-bootstrap';
import LoadingPage from './loading';
import './CSS/questionChatbox.css';
import Cookies from 'js-cookie';
import { getUserInfo } from './util';


class QuestionChatbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
        sameProblem:false,
        sameProblemCount:this.props.sameProblemCount,
        senderId:this.props.senderId,
        senderUsername:null,
        senderAvatar:null,
        title:this.props.title,
        context:this.props.context,
        sentDate:this.props.sentDate,
        };

        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount(){
        console.log("inside");
        if(!Cookies.get(this.state.senderId+":username") || !sessionStorage.getItem(this.state.senderId+":avatar"))
        {
            
            getUserInfo();
        }
        this.setState({senderUsername:Cookies.get(this.state.senderId+":username"),
                        senderAvatar:sessionStorage.getItem(this.state.senderId+":avatar"),})

    }
    // state = {
    //     loading:false,
    //     sameProblem:false,
    //     sameProblemCount:0,
    //     senderId:1,
    //     senderUsername:"username",
    //     senderAvatar:icon,
    //     title:"Question title",
    //     context:<div>
    //         Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" 
    //                                 target="_blank" rel="noopener noreferrer">yahoo.com
    //                                 </a> adipiscing elit, sed do eiusmod tempor incididunt 
    //                                 <a href="https://www.google.bg/" title="Google" 
    //                                     rel="nofollow" target="_blank" rel="noopener noreferrer"> www.google.bg
    //                                 </a> ut labore et dolore magna amet, consectetur adipiscing elit, 
    //                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //                                 minim veniam, quis nostrud exercitation ullamco laboris nisi
    //                                 ut aliquip ex Lorem ipsum dolor sit amet, consectetur
    //                                 adipiscing elit, sed do eiusmod tempor incididunt ut labore

    //                                 et dolore magna aliqua. Ut enim ad minim veniam, quis
    //                                 nostrud exercitation ullamco laboris nisi ut aliquip ex
    //                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //                                 do eiusmod tempor incididunt ut labore et dolore magna
    //                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //     </div>,
    //     sentDate:new Date().toLocaleString(),

    // }


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
            
          }, 100);
        
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
                            <div className="d-flex ml-3 pl-2 align-top w-20">
                                <p className="pt-1 d-flex align-items-center ml-2 mr-4" style={{fontSize: "0.85rem"}}>
                                    Question submitted by
                                </p>
                            </div>
                            <div className="d-flex pl-2 align-top w-80" id="profile">
                                <div className="d-flex align-items-center mr-2"><img  id="profile-img" 
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
                                <small className="ml-2 mb-2 mt-auto" style={{ lineHeight:"17px"}}>
                                    {this.state.sameProblemCount} other users have this problem!
                                </small>
                                <button className={"ml-1 mr-1 mb-auto p-1 d-flex flex-row checkbox".concat(this.state.sameProblem?" active":"")}
                                onClick={this.handleSameProblemClicked}>
                                {this.state.sameProblem?
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="align-self-center bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>:
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="align-self-center bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                </svg>}<small className="ml-2" style={{ lineHeight:"20px"}}>I have same Question</small>
                            </button>
                            </div>



                            <div id="middle" className="mt-2 mb-4 p-3 border-left">
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
                            
                            <small className="ml-auto mr-2 mt-auto mb-auto">Submitted on : {this.state.sentDate}</small>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default QuestionChatbox;