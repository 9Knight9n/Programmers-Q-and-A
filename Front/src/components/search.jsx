import React, { Component } from 'react';
import './CSS/search.css';


class Search extends Component {
    state = {
        focused:true,
        panelOpened:false,
        searchInput:null,
        result:true,
    }


    openPanel=()=>{
        this.setState({focused:!this.state.focused})
        console.log(this.state.searchInput)
    }

    
    render() { 
        return (  
            <React.Fragment>

                <div id='search' className="d-flex flex-row">
                    <div id='bar' className={"ml-auto mr-4 d-flex flex-row-reverse".concat(this.state.focused?" active ":"")}>
                        
                        <button onClick={this.openPanel} className=" rounded-circle d-flex flex-row search-button">
                            <svg width="30px" height="30px" viewBox="0 0 16 16" className="text-white bi bi-search align-self-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </button>
                        <input onChange={event => this.setState({searchInput:event.target.value})}
                            className="mr-sm-2 form-control" placeholder="Search" />
                    </div>

                    <div id='panel' className={"mt-5 mr-2 ".concat(this.state.result?" active":"")}>
                        <div className={"search-result".concat(this.state.result?" ":" display-none")}>
                            
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>

        );
    }
}
 
export default Search;