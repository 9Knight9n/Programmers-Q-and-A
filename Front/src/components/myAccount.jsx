import React, { Component } from 'react';
import './CSS/myAccount.css';

class MyAccount extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </nav>
            </React.Fragment>
        );
    }
}
 
export default MyAccount;