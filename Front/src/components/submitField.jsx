import React, { Component } from 'react';
import './CSS/submitField.css';

class SubmitField extends Component {
    state = {
        isClicked:this.props.isClicked
    }

    clicked = (QOrR) =>{
        this.props.handleClick(QOrR);
        let isClicked = !this.state.isClicked;
        this.setState({isClicked:isClicked})
    }
    render() { 
        return ( 
            <div className="d-flex flex-row justify-content-center mt-2">
                <textarea cols="92"
                    rows="4"
                    className={"submit-input form-control ".concat(this.state.isClicked ? "submit-input-active":"")}
                    placeholder="type here!"></textarea>
                {/* <input className={"submit-input form-control ".concat(this.state.isClicked ? "submit-input-active":"")} type="search" placeholder="type here!" aria-label="Search"/> */}
                <button 
                    onClick={() => this.clicked(-1)}
                    className={"flex-row justify-content-center align-self-end btn btn-primary submit-button ".concat(this.state.isClicked ? "Submit-button-active":"")}>
                    {this.state.isClicked?"Send":"Submit Question"}
                </button>
            </div>
        );
    }
}
 
export default SubmitField;