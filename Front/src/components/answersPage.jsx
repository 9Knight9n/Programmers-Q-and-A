import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import './CSS/chatroomInfo.css';
import MyAccount from './myAccount';
import ChatroomInfo from './chatroomInfo';
import SubmitField from './submitField';
import './CSS/answersPage.css';


class AnswersPage extends Component {
    state = {
        show: false,
        submit: -2,
        refToChatroom:React.createRef()
    }
    state = {
        options:[
        ],
        activeTab:1
      }

    tabClicked=(id)=>{
        this.setState({activeTab:id})
      }

      
    showModal = (submit) => {
        this.setState({ submit: submit });
        this.setState({ show: true });
        // console.log(this.state.submit)

    };


    hideModal = () => {
        this.setState({ show: false });
        this.setState({ submit: -2 });
      
    };

    render() { 
        return (  

        <React.Fragment>

            <div className="Setting-bg d-flex justify-content-center">
                    
                    <div className="h-100 empty-125"></div>
                    
                    <div className="w-42 ">
                    
                        <div className=" nav nav-pills">
                            {this.state.options.map(opt =>
                            <a key={opt.id} 
                            onClick={()=> this.tabClicked(opt.id)} 
                            href="#" >
                                        
                            </a>
                                    )}
                        </div>
                            
        
                        <div id="container">
                            <main>
                                <header>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
                                    <div>
                                        <h2>Chat with Vincent Porter</h2>
                                        <h3>already 1902 messages</h3>
                                    </div>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>
                                </header>
                            </main>

                            <SubmitField ref={this.state.refToChatroom} hideModal={this.hideModal} show={this.state.show} submit={this.state.submit} />

                            <button onClick={() => this.showModal(-1)} className="flex-row justify-content-center align-self-end btn btn-primary submit-button" type="button"> Answer Question</button>
                        </div>
        
                    
                        <div className="mt-auto w-100">
                            <Link className="p-0 w-100" to="/"> </Link>
                        </div>
                        <div className=" setting-right"></div>
                   </div>
                <div className="h-100 empty-125"></div>  

                    
                   
   
            </div>

          








        </React.Fragment>
        
        );
        
    }
    

    
}


 
export default AnswersPage;