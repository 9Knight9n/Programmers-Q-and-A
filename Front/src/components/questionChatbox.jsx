import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
import { Dropdown } from 'react-bootstrap';
import LoadingPage from './loading';
import './CSS/questionChatbox.css';
import Cookies from 'js-cookie';
import { getUserAvatar } from './util';
import ReactTooltip from 'react-tooltip';


class QuestionChatbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            sameProblem:false,
            sameProblemCount:this.props.sameProblemCount,
            senderId:this.props.senderId,
            senderUsername:this.props.senderUsername,
            senderAvatar:null,
            context:this.props.context,
            sentDate:this.props.sentDate,
        };

        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount=async()=>{
        console.log("inside");
        if(!sessionStorage.getItem(this.state.senderId+":avatar"))
        {
            await getUserAvatar(this.state.senderId);
        }
        this.setState({senderAvatar:sessionStorage.getItem(this.state.senderId+":avatar")})
        console.log(sessionStorage.getItem(this.state.senderId+":avatar"))
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
                <ReactTooltip place="right" effect="solid" type="dark"/>
                {this.state.loading?<LoadingPage/>: ""}
                <div id="Question"
                    style={{ 
                        width:this.props.width+"vw",
                    }}
                    className="d-flex flex-column">

                        <div id="header" className="d-flex flex-row">
                            <div className="d-flex ml-2 pl-2 align-top w-10">
                                <p className="pt-1 d-flex align-items-center ml-1" style={{fontSize: "0.85rem"}}>
                                    submitted by
                                </p>
                            </div>
                            <div className="d-flex pl-2 align-top w-80 ml-3" id="profile">
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
                                
                                <button style={{outline:"none"}} className="ml-auto mr-auto pr-2 pl-2 mb-2 mt-2"
                                    data-tip="Select this button if you have same problem!"
                                    onClick={this.handleSameProblemClicked}>
                                    {this.state.sameProblem?
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>:
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                                    </svg>}
                                </button>
                                <button style={{outline:"none"}} class="ml-auto mr-auto pr-2 pl-2 mt-1" data-tip="Number of users with same problem!">
                                    {this.state.sameProblemCount + 1524}
                                </button>
                                
                            </div>



                            <div id="middle" className="mt-2 mb-4 p-3 border-left">
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