//Coded by Sajad

import React, { Component } from 'react';
import LeftMenu from './leftMenu';
import './CSS/homepage.css';

class Homepage extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="left-menu-c">
                    <LeftMenu />
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Homepage;