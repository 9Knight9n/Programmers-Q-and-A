import React, { Component } from 'react';
import './CSS/ProfilePreview.css';
import profileImg from '../img/default-profile-picture.jpg'
import exitImg from '../img/exit.png'

class ProfilePreview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ProfilePreview-main-box ">
                <div className="ProfilePreview-exitImg">
                    <img src={exitImg} />
                </div>
                <div className="ProfilePreview-elements mb-3">
                    <div  className="ProfilePreview-profile">
                        <div className="ProfilePreview-headerProfile row d-flex justify-content-center">
                            <div className="ProfilePreview-profileImg col">
                                <img src={profileImg} />
                            </div>
                            <div className="ProfilePreview-FirstName-LastName-email-userName col">
                                <div className="ProfilePreview-FirstName-LastName">
                                    <p>Sadegh Jafari</p>
                                </div>
                                <div className="ProfilePreview-email-userName">
                                    <p>email : Sadegh@yahoo.com</p>
                                    <p>username : SadeghJafari</p>
                                </div> 
                            </div> 
                        </div>
                        <div className="ProfilePreview-personalDetail">

                            <label for="ProfilePreview-bioBox">Bio</label>
                            <div className="ProfilePreview-bioBox">
                                <p className="ProfilePreview-bio">
                                    Hi! I'm back-end developer. I'm intrested in python. Get in touch with me via email. Thanks.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProfilePreview;