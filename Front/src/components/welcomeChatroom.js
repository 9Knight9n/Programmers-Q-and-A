import React, { Component } from 'react';
import './CSS/welcomeChatroom.css';
import exitImg from '../img/exit.png'
import { getUserAvatar } from './util';
import {request} from './requests.jsx';
import {generatePath, Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import {decodeList} from './util';
import NumberFormat from 'react-number-format';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';

class welcomeChatroom extends Component {
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

    render() { 
        return ( 
            <div id="welcomeChatroom">
                {this.props.hideWelcomeChatroom?
                    <div onClick={() => this.props.hideWelcomeChatroom()} className="welcomeChatroom welcomeChatroom-main-box modal">
                        <section onClick={this.modalClick} className="modal-main d-flex flex-column">
                            <div className="welcomeChatroom-exitImg">
                                <img onClick={() => this.props.hideWelcomeChatroom()} src={exitImg} />
                            </div>
                            <div className="welcomeChatroom-elements">
                                <div className="d-flex h-100 align-items-center flex-column">
                                    <div className="welcomeChatroom-lable">
                                        <label>Welcome to the chatroom</label>
                                    </div>
                                    <div className="welcomeChatroom-text">
                                        <p>
                                            Ask and answer questions then enjoy!
                                        </p>
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
 
export default welcomeChatroom;