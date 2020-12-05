import React, { Component } from 'react';
import './CSS/ProfilePreview.css';
import profileImg from '../img/default-profile-picture.jpg'

class ProfilePreview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="preview-main-box ">
                <div className="preview-elements mb-3">
                    <div  className="preview-profile">
                        <div className="preview-profileImg d-flex justify-content-center">
                            <img src={profileImg} />
                            <div></div>
                            <div className="preview-FirstName-LastName">
                                <p className="mb-3 preview-Firstname">Sadegh jafari</p>
                            </div> 
                        </div>
                        
                        <div className="preview-personalDetail">

                            <label for="preview-bioBox">Bio</label>
                            <div className="preview-bioBox">
                                <p className="preview-bio">
                                    Hi! I'm back-end developer. I'm intrested in python. Get in touch with me via email. Thanks.
                                </p>
                            </div>

                            <label for="preview-Username">Username</label>
                                <p className="mb-3 preview-Username">SadeghJafari</p>

                            <label for="preview-Email">Email Address</label>
                                <p className="preview-Email">Sadegh@yahoo.com</p>

                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProfilePreview;