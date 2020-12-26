import React, { Component } from 'react';
import './CSS/joinChatroom.css';
import exitImg from '../img/exit.png'
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import {generatePath, Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import {decodeList} from './util';
import NumberFormat from 'react-number-format';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class joinChatroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cid: this.props.Cid,
            isJoined: this.props.isJoined
        }; 

    }

    // componentDidMount = async () => {
    //     if (!sessionStorage.getItem("15" + ":avatar")) {
    //         await getUserAvatar("15");  
    //     }
    //     this.loadData();
    // }
    // loadData = async () => {
    //     // this.setState({loading:true})
    //     console.log('entred loadData....')
    //     let config = {
    //         url:"",
    //         needToken:true,
    //         type:"post",
    //         formKey:[
               
    //         ],
    //         formValue:[
             
    //         ]
    //     };
    //     let data = [];
    //     data = await request(config);
    //     if (data) {
    //         console.log("LOADING......",)
    //         this.setState({

    //         });
    //         let userIntrests = decodeList(options, data.interests)
    //         // console.log("user intersting:  ", userIntrests)
    //         this.setState({
    //             userIntrests
    //         })
    //     }
    //     console.log(data)
    //     // this.setState({loading:false})
    // }

    // modalClick = (e) => {
    //     // e.preventDefault();
    //     e.stopPropagation();
    //     return false;
    //   }

    // numberFormatter(num) {
    //     return Math.abs(num) > 999 && Math.abs(num) < 1000000? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' :
    //     Math.abs(num) > 9999 ?  Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'm' :
    //     Math.sign(num)*Math.abs(num)
    // }


    modalClick = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        return false;
      }

      componentDidUpdate(prevProps) {
        console.log("something changed")
        if (prevProps.isJoined !== this.props.isJoined) {
          this.setState({isJoined: this.props.isJoined})
        console.log("Updated")
        }
      }

      handleJoin = async () => {
        console.log("enter enter enter")
        let config ={
            url:"http://127.0.0.1:8000/api/Join/",
            needToken:false,
            type:"post",
            formKey:[
                "id",
                "chatroomId",
            ],
            formValue:[
                Cookies.get('id'),
                this.state.Cid,
            ]
        }
        let data = []
        // console.log("outside 0",data)
        data = await request(config)
        if (data.message === "New chatroom_User created") {
            console.log("user Joined");
            // this.props.isJoined = true
            this.setState({
                isJoined: true,
                showJoinChatroom: false,
            })
            this.props.updateJoinState(true)
            this.props.hideJoinChatroom()
            toast.dark("Welcom to the chatroom");
        }else{
            console.log("user is already Joined")
        }

      }

    render() { 
        return ( 
            <div id="joinChatroom">
                {/* <ToastContainer
                className="Toast"
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                /> */}
                {this.props.showJoinChatroom ?
                    <div onClick={() => this.props.hideJoinChatroom()} className="joinChatroom joinChatroom-main-box modal">
                        <section onClick={this.modalClick} className="modal-main d-flex flex-column">
                            <div className="joinChatroom-exitImg">
                                <img onClick={() => this.props.hideJoinChatroom()} src={exitImg} />
                            </div>
                            <div className="joinChatroom-elements">
                                <div className="d-flex h-100 align-items-center flex-column">
                                    <div className="joinChatroom-lable">
                                        <label>You must join the chatroom to ask question</label>
                                    </div>
                                    <div className="joinChatroom-text">
                                        <p>
                                            Ask and answer questions then enjoy!
                                        </p>
                                    </div>
                                    <div className="joinChatroom-buttons d-flex flex-row mt-auto">
                                        <button onClick={this.handleJoin} className="joinButton">Join</button>
                                        <button onClick={() => this.props.hideJoinChatroom()} className="notNowButton">Not now</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <ReactTooltip place="right" effect="solid" type="dark"/> */}
                    </div> : ''
                }
            </div>
        );
    }
}
 
export default joinChatroom;