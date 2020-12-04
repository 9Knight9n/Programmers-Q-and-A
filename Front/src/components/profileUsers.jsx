import React, { Component } from 'react';
import './CSS/profileUsers.css';


class ProfileUsers extends Component {
    state = {  }
    render() { 
        return ( 
          

          <div class="main-container">

            <header class="block">
                <ul class="header-menu horizontal-list">
                    <li>
                        <a class="header-menu-tab" href="#1"><span class="icon entypo-cog scnd-font-color"></span>Settings</a>
                    </li>
                    <li>
                        <a class="header-menu-tab" href="#2"><span class="icon fontawesome-user scnd-font-color"></span>Account</a>
                    </li>
                    <li>
                        <a class="header-menu-tab" href="#3"><span class="icon fontawesome-envelope scnd-font-color"></span>Messages</a>
                        <a class="header-menu-number" href="#4">5</a>
                    </li>
                    <li>
                        <a class="header-menu-tab" href="#5"><span class="icon fontawesome-star-empty scnd-font-color"></span>Favorites</a>
                    </li>
                </ul>
                <div class="profile-menu">
                    <p>Me <a href="#26"><span class="entypo-down-open scnd-font-color"></span></a></p>
                    <div class="profile-picture small-profile-picture">
                        <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/>
                    </div>
                </div>
            </header>
          
            <div class="left-container container">
                <div class="menu-box block"> 
                    <h2 class="titular">MENU BOX</h2>
                    <ul class="menu-box-menu">
                        <li>
                            <a class="menu-box-tab" href="#6"><span class="icon fontawesome-envelope scnd-font-color"></span>Messages<div class="menu-box-number">24</div></a>                            
                        </li>
                        <li>
                            <a class="menu-box-tab" href="#8"><span class="icon entypo-paper-plane scnd-font-color"></span>Invites<div class="menu-box-number">3</div></a>                            
                        </li>
                        <li>
                            <a class="menu-box-tab" href="#10"><span class="icon entypo-calendar scnd-font-color"></span>Events<div class="menu-box-number">5</div></a>                            
                        </li>
                        <li>
                            <a class="menu-box-tab" href="#12"><span class="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                        </li>
                        <li>
                            <a class="menu-box-tab" href="#13"><sapn class="icon entypo-chart-line scnd-font-color"></sapn>Statistics</a>
                        </li>                        
                    </ul>
                </div>
                <div class="donut-chart-block block"> 
                    <h2 class="titular">OS AUDIENCE STATS</h2>
                    <div class="donut-chart">
                       
                        <div id="porcion1" class="recorte"><div class="quesito ios" data-rel="21"></div></div>
                        <div id="porcion2" class="recorte"><div class="quesito mac" data-rel="39"></div></div>
                        <div id="porcion3" class="recorte"><div class="quesito win" data-rel="31"></div></div>
                        <div id="porcionFin" class="recorte"><div class="quesito linux" data-rel="9"></div></div>
                           
                        <p class="center-date">JUNE<br/><span class="scnd-font-color">2013</span></p> 
                    </div>
                    <ul class="os-percentages horizontal-list">
                        <li>
                            <p class="ios os scnd-font-color">iOS</p>
                            <p class="os-percentage">21<sup>%</sup></p>
                        </li>
                        <li>
                            <p class="mac os scnd-font-color">Mac</p>
                            <p class="os-percentage">48<sup>%</sup></p>
                        </li>
                        <li>
                            <p class="linux os scnd-font-color">Linux</p>
                            <p class="os-percentage">9<sup>%</sup></p>
                        </li>
                        <li>
                            <p class="win os scnd-font-color">Win</p>
                            <p class="os-percentage">32<sup>%</sup></p>
                        </li>
                    </ul>
                </div>
                
                

            </div>

            
            <div class="middle-container container">
                <div class="profile block"> 
                    <a class="add-button" href="#28"><span class="icon entypo-plus scnd-font-color"></span></a>
                    <div class="profile-picture big-profile-picture clear">
                        <img width="150px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/>
                    </div>
                    <h1 class="user-name">Anne Hathaway</h1>
                    <div class="profile-description">
                        <p class="scnd-font-color">Lorem ipsum dolor sit amet consectetuer adipiscing</p>
                    </div>
                    <ul class="profile-options horizontal-list">
                        <li><a class="comments" href="#40"><p><span class="icon fontawesome-comment-alt scnd-font-color"></span>23</p></a></li>
                        <li><a class="views" href="#41"><p><span class="icon fontawesome-eye-open scnd-font-color"></span>841</p></a></li>
                        <li><a class="likes" href="#42"><p><span class="icon fontawesome-heart-empty scnd-font-color"></span>49</p></a></li>
                    </ul>
                </div>
               
               
               
            </div>

            <div class="right-container container">
                <div class="join-newsletter block"> 
                    <h2 class="titular">JOIN THE NEWSLETTER</h2>
                    <div class="input-container">
                        <input type="text" placeholder="yourname@gmail.com" class="email text-input"/>
                        <div class="input-icon envelope-icon-newsletter"><span class="fontawesome-envelope scnd-font-color"></span></div>
                    </div>
                    <a class="subscribe button" href="#21">SUBSCRIBE</a>
                </div>
                <div class="account block"> 
                    <h2 class="titular">SIGN IN TO YOUR ACCOUNT</h2>
                    <div class="input-container">
                        <input type="text" placeholder="yourname@gmail.com" class="email text-input"/>
                        <div class="input-icon envelope-icon-acount"><span class="fontawesome-envelope scnd-font-color"></span></div>
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="Password" class="password text-input"/>
                        <div class="input-icon password-icon"><span class="fontawesome-lock scnd-font-color"></span></div>
                  </div>
                    <a class="sign-in button" href="#22">SIGN IN</a>
                    <p class="scnd-font-color">Forgot Password?</p>
                    <a class="fb-sign-in" href="58">
                        <p><span class="fb-border"><span class="icon zocial-facebook"></span></span>Sign in with Facebook</p>
                    </a>
                </div>
                <div class="loading block"> 
                    <div class="progress-bar downloading"></div>
                    <p><span class="icon fontawesome-cloud-download scnd-font-color"></span>Downloading...</p>
                    <p class="percentage">81<sup>%</sup></p>
                    <div class="progress-bar uploading"></div>
                    <p><span class="icon fontawesome-cloud-upload scnd-font-color"></span>Uploading...</p>
                    <p class="percentage">43<sup>%</sup></p>
                </div>
                <div class="calendar-day block">
                    <div class="arrow-btn-container">
                        <a class="arrow-btn left" href="#200"><span class="icon fontawesome-angle-left"></span></a>
                        <h2 class="titular">WEDNESDAY</h2>
                        <a class="arrow-btn right" href="#201"><span class="icon fontawesome-angle-right"></span></a>
                    </div>
                        <p class="the-day">26</p>
                        <a class="add-event button" href="#27">ADD EVENT</a>
                </div>
                <div class="calendar-month block"> 
                    <div class="arrow-btn-container">
                        <a class="arrow-btn left" href="#202"><span class="icon fontawesome-angle-left"></span></a>
                        <h2 class="titular">APRIL 2013</h2>
                        <a class="arrow-btn right" href="#203"><span class="icon fontawesome-angle-right"></span></a>
                    </div>
                    <table class="calendar">
                        <thead class="days-week">
                            <tr>
                                <th>S</th>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>R</th>
                                <th>F</th>
                                <th>S</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a class="scnd-font-color" href="#100">1</a></td>
                            </tr>
                            <tr>
                                <td><a class="scnd-font-color" href="#101">2</a></td>
                                <td><a class="scnd-font-color" href="#102">3</a></td>
                                <td><a class="scnd-font-color" href="#103">4</a></td>
                                <td><a class="scnd-font-color" href="#104">5</a></td>
                                <td><a class="scnd-font-color" href="#105">6</a></td>
                                <td><a class="scnd-font-color" href="#106">7</a></td>
                                <td><a class="scnd-font-color" href="#107">8</a></td>
                            </tr>
                            <tr>
                                <td><a class="scnd-font-color" href="#108">9</a></td>
                                <td><a class="scnd-font-color" href="#109">10</a></td>
                                <td><a class="scnd-font-color" href="#110">11</a></td>
                                <td><a class="scnd-font-color" href="#111">12</a></td>
                                <td><a class="scnd-font-color" href="#112">13</a></td>
                                <td><a class="scnd-font-color" href="#113">14</a></td>
                                <td><a class="scnd-font-color" href="#114">15</a></td>
                            </tr>
                            <tr>
                                <td><a class="scnd-font-color" href="#115">16</a></td>
                                <td><a class="scnd-font-color" href="#116">17</a></td>
                                <td><a class="scnd-font-color" href="#117">18</a></td>
                                <td><a class="scnd-font-color" href="#118">19</a></td>
                                <td><a class="scnd-font-color" href="#119">20</a></td>
                                <td><a class="scnd-font-color" href="#120">21</a></td>
                                <td><a class="scnd-font-color" href="#121">22</a></td>
                            </tr>
                            <tr>
                                <td><a class="scnd-font-color" href="#122">23</a></td>
                                <td><a class="scnd-font-color" href="#123">24</a></td>
                                <td><a class="scnd-font-color" href="#124">25</a></td>
                                <td><a class="today" href="#125">26</a></td>
                                <td><a href="#126">27</a></td>
                                <td><a href="#127">28</a></td>
                                <td><a href="#128">29</a></td>
                            </tr>
                            <tr>
                                <td><a href="#129">30</a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div> 
        </div>


        
            
         );
    }
}
 
export default ProfileUsers;