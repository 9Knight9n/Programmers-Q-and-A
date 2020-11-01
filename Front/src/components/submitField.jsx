import React, { Component } from 'react';
import './CSS/submitField.css';
import axios from 'axios';
// import Modal from './modal';
// require("react-bootstrap/ModalHeader");

class SubmitField extends Component {
    state = {
        isClicked: this.props.isClicked,

    }

    modalClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    async submitChat() {
        let url = "http://localhost:3004/chats";
        const response = await axios.post(
            url,
            { example: 'data' },
            { headers: { 'Content-Type': 'application/json' } }
        )
        // console.log(response);
        console.log("data found (test): ", response.data);
        console.log(response)
        this.setState({ chats: response.data });
        console.log(this.state.chats)
    }

    render() { 
        return ( 
            <React.Fragment>
                <div onClick={() => this.props.hideModal()} className={this.props.show ? "modal display-block" : "modal display-none"}>
                    <section onClick={this.modalClick} className="modal-main">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.submit === -1 ? "Submitting a Question" : "Submiting a Reply"}</h5>
                            <button type="button" className="close" onClick={() => this.props.hideModal()} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-row justify-content-center mt-2">
                            <textarea cols="92"
                                rows="4"
                                    className={"submit-input form-control submit-input-active"}
                                placeholder="type here!"></textarea>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col-lg-6 d-flex justify-content-start">
                                    <button type="button" className="btn btn-secondary"
                                        onClick={() => this.props.hideModal()}>
                                        Cancle
                            </button>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-end">
                                    <button type="button" className="btn btn-primary">
                                        {this.props.submit === -1 ? "Submit Question" : "Submit Reply"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>

        );
    }
}
 
export default SubmitField;