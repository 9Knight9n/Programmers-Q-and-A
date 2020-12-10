import React, { Component } from 'react';
import './CSS/navbar.css';
import Search from './search';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-dark bg-light justify-content-between">
                <a className="navbar-brand">404!</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ml-4 pl-3 pr-3">
                        <a className="nav-link " href="#">Q&A<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ml-4 pl-3 pr-3">
                        <a className="nav-link" href="#">Discussion</a>
                    </li>
                    <li className="nav-item ml-4 pl-3 pr-3 dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                </ul>
                <Search></Search>
            </nav>
        );
    }
}
 
export default Navbar;