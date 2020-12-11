import React, { Component } from 'react';
import profileImg from '../img/default-profile-picture.jpg'
import exitImg from '../img/exit.png'
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './CSS/profileOwner.css';
import editIcon from '../img/edit.png'

class ProfileOwner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatroomName: '404!Java',
            chatroomTitle: 'Programming languages (Java)',
            chatroomDes: 'Hi! Thanks for visiting',
            chatroomLink: 'This is link',
            isOwner: true,
            OwnerIsEditingName: false,
            OwnerIsEditingLink: false,
            OwnerIsEditingdes: false
        }; 

    }
    handleEditClick = (id) =>{
        if (id == 1)
            this.setState({
                OwnerIsEditingName : true,
            })
        if (id == 3)
            this.setState({
                OwnerIsEditingLink: true,
            })
        if (id == 4)
            this.setState({
                OwnerIsEditingDes: true,
            })
    }
    render() { 
        return ( 
            // <img src={profileImg} />
            <div className="chProfileOwner chProfileOwner-main-box" style={{overflowY:"hidden"}}>
               <div style={{display:"none"}}> <ReactTooltip place="right" effect="solid" type="dark"/>
               </div>
                {/* <div className="chProfileOwner-exitImg">
                     <Link to="/"> 
                        <img src={exitImg} />
                     </Link> 
                </div> */}

                <div class="d-flex">
                    <div  className="chProfileOwner-profile">
                            <div className="chProfileOwner-headerProfile row d-flex justify-content-center">
                                <div className="chProfileOwner-profileImg col">
                                    <img src={profileImg} />
                                    {/* src={sessionStorage.getItem(this.props.userid + ":avatar")} */}
                                </div>
                                <div className="chProfileOwner-chName-chTitle-chLink col">
                                    <div className="chProfileOwner-chNameBox">
                                        <div className="d-flex flex-row">
                                            
                                            <div className="chProfileOwner-chNameEditImg">{this.state.isOwner && !this.state.OwnerIsEditingName ? <img onClick={() => this.handleEditClick(1) } src={editIcon} /> : ''}</div>
                                        </div>
                                        <div className="chProfileOwner-chName">
                                            {this.state.isOwner && this.state.OwnerIsEditingName ? <input value={this.state.chatroomName}></input> : <label>{this.state.chatroomName}</label>}
                                           
                                        </div>
                                    </div>
                                    <div className="chProfileOwner-chTitle">
                                        {/* <p>email : {this.state.userEmail}</p> */}
                                        <p>{this.state.chatroomTitle}</p>
                                    </div>
                                    <div className="chProfileOwner-chLinkBox">
                                        <div className="d-flex flex-row">
                                            <label for="chProfileOwner-chLink">Chatroom link : </label> 
                                            <div className="chProfileOwner-chLinkEditImg">{this.state.isOwner && !this.state.OwnerIsEditing ? <img src={editIcon} onClick={() => this.handleEditClick(3) } /> : ''}</div>
                                        </div>
                                        <div className="chProfileOwner-chLink">
                                            {this.state.isOwner && this.state.OwnerIsEditingLink ? <input value={this.state.chatroomLink}></input> : <p>{this.state.chatroomLink}</p>}
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="chProfileOwner-desBox">
                                <div className="d-flex flex-row">
                                    <label for="chProfileOwner-des">Description :</label>
                                    <div className="chProfileOwner-desEditImg">{this.state.isOwner && !this.state.OwnerIsEditing ? <img src={editIcon} onClick={() => this.handleEditClick(4) } /> : ''}</div>
                                </div>
                                <div className="chProfileOwner-des">
                                    {this.state.isOwner && this.state.OwnerIsEditingDes ? <input value={this.state.chatroomDes}></input> : <p>{this.state.chatroomDes}</p>}
                                </div>
                            </div>
                            {/* <div className="chProfileOwner-deleteButton">
                                <button>Delete Chatroom</button>
                            </div> */}
                        </div>
                    {/* <div className="w-100 h-100">
                        <div className="h-100 parisa-css content-form1 d-flex justify-content-center align-items-center">
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
                    </div> */}


                        <link href="http://getbootstrap.com/examples/jumbotron-narrow/jumbotron-narrow.css" rel="stylesheet"/>
                        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"/>
                        <div className="jumbotron list-content ml-auto ">
                            <div href="#" class="list-group-item title w-100 ">
                                    Your friend zone
                            </div>
                            <ul className="list-group">
                           
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