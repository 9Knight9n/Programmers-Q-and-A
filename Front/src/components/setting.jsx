import React, { Component } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './CSS/leftMenu.css';
import './CSS/setting.css';


class Setting extends Component {
    state = {  }

    func(itemId){
        console.log(itemId);
    }

    render() { 
        return (  
          <div className="setting-Menu d-flex align-items-start flex-column">

            <p className="h1 mt-2 ml-4">Setting</p>

            <div className="nav nav-pills">


              <a className="nav-link active"
              href="#" >
                  <div className="d-flex flex-row dropdown-btn">
                      <div className="d-flex align-items-center pr-5">My Account</div>
                  </div>  
              </a>
              <div class="ml-4 dropdown-container d-flex flex-column">
                <a className="w-100 nav-link" href="#">Link 1</a>
                <a className="w-100 nav-link" href="#">Link 2</a>
                <a className="w-100 nav-link" href="#">Link 3</a>
              </div>
              <a className="nav-link "
              href="#" >
                  <div className="d-flex flex-row ">
                      <div className="d-flex align-items-center pr-5">Setting option 2</div>
                  </div>
              </a>
              <a className="nav-link "
              href="#" >
                  <div className="d-flex flex-row ">
                      <div className="d-flex align-items-center pr-5">Setting option 3</div>
                  </div>
              </a>
            </div>


            <div className="mt-auto w-100">
              <button className="w-100 pr-3 d-flex align-items-center justify-content-center btn btn-primary">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="mr-1 bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>Back
              </button>
            </div>
            
          </div>
        );
    }
}
 
export default Setting;