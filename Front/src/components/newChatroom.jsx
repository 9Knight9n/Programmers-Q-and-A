import React, { Component } from 'react';


class NewChatroom extends Component {
    state = {
        
    }

    modalClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    render() { 
        return ( 
            <React.Fragment>
                <div onClick={() => this.props.hideModal()} className={this.props.show ? "modal display-block" : "modal display-none"}>
                    <section onClick={this.modalClick} className="modal-main">
                        <div className="d-flex flex-row justify-content-center mt-2">
                            Hello
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NewChatroom;