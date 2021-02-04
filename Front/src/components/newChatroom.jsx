import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ChatroomCreationLast from './ChatroomCreationLast';
import ChatroomCreationApp from './ChatroomCreationApp';
import ChatroomCreationOs from './ChatroomCreationOs';
import ChatroomCreationFirst from './ChatroomCreationFirst';
import ChatroomCreationPl from './ChatroomCreationPl';
import exitImg from '../img/exit.png';
import './CSS/newChatroom.css'
 

class NewChatroom extends Component {
    state = {
        
    }

    hideModal = () => {
        this.props.hideModal();
        sessionStorage.removeItem("selectedSub")
        sessionStorage.removeItem("selected")
        sessionStorage.removeItem("selectedTopic")
        sessionStorage.removeItem("Description")
        sessionStorage.removeItem("Link")
    }

    modalClick = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        return false;
    }

    render() { 
        return ( 
            <React.Fragment>
                <div onClick={() => this.props.hideModal()} className={this.props.show ? "modal display-block" : "modal display-none"}>
                    <section onClick={this.modalClick} className="modal-main2">
                        <div className="w-100 h-100 abed-css d-flex justify-content-center">
                        <Link to="/" onClick={this.hideModal}>
                                <svg  className="exitImg bi bi-x"  src={exitImg} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                        </Link>
                        <Switch>
                            <Route exact path="/chatroomcreationfirst">
                                <ChatroomCreationFirst hideModal={this.hideModal} />
                            </Route>

                            <Route exact path="/chatroomCreationOs" component={ChatroomCreationOs}  >
                            <ChatroomCreationOs hideModal={this.hideModal} />
                            </Route>



                            <Route exact path="/chatroomCreationApp" component={ChatroomCreationApp} >
                            <ChatroomCreationApp hideModal={this.hideModal} />
                            </Route>

                            <Route exact path="/chatroomCreationPl" component={ChatroomCreationPl} >
                            <ChatroomCreationPl hideModal={this.hideModal} />
                            </Route>

                            <Route exact path="/chatroomCreationLast" component={ChatroomCreationLast} >
                            <ChatroomCreationLast hideModal={this.hideModal} />
                            </Route>
                        </Switch>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NewChatroom;