import React, { Component } from 'react';
import './CSS/ProfilePreview.css';
import profileImg from '../img/default-profile-picture.jpg'

class ProfilePreview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="preview-main-box d-flex justify-content-center">
                <div className="preview-elements d-flex mb-3">
                    <div  className="preview-profile">
                        <div className="preview-profileImg">
                            <img src={profileImg} />
                        </div>
                        
                        <div className="preview-personalDetail">
                            <label for="preview-Firstname">First Name</label>
                                <p className="mb-3 preview-Firstname">Sadegh</p>

                            <label for="preview-Lastname">Last Name</label>
                                <p className="mb-3 preview-Lastname">Jafari</p>

                            <label for="preview-Username">Username</label>
                                <p className="mb-3 preview-Username">SadeghJafari</p>

                            <label for="preview-Email">Email Address</label>
                                <p className="preview-Email">Sadegh@yahoo.com</p>

                            <label for="preview-bioBox">Bio</label>
                            <div className="preview-bioBox">
                                <p className="preview-bio">
                                    Hi! I'm back-end developer. I'm intrested in python. Get in touch with me via email. Thanks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="preview-activity">
                        hi
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProfilePreview;