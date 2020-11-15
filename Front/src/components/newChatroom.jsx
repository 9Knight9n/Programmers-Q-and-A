import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ChatroomCreationLast from './ChatroomCreationLast';
import ChatroomCreationApp from './ChatroomCreationApp';
import ChatroomCreationOs from './ChatroomCreationOs';
import ChatroomCreationFirst from './ChatroomCreationFirst';
import ChatroomCreationPl from './ChatroomCreationPl';
import './CSS/newChatroom.css'


class NewChatroom extends Component {
    state = {
        
    }

    modalClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    render() { 
        return ( 
            <React.Fragment>
                <div onClick={() => this.props.hideModal()} className={this.props.show ? "modal display-block" : "modal display-none"}>
                    <section onClick={this.modalClick} className="modal-main2">
                        <div className="w-100 h-100 abed-css d-flex justify-content-center">
                        <Switch>
                            <Route exact path="/chatroomcreationfirst"  component={ChatroomCreationFirst} />

                            <Route exact path="/chatroomCreationOs" component={ChatroomCreationOs} />

                            <Route exact path="/chatroomCreationApp" component={ChatroomCreationApp} />

                            <Route exact path="/chatroomCreationPl" component={ChatroomCreationPl} />

                            <Route exact path="/chatroomCreationLast" component={ChatroomCreationLast} />
                        </Switch>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NewChatroom;