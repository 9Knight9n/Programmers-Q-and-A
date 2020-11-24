import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';
import MyAccount from './myAccount';
import './CSS/chatroomInfo.css';





class ChatroomInfo extends Component {
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
                    

                <div id="container">
                    <main>
                        <header>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
                            <div>
                                <h2>Chat with Vincent Porter</h2>
                                <h3>already 1902 messages</h3>
                            </div>
                            
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


 
export default ChatroomInfo;