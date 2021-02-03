import React, { Component } from 'react';
import SelectAvatar from './selectAvatar';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import './CSS/usersList.css'

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '',
        isOnline: true,
        showUserProfile: false
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOnline: false,
            users: []
        }
    }

    componentDidMount = async () => {
        this.loadUserData();
    }

    showUserProfile = () =>{
        this.setState({showUserProfile:true})
    }

    loadUserData = async () =>{
        console.log("enter enter enter")
        let config ={
            url:"http://127.0.0.1:8000/api/show_Users/",
            needToken:false,
            type:"post",
            formKey:[
                "chatroomId",
            ],
            formValue:[
                this.props.Cid,
            ]
        }
        let data = []
        // console.log("outside 0",data)
        data = await request(config)
        if (data) {
            console.log(data) 
            this.setState({
                users: data
            })
            for(let i = 0 ;i<this.state.users.length;i++){
                getUserAvatar(this.state.users[i].id)
            }
        }else{
          console.log("Error to load data")  
        }
      }

    render() { 
        return ( 
            <div className="jumbotron h-100 list-content ml-auto ">
                <div href="#" className="chProfileOwner-list-group-item title w-100 d-flex justify-content-center">
                    <h2 className="mt-3">Members</h2>
                </div>
                <div className="user-list rounded-0">
                    <ul className="list-group">
                        {this.state.users.map(u => 
                                <li className ="d-flex justify-content-start" key={u.id} >
                                        {this.state.isOnline?
                                        <StyledBadge
                                        overlap="circle"
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                        }}
                                        variant="dot"
                                        >
                                            <Avatar alt="Avatar" src={sessionStorage.getItem(u.id+":avatar")} />
                                        </StyledBadge> :    
                                            <img className="img-thumbnail" src={sessionStorage.getItem(u.id+":avatar")} />
                                        }
                                    
                                    <label className="name w-75 ml-3 mt-auto mb-auto">
                                        {u.name}
                                    </label>
                                </li>
                            )}
                    </ul>
                </div>
                {/* <div id="showUserProfile">
                {this.state.showUserProfile?
                     <ProfilePreview userid={this.state.senderId} hideProfilePreview={this.hideProfilePreview} showProfilePreview={this.state.showProfilePreview} />
                :""}
                </div> */}
            </div>
            
         );
    }
}
 
export default UsersList;