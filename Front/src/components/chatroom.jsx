import React, { Component } from 'react';
import './CSS/chatroom.css';

class Chatroom extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
            <div className="chatbox">
                <div className="mt-4 mb-7 mr-5">
                    <div>
                        <ul class="simple-nested">
                        <li>
                            <div class="comment">
                                <p><a href="">ali</a></p>
                                <em>Feb 23rd</em>
                                <p>this is general comment.</p>
                                <p><a href="">reply</a></p>
                            </div>
                            <ul>
                                <li>
                                    <div class="comment">
                                        <p><a href="">zahra</a></p>
                                        <em>Feb 23rd</em>
                                        <p>this is first reply comment.</p>
                                        <p><a href="">reply</a></p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div class="comment">
                                                <p><a href="">reza</a></p>
                                                <em>Feb 23rd</em>
                                                <p>this is second reply comment..</p>
                                                <p><a href="">reply</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                <div class="comment">
                                        <p><a href="">Ali</a></p>
                                        <em>Feb 23rd</em>
                                        <p>this is a reply to initial comment.</p>
                                        <p><a href="">reply</a></p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="comment">
                                <p><a href="">maryam </a></p>
                                <em>Feb 23rd</em>
                                <p>this is third reply comment..</p>
                                <p><a href="">reply</a></p>
                            </div>
                        </li>
                            <li>
                            <div class="comment">
                                <p><a href="">maryam </a></p>
                                <em>Feb 23rd</em>
                                <p>this is forth reply comment..</p>
                                <p><a href="">reply</a></p>
                            </div>
                        </li>
                    </ul>
                    </div>
                    
                </div>
            </div>
            {/* <button className="btn btn-primary ml-10">Submit Question</button> */}
            </React.Fragment>
        );
    }
}
 
export default Chatroom;