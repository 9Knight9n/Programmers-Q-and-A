import React, { Component } from 'react';
import './CSS/myAccount.css';

class MyAccount extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="">
                    <ul class="nav nav-tabs">
                        <div className="avatar-size">
                            Hello
                        </div>
                        <li class="nav-item d-flex align-items-end">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item d-flex align-items-end">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item d-flex align-items-end">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </nav>
                <div className="myAccount-content">
                    hello
                </div>
            </React.Fragment>
        );
    }
}
 
export default MyAccount;