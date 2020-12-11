import React, { Component } from 'react';
import profileImg from '../img/default-profile-picture.jpg'
import exitImg from '../img/exit.png'
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './CSS/profileOwner.css';

class ProfileOwner extends Component {
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
            // <img src={profileImg} />
            <div className="ProfilePreview-main-box " style={{overflowY:"hidden"}}>
               <div style={{display:"none"}}> <ReactTooltip place="right" effect="solid" type="dark"/></div>
                {/* <div className="ProfilePreview-exitImg">
                     <Link to="/"> 
                        <img src={exitImg} />
                     </Link> 
                </div> */}

                    <div class="d-flex">
                        <div className="w-100 h-100">

                        <div class="h-100 parisa-css content-form1 d-flex justify-content-center align-items-center">
                        
                    <div className="INPUT-FORM1">
                     
                         <p>Name :</p>
                        <input name="lastName" value={this.state.lastName}  onChange={this.handleChange} type="text" className="input p-2" placeholder="Enter Last name"/><br></br>
                        <p>Description :</p>
                        <input name="Description" value={this.state.Description}  onChange={this.handleChange} type="text" className="input p-2" placeholder="Enter Description"/>
                        {this.state.DescriptionError? <p className="pro-error">Description Must Be Full!</p> : <br/>}
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Save Changes</button>
                        {this.state.succeed? <p className="pro-success">Saved successfully!</p> : <br/>}
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Delete Chatroom</button>
                        {this.state.succeed? <p className="pro-success">Delete successfully!</p> : <br/>}
                        
                    </div>
                        
                        
                        
                </div>














                        </div>
                        <link href="http://getbootstrap.com/examples/jumbotron-narrow/jumbotron-narrow.css" rel="stylesheet"/>
                        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"/>


                        <div class="jumbotron list-content ml-auto ">
                        <div href="#" class="list-group-item title w-100 ">
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

            </div>  
                    
            
                          
              
        
                   
         );
    }
}
 
export default ProfileOwner;