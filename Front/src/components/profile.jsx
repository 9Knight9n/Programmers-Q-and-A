import React, { Component } from 'react';
import './CSS/profile.css';



class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
	<div class="profile">
		<div class="image-container">
			<img src="user.jpeg" style="width:100%"/>
			<div class="title"></div>
			<h2>parisa zafari</h2>
		</div>

			<div>
				<div class="main-container">
					<p><i class="fa fa-briefcase info"></i>easy toturials</p>
					<p><i class="fa fa-home info" ></i>tehran ,IR</p>
					<p>easy toturials</p>
					<p><i class="fa fa-envelope info" ></i>PARISAZAFARI79@GMAIL.COM</p>
					<p><i class="fa fa-phone info" ></i>09128052842</p>
					<hr/>
					<p><b><i class="fa fa-asterisk info">
					</i>skills</b></p>
			
					<p>JAAVA</p>
					<div class="skill-bar">
						<div class="progress-bar" style="width:80%">
						</div>
					</div>
					
					<p>c++</p>
					<div class="skill-bar">
						<div class="progress-bar" style="width:85%">
						</div>
					</div>
					
					<p>c#</p>
					<div class="skill-bar">
						<div class="progress-bar" style="width:75%">
						</div>
					</div>
								   
					<p>UI DESIGN</p>
					<div class="skill-bar">
						<div class="progress-bar" style="width:50%">
						</div>						
					</div>
									 
												
								
						
				</div>
			</div>
	</div>
    </React.Fragment>
            
         );
    }
}
 
export default Profile;