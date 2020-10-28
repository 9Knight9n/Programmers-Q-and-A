import React, { Component } from 'react';
import './CSS/navbar.css';

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
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </button>
                </form>
            </nav>
        );
    }
}
 
export default Navbar;