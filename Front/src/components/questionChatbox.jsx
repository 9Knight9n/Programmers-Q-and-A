import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
import './CSS/questionChatbox.css';


class QuestionChatbox extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <div id="Question"
                    style={{ 
                        width:this.props.width+"vw",
                    }}
                    className="d-flex flex-column">

                        <div id="header" className="">
                            Hello this is header
                        </div>



                        <div id="body" className="d-flex flex-row w-100">
                            <div id="left" className="">
                                Right pannel
                            </div>



                            <div id="middle" className="">
                                <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-css'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={280}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt 
                                    <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, 
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
                        <div id="footer" className="">
                            this is footer
                        </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default QuestionChatbox;