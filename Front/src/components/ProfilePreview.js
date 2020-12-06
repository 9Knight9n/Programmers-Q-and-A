import React, { Component } from 'react';
import './CSS/ProfilePreview.css';
import profileImg from '../img/default-profile-picture.jpg'
import exitImg from '../img/exit.png'
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import {Link} from 'react-router-dom';
class ProfilePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Sadegh',
            lastName: 'Jafari',
            userEmail: 'sadegh@yahoo.com',
            userName: 'SadeghJafari79',
            userId: null,
            userBio: 'hiaskakdl akdsaskld;a lsa;dk; kas;ajfsk dfbsc vjdkskd bajbadj ;ka; dkljia jfksndv slbdkj fhaoi fdj ls kafb avdddddas ;;;;;;;; ;;;;;; ;fffff ffff ffffff fff fffssssssss ss ssdfcdea kjjd jfk;sdjfn vv',
        }; 

    }

    // componentDidMount = async () =>{
    //     if (!sessionStorage.getItem(this.state.userid + ":avatar")) {
    //       await getUserAvatar(this.state.userid);  
    //     }  
    // }

    render() { 
        return ( 
            <div className="ProfilePreview-main-box ">
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
                                    <p>{this.state.firstName} {this.state.lastName}</p>
                                </div>
                                <div className="ProfilePreview-email-userName">
                                    <p>email : {this.state.userEmail}</p>
                                    <p>username : {this.state.userName}</p>
                                </div>
                                <div className="intrested">
                                <label for="intrested">Intrested In : </label> 
                                    <p>
                                        {this.state.userBio}
                                    </p>
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
                            <div className="ProfilePreview-user-activity d-flex justify-content-center">
                                <div className="ProfilePreview-asked-questions">
                                    Asked 125 questions
                                </div>
                                <div className="ProfilePreview-answered-questions">
                                    Answered 236 questions
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