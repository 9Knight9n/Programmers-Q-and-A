import React, { Component } from 'react';
import './CSS/messaeBox.css';
// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageBox } from 'react-chat-elements';
// MessageBox component
import { MessageBox } from 'react-chat-elements/native';


class MessageBox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        
                <MessageBox
                position={'left'}
                type={'photo'}
                text={'react.svg'}
                data={{
                    uri: 'https://facebook.github.io/react/img/logo.svg',
                    status: {
                        click: false,
                        loading: 0,
                    }
                }}/>

            </React.Fragment>
            
         );
    }
}
 
export default MessageBox;