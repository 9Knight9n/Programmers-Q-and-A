import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import './CSS/answersPage.css';
import MyAccount from './myAccount';




class AnswersPage extends Component {
    state = {
      options:[
      ],
      activeTab:1
    }

    tabClicked=(id)=>{
      this.setState({activeTab:id})
    }

    render() { 
        return (  
            
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
                    <button className="bttn btn-primary">Back</button>



                    <div onClick={() => this.props.hideModal()} className={this.props.show ? "modal display-block" : "modal display-none"}>
                    <section onClick={this.modalClick} className="modal-main">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.submit === -1 ? "Submitting a Question" : "Submiting a Reply"}</h5>
                            <button type="button" className="close" onClick={() => this.props.hideModal()} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-row justify-content-center mt-2">
                            <textarea id="SubmitField-input" cols="92"
                                rows="4"
                                    className="form-control submit-input-active"
                                placeholder="type here!">
                            </textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-lg-6 d-flex justify-content-start">
                                    <button type="button" className="btn btn-secondary"
                                        onClick={() => this.props.hideModal()}>
                                        Cancle
                            </button>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-end">
                                    <button onClick={() => this.submitChat(this.props)} 
                                        type="button" className="btn btn-primary">
                                        {this.props.submit === -1 ? "Submit Question" : "Submit Reply"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
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
                </div>


                
           


                
                <div className="mt-auto w-100">
                    <Link className="p-0 w-100" to="/"> </Link>
                </div>
                <div className=" setting-right"></div>
   
            </div>
             <div className="h-100 empty-125"></div>



            

        </div>
        
          
        );
        
    }
    

    
}


 
export default AnswersPage;