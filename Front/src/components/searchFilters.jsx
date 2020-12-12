import React, { Component } from 'react';

class SearchFilter extends Component {
    state = {  }

    modalClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    
    render() { 
        return (
            <div id="search-filter">
                {this.props.showFilter?
                <div onClick={() => this.props.hideFilter()} className="modal">
                    <section onClick={this.modalClick} className="modal-main d-flex flex-column">
                        <button 
                            type="button" class="btn-lg rounded-circle ml-auto mr-2 clean-button"
                            onClick={() => this.props.hideFilter(false)} 
                            style={{outline:"none",height: "30px",width: "30px"}}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <div className="modal-body">
                        
                        </div>
                        <div className="row mb-2">
                            <div className="d-flex justify-content-start ml-auto mr-4">
                                <button type="button" className="btn btn-secondary"
                                    onClick={() => this.props.hideFilter(false)}>
                                    Cancel
                                </button>
                            </div>
                                <div className=" d-flex justify-content-end mr-3">
                                    <button onClick={() => this.props.hideFilter(true)} 
                                        type="button" className="btn btn-primary">
                                        Apply filters
                                    </button>
                                </div>
                            </div>
                    </section>
                </div>
                :""}
                
            </div>
        );
    }
}
 
export default SearchFilter;