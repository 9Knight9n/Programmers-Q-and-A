import React, { Component } from 'react';
import './CSS/profileOne.css';
import { isExpired } from "react-jwt";
import {renewToken} from './token';
import Cookies from 'js-cookie';
import axios from 'axios';


class ProfileOne extends Component {


    constructor(props) {
        super(props);
        this.state = {
            usernameError:false,
            emailError:false,
            succeed:false,
            firstName: "",
            lastName:"",
            username:"",
            emailProfile:""

        };
    
        this.loadData = this.loadData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = (e) => { 
        let target=e.target;
        let name = target.name;
        let value = target.value
        this.setState({
            [name]:value
        });
        }


    componentDidMount()
    {
        
        console.log("mounted")
        this.loadData()

    }


    async loadData()
    {
        let token = Cookies.get("access")
         if(isExpired(Cookies.get("access")))
        {
            console.log("renewing")
            token=await renewToken()

        }
        console.log("fetching data")
        token = "Bearer "+token;
        console.log(token)
        const form = new FormData()
        form.set('id', Cookies.get("id"))
        const response =
        await axios.post('http://127.0.0.1:8000/api/showpersonalinfo/', form, {
        headers: { 'Content-Type': 'multipart/form-data',
                    'Authorization': token
        },
        })
        console.log(response)
        this.setState({firstName:response.data.first_name,lastName:response.data.last_name,username:response.data.username,emailProfile:response.data.email})

    }



        async handleSubmit(){
            let token = Cookies.get("access")
            if(isExpired(Cookies.get("access")))
            {
                console.log("renewing")
                token=await renewToken()
            }
            console.log("fetching data")
            token = "Bearer "+token;
            console.log(token)
            const form = new FormData()
            form.set('id', Cookies.get("id"))
            form.set('first_name', this.state.firstName)
            form.set('last_name', this.state.lastName)
            form.set('username', this.state.username)
            form.set('email', this.state.emailProfile)
            const response =
            await axios.post('http://127.0.0.1:8000/api/getpersonalinfo/', form, {
            headers: { 'Content-Type': 'multipart/form-data',
                        'Authorization': token
            },
            })
            console.log(response)
            if(response.data.message)
            {
                if(response.data.message==="This username already exist")
                {
                    this.setState({emailError:false})
                    this.setState({usernameError:true})
                    this.setState({succeed:false})
                }
                else if(response.data.message==="This email already exist")
                {
                    this.setState({emailError:true})
                    this.setState({usernameError:false})
                    this.setState({succeed:false})
                }
            }
            else{
                this.setState({emailError:false})
                this.setState({usernameError:false})
                this.setState({succeed:true})
            }

        }

    render() { 
        return ( 
            <React.Fragment>
        

                    <div class="parisa-css content-form1 d-flex justify-content-center align-items-center">
                    
                        <div className="INPUT-FORM1"> 
                            <p>First Name :</p>
                            <input name="firstName" value={this.state.firstName}  onChange={this.handleChange} type="text" className="input p-2" placeholder="Enter First name"/><br></br>
                            <p>Last Name :</p>
                            <input name="lastName" value={this.state.lastName}  onChange={this.handleChange} type="text" className="input p-2" placeholder="Enter Last name"/><br></br>
                            <p>Username :</p>
                            <input name="username" value={this.state.username}  onChange={this.handleChange} type="text" className="input p-2" placeholder="Enter Username"/>
                            {this.state.usernameError? <p className="pro-error">Username already exist!</p> : <br/>}
                            <p>Email :</p>
                            <input name="emailProfile" value={this.state.emailProfile}  onChange={this.handleChange} type="text" className="input p-2" placeholder="Enter Email"/>
                            {this.state.emailError? <p className="pro-error">Email already registered!</p> : <br/>}
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                            {this.state.succeed? <p className="pro-success">Saved successfully!</p> : <br/>}
                        </div>
                            
                            
                            
                    </div>
                
                
            </React.Fragment>
            
         );
    }
}
 
export default ProfileOne;