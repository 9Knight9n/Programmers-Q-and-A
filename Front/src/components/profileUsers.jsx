import React, { Component } from 'react';
import profileImg from '../img/default-profile-picture.jpg'
import exitImg from '../img/exit.png'
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './CSS/profileUsers.css';

class ProfileUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // firstName: 'Sadegh',
            // lastName: 'Jafari',
            // // userEmail: 'sadegh@yahoo.com',
            // userName: 'SadeghJafari79',
            userId: null,
            userBio: 'Hi! This is my bio. Thanks for visiting',
            userIntrests:'Java, Python, C++, PHP, HTML, CSS',
            askedQ: '122',
            answeredQ: '143',
        }; 

    }
    render() { 
        return ( 
            <div className="ProfilePreview-main-box ">
                <ReactTooltip place="right" effect="solid" type="dark"/>
                {/* <div className="ProfilePreview-exitImg">
                     <Link to="/"> 
                        <img src={exitImg} />
                     </Link> 
                </div> */}

                <div className="ProfilePreview-elements mb-3 d-flex justify-content-center">
                    <div  className="ProfilePreview-profile">
                        <div className="ProfilePreview-headerProfile row d-flex justify-content-center">
                            <div className="ProfilePreview-profileImg col">
                                <img src={profileImg} />
                                {/* src={sessionStorage.getItem(this.props.userid + ":avatar")} */}
                            </div><li></li>
                            <p>profile Name</p>
                            <p>chatroom title</p>
                            <p>discription</p>
                            <div className="ProfilePreview-FirstName-LastName-email-userName col">
                                <div className="ProfilePreview-FirstName-LastName">
                                    <p>{this.state.firstName} {this.state.lastName}</p>
                                </div>
                                <div className="ProfilePreview-email-userName">
                                    {/* <p>email : {this.state.userEmail}</p> */}
                                    {/* <p>username : {this.state.userName}</p> */}
                                </div>
                                
                            </div> 
                        </div>
                     
                    </div>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>leave chatroom</button>
                    <div className="user-preview"> <div class="main-container">
                <div class="left-container container">
                    
                    
                </div>
    
              
                <div class="middle-container container">
                   
                   
                    
                   
                </div>


                    <link href="http://getbootstrap.com/examples/jumbotron-narrow/jumbotron-narrow.css" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"/>
                    <div class="container bootstrap snippets bootdey">

                        <div class="header">
                            <h3 class="text-muted prj-name">
                                
                            </h3>
                        </div>


                        <div class="jumbotron list-content">
                        <div href="#" class="list-group-item title">
                                Your friend zone
                            </div>
                            <ul class="list-group">
                           
                            <li href="#" className="list-group-item text-left d-flex flex-row w-100">
                                <img class="img-thumbnail" src="https://bootdey.com/img/Content/User_for_snippets.png"/>
                                <label class="name w-75 ml-3 mt-auto mb-auto">
                                    
                                <p>Juan guillermo cuadrado</p>
                                </label>
                                
                               
                            </li>
                            <li href="#" className="list-group-item text-left d-flex flex-row w-100">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name w-75 ml-3 mt-auto mb-auto">
                                jo aderestand 
                                </label>
                                
                               
                            </li>
                            <li href="#" className="list-group-item text-left d-flex flex-row w-100">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name w-75 ml-3 mt-auto mb-auto">
                                jo aderestand 
                                </label>
                                
                               
                            </li>
                            <li href="#" className="list-group-item text-left d-flex flex-row w-100">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name w-75 ml-3 mt-auto mb-auto">
                                Sara Bencallin 
                                </label>
                               
                               
                            </li>
                            <li href="#" class="list-group-item text-left d-flex flex-row w-100">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name w-75 ml-3 mt-auto mb-auto">
                                Emili  
                                </label>
                                
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left d-flex flex-row w-100">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name w-75 ml-3 mt-auto mb-auto">
                                Amorina 
                                </label>
                               
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left d-flex flex-row w-100">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_2.jpg"/>
                                <label class="name w-75 ml-3 mt-auto mb-auto">
                                    Weide 
                                </label>
                                
                                <div class="break"></div>
                            </li>
                            </ul>
                        </div>
                    </div>              

            </div>  </div>
                    
                </div>
                          
              
        
             </div>       
         );
    }
}
 
export default ProfileUsers;