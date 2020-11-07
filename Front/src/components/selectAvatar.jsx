import React, { Component } from 'react';
import './CSS/selectAvatar.css';
import Avatar from 'react-avatar-edit'

class SelectAvatar extends Component {

    constructor(props) {
        super(props)
        this.state = {
          preview: null,
          src : this.props.src,
          showSelect:false
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.hover = this.hover.bind(this)
    }
    onClose() {
        this.setState({preview: null})
    }
      
    onCrop(preview) {
        this.setState({preview})
    }

    hover(isHover){
        this.setState({showSelect:isHover})
    }



    render() { 
        return ( 
            <div
                style={{ 
                    width:this.props.side+"vh",
                    height:this.props.side+"vh",
            }}>
                <div className="d-flex justify-content-center align-items-center" onMouseEnter={() =>this.hover(true)}
                    onMouseLeave={() => this.hover(false)}
                    id="preview" 
                    style={{
                        backgroundImage:"url(" +  this.state.src  + ")",
                    }}>

                    {this.state.showSelect ? 
                        <button 
                        onMouseEnter={() =>this.hover(true)}
                         className="select-btn">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="mr-2 bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                            Change picture
                        </button>
                    :""}
                    
                        {/* <Avatar
        width={450}
        height={350}
        onCrop={this.onCrop}
        onClose={this.onClose}
        src={this.state.src}
    />
                        <img src={this.state.preview} alt="Preview" /> */}

                </div>
                

                    
            </div>
                


        );
    }
}
 
export default SelectAvatar;