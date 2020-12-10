import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/search.css';
import {request} from './requests';


class Search extends Component {
    state = {
        focused:false,
        panelOpened:false,
        searchInput:"",
        result:false,
        sugestions:[]
    }


    handelSearch=()=>{
        if(this.state.focused)
        {
            if(this.state.searchInput.length > 2)
            {
                document.getElementById("goToSearchResultPage").click();
                this.setState({searchInput:""});
                this.setState({focused:false,})
            }
                
            else
            {

            }
        }
        else
        {
            this.setState({focused:!this.state.focused})
            // console.log(this.state.searchInput)
        }
        
    }

    handelInputChange=(event)=>{
        let input = event.target.value;
        this.setState({searchInput:input})
        if (input.length >2)
            this.loadSugestions(input);
        else
            this.setState({panelOpened:false})
    }

    loadSugestions= async (input)=>{
        let config ={
            url:"http://127.0.0.1:8000/api/SeggestionChatroomSreach/",
            needToken:true,
            type:"post",
            formKey:[
                "searchText",
            ],
            formValue:[
                input,
            ]
        }
        let data = []
        // console.log("outside 0",data)
        data = await request(config)
        // console.log(await request(config))
        console.log("outside",data)
        if (data)
        {
            this.setState({sugestions:data,
                panelOpened:true})
            console.log("state set")
        }
    }

    
    render() { 
        return (  
            <React.Fragment>
                <Link id="goToSearchResultPage" to={"/search/".concat(this.state.searchInput)}/>
                <div id='search' className="d-flex flex-row">
                    <div id='bar' className={"ml-auto mr-4 d-flex flex-row-reverse".concat(this.state.focused?" active ":"")}>
                        
                        <button onClick={this.handelSearch} className=" rounded-circle d-flex flex-row search-button">
                            <svg width="30px" height="30px" viewBox="0 0 16 16" className="text-white bi bi-search align-self-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </button>
                        <input value={this.state.searchInput} onChange={this.handelInputChange}
                            className="mr-sm-2 form-control" placeholder="Search" />
                    </div>

                    <div id='panel' className={"mt-5 mr-2 ".concat(this.state.panelOpened?" active":"")}>
                        <div className={"search-result".concat(this.state.panelOpened?" ":" display-none")}>
                            {this.state.sugestions.map(sug =>
                            <div id="sugestion" key={sug.chatroom_id} className="m-2 d-flex pl-3">
                                <p className="mt-auto mb-auto">{sug.chatroom_name}</p>
                            </div>    
                            )}
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>

        );
    }
}
 
export default Search;