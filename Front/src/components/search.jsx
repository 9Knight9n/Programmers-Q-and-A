import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/search.css';
import {request} from './requests';
import { ToastContainer, toast } from 'react-toastify';



class Search extends Component {
    state = {
        minError:false,
        focused:false,
        panelOpened:false,
        searchInput:"",
        // result:false,
        suggestions:[],
        informed:false,
        activeNav:this.props.activeNav,
    }

    componentDidMount(){
        document.addEventListener("mousedown",this.handleClick,false)
        
        // let textBox = document.getElementById("search-input-field"); 
        // textBox.addEventListener('focusout', (event) => {
        //     // let focusedElement = document.activeElement;
        //     // let search_panel = document.getElementById("search-panel");
        //     // if (focusedElement !==search_panel)
        //         this.setState({focused:false,panelOpened:false})
        //   });

        //   document.getElementById("main-div").click(function() {
        //     console.log("hello");
        //     });
        //     let panel = document.getElementById("panel"); 
        //     panel.click(function(event){
        //         event.stopPropagation();
        //     });

    }

    componentWillUnmount(){
        document.removeEventListener("mousedown",this.handleClick,false)
    }
    
    handleClick=(e)=>{
        if(!this.state.node.contains(e.target))
        {
            this.setState({focused:false,panelOpened:false,searchInput:""})
        }
    }

    componentDidUpdate(preprops){
        if(preprops.activeNav !== this.props.activeNav)
        {
            this.setState({activeNav:this.props.activeNav})
        }
    }


    handelSearch=()=>{
        if(this.state.focused)
        {
            if(this.state.searchInput.length > 2)
            {
                document.getElementById("goToSearchResultPage").click();
                this.setState({searchInput:""});
                this.setState({focused:false,panelOpened:false,suggestions:[],minError:false})
            }   
            else
            {
                this.setState({panelOpened:true,minError:true})
            }
        }
        else
        {
            this.setState({focused:!this.state.focused})
            let input = document.getElementById('search-input-field');
            input.focus();
            input.select();
            // console.log(this.state.searchInput)
        }
        
    }

    handelInputChange=(event)=>{
        let input = event.target.value;
        this.setState({searchInput:input})
        if (input.length >2)
        {
            // toast.dismiss()
            this.setState({panelOpened:true})
            this.loadSuggestions(input);
        }
        else
            this.setState({panelOpened:false,suggestions:[]})
    }

    loadSuggestions= async (input)=>{
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
        // console.log("outside",data)
        if (data)
        {
            this.setState({suggestions:data,})
            console.log("state set")
        }
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handelSearch()
        }
      }

    quickSelect=(id)=>{
        this.setState({searchInput:"",panelOpened:false,focused:false,suggestions:[]})
        this.props.changeChatroom(id)
    }
    
    render() { 
        return (  
            <React.Fragment>
                <div ref={node =>this.state.node = node}>
                <Link id="goToSearchResultPage" to={{pathname:"/search/"+this.state.searchInput,state:{tab:1}}}/>
                <div id='search' className="d-flex flex-row">
                    <div id='bar' className={"ml-auto d-flex flex-row-reverse".concat(this.state.focused?" active ":"")}>
                        <input value={this.state.searchInput} onChange={this.handelInputChange} onKeyDown={this._handleKeyDown}
                            className=" form-control" placeholder="Search" id="search-input-field"
                        />
                    </div>
                    <button onClick={this.handelSearch} className="ml-2 mr-4 mt-auto mb-auto rounded-circle d-flex flex-row transparent-button">
                        <svg width="27px" height="27px" viewBox="0 0 16 16" className=" text-white bi bi-search align-self-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </button>
                    <div id='panel' className={"mt-5 mr-2 ".concat(this.state.panelOpened?" active":"")}>
                        <div id='search-sub-panel1' className={"m-3".concat(this.state.panelOpened?" ":" display-none")}>
                            {this.state.searchInput.length<3?(this.state.minError?<p>Enter at least 3 letters!</p>:""):(this.state.suggestions.length>0?<p>Suggested Chatrooms :</p>:<p>can't suggest any Chatroom</p>)}
                        </div>
                        <div id='search-sub-panel2' className={"search-result".concat(this.state.suggestions.length>0 && this.state.searchInput !== ""?" active":"")}>
                            {
                                this.state.panelOpened?
                                this.state.suggestions.map(sug =>
                                    <Link 
                                        to={"/"+this.state.activeNav+sug.chatroom_id} 
                                        id="suggestion" 
                                        key={sug.chatroom_id} 
                                        className="m-2 d-flex pl-3"
                                        onClick={()=>this.quickSelect(sug.chatroom_id)}>
                                        <p className="mt-auto mb-auto">{sug.chatroom_name}</p>
                                    </Link>    
                                    ):""
                            }
                            
                        </div>
                    </div>
                    
                </div>
                </div>
            </React.Fragment>

        );
    }
}
 
export default Search;