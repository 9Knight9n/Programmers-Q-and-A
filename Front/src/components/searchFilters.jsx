import React, { Component,useState} from 'react';
import Select from 'react-select';
import './CSS/search.css'


class SearchFilter extends Component {
    state = {
        onlyAnswered:false,
        time:this.props.times[0],
        member:this.props.members[5],
        sort:this.props.sorts[0],
    }

    modalClick = (e) => {
        // e.preventDefault();
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
                        <div className="pr-3 pl-3">
                            <div className="border-bottom">
                                <p className="ml-2 mb-2 h3">Filters</p>
                            </div>
                            <div className="mt-3 d-flex flex-row">
                                <div className="w-50 mt-2">
                                    <input className=""
                                        name="onlyAnsweredCheckBox"
                                        type="checkbox" 
                                        onClick={()=>this.setState({onlyAnswered:!this.state.onlyAnswered})} 
                                        value={this.state.onlyAnswered}/>
                                    <label for="onlyAnsweredCheckBox" className="ml-2">Show answered Questions only.</label>
                                </div>
                                <div className="d-flex flex-row w-50">
                                    <p className="mt-2">sort by :</p>
                                    <div className="black-text w-75 ml-auto">
                                        <Select
                                            onChange={(value)=>this.setState({member:value})}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            defaultValue={this.props.sorts[0]}
                                            isLoading={false}
                                            // isClearable={true}
                                            isRtl={false}
                                            isSearchable={false}
                                            options={this.props.sorts}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row mt-4">
                                <p className="mt-2">Find questions submitted in :</p>
                                <div className="black-text w-50 ml-auto">
                                    <Select
                                        onChange={(value)=>this.setState({time:value})}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={this.props.times[0]}
                                        isLoading={false}
                                        // isClearable={true}
                                        isRtl={false}
                                        isSearchable={false}
                                        options={this.props.times}
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-row mt-4">
                                <p className="mt-2">Find chatrooms having members more than :</p>
                                <div className="black-text w-50 ml-auto">
                                    <Select
                                        onChange={(value)=>this.setState({member:value})}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={this.props.members[0]}
                                        isLoading={false}
                                        // isClearable={true}
                                        isRtl={false}
                                        isSearchable={false}
                                        options={this.props.members}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto mb-2">
                            <div className="d-flex flex-row">
                            <div className="d-flex justify-content-start ml-auto mr-4">
                                <button type="button" className="btn btn-secondary"
                                    onClick={() => this.props.hideFilter(false)}>
                                    Cancel
                                </button>
                            </div>
                                <div className=" d-flex justify-content-end mr-3">
                                    <button onClick={() => this.props.hideFilter(true,
                                        {
                                            onlyAnswered:this.state.onlyAnswered,
                                            time:this.state.time,
                                            member:this.state.member,
                                            sort:this.state.sort,
                                        }
                                    )} 
                                        type="button" className="btn btn-primary">
                                        Apply filters
                                    </button>
                                </div>
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