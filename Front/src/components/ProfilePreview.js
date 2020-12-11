import React, { Component } from 'react';
import './CSS/ProfilePreview.css';
import profileImg from '../img/default-profile-picture.jpg'
import exitImg from '../img/exit.png'
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import {generatePath, Link} from 'react-router-dom';
import  askedQImg from '../img/askedQuestion.png';
import  answeredQImg from '../img/answeredQuestion.png';
import groupChat from '../img/group.png';
import ReactTooltip from 'react-tooltip';

class ProfilePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Sadegh',
            lastName: 'Jafari',
            // userEmail: 'sadegh@yahoo.com',
            userName: 'SadeghJafari79',
            userId: null,
            userBio: 'Hi! This is my bio. Thanks for visiting',
            userIntrests:'Java, Python, C++, PHP, HTML, CSS',
            askedQ: '122',
            answeredQ: '143',
            numOfChatroom: '20'
        }; 

    }

    // componentDidMount = async () =>{
    //     if (!sessionStorage.getItem(this.state.userid + ":avatar")) {
    //       await getUserAvatar(this.state.userid);  
    //     }  
    // }

    render() { 
        return ( 
            <div className="ProfilePreview ProfilePreview-main-box ">
                <ReactTooltip place="right" effect="solid" type="dark"/>
                <div className="ProfilePreview-exitImg">
                    {/* <Link to="/"> */}
                        <img src={exitImg} />
                    {/* </Link> */}
                </div>
                <div className="ProfilePreview-elements mb-3">
                    <div  className="ProfilePreview-profile">
                        <div className="ProfilePreview-headerProfile row d-flex justify-content-center">
                            <div className="ProfilePreview-profileImg col">
                                <img src={profileImg} />
                                {/* src={sessionStorage.getItem(this.props.userid + ":avatar")} */}
                            </div>
                            <div className="ProfilePreview-FirstName-LastName-email-userName col">
                                <div className="ProfilePreview-FirstName-LastName">
                                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                                </div>
                                <div className="ProfilePreview-email-userName d-flex">
                                    {/* <p>email : {this.state.userEmail}</p> */}
                                    <label for="ProfilePreview-userName-P">username : </label>
                                    <p className="ProfilePreview-userName-P"> {this.state.userName}</p>
                                </div>
                                <div className="ProfilePreview-intrestsBox">
                                    <label for="ProfilePreview-intrests">Intrested In : </label> 
                                    <div className="ProfilePreview-intrests">
                                        <p>
                                            {this.state.userIntrests}
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="ProfilePreview-bioBox">
                            <label for="ProfilePreview-bio">Bio</label>
                            <div className="ProfilePreview-bio">
                                <p>
                                    {this.state.userBio}
                                </p>
                            </div>
                        </div>
                        <div className="ProfilePreview-activity">
                            <div className="ProfilePreview-user-activity d-flex justify-content-around">
                                <div className="ProfilePreview-asked-questions d-flex justify-content-center">
                                    <img src={askedQImg} data-tip={this.state.userName + " asked " + this.state.askedQ +" questions"} /> 
                                    <p>{this.state.askedQ}</p> 
                                </div>
                                <div className="ProfilePreview-joined-chatrooms d-flex justify-content-center">
                                    <img src={groupChat} data-tip={this.state.userName+ " joined " + this.state.numOfChatroom +" chatrooms"} /> 
                                    <p>{this.state.numOfChatroom}</p>
                                    </div>
                                <div className="ProfilePreview-answered-questions d-flex justify-content-center">
                                    <img src={answeredQImg} data-tip={this.state.userName + " asked " + this.state.askedQ +" questions"} /> 
                                    <p>{this.state.answeredQ}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProfilePreview;