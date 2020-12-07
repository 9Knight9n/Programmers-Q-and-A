import React, { Component } from 'react';
import './CSS/profileUsers.css';


class ProfileUsers extends Component {
    state = {  }
    render() { 
        return ( 

            <div class="main-container">
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
                        
                        <div class="donut-chart">
                            
                            <div id="porcion1" class="recorte"><div class="quesito ios" data-rel="21"></div></div>
                            <div id="porcion2" class="recorte"><div class="quesito mac" data-rel="39"></div></div>
                            <div id="porcion3" class="recorte"><div class="quesito win" data-rel="31"></div></div>
                            <div id="porcionFin" class="recorte"><div class="quesito linux" data-rel="9"></div></div>
                               
                            <p class="center-date">JUNE<br/><span class="scnd-font-color">2013</span></p> 
                        </div>
                        <ul class="os-percentages horizontal-list">
                            <li>
                                <p class="ios os scnd-font-color">HTMK</p>
                                <p class="os-percentage">21<sup>%</sup></p>
                            </li>
                            <li>
                                <p class="mac os scnd-font-color">PYTHON</p>
                                <p class="os-percentage">48<sup>%</sup></p>
                            </li>
                            <li>
                                <p class="linux os scnd-font-color">ANDROID</p>
                                <p class="os-percentage">9<sup>%</sup></p>
                            </li>
                            <li>
                                <p class="win os scnd-font-color">JAVA</p>
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
                            
                        </div>
                        <ul class="profile-options horizontal-list">
                            <li><a class="comments" href="#40"><p><span class="icon fontawesome-comment-alt scnd-font-color"></span>23</p></a></li>
                            <li><a class="views" href="#41"><p><span class="icon fontawesome-eye-open scnd-font-color"></span>841</p></a></li>
                            <li><a class="likes" href="#42"><p><span class="icon fontawesome-heart-empty scnd-font-color"></span>49</p></a></li>
                        </ul>
                    </div>
                   
                    <div class="line-chart-block block clear"> 
                        <div class="line-chart">
                        
                            <div class='grafico'>
                               <ul class='eje-y'>
                                 <li data-ejeY='30'></li>
                                 <li data-ejeY='20'></li>
                                 <li data-ejeY='10'></li>
                                 <li data-ejeY='0'></li>
                               </ul>
                               <ul class='eje-x'>
                                 <li>Apr</li>
                                 <li>May</li>
                                 <li>Jun</li>
                               </ul>
                                 <span data-valor='25'>
                                   <span data-valor='8'>
                                     <span data-valor='13'>
                                       <span data-valor='5'>   
                                         <span data-valor='23'>   
                                         <span data-valor='12'>
                                             <span data-valor='15'>
                                             </span></span></span></span></span></span></span>
                            </div>
                        </div>
                        <ul class="time-lenght horizontal-list">
                            
                            <li><a class="time-lenght-btn" href="#14">Week</a></li>
                            <li><a class="time-lenght-btn" href="#15">Month</a></li>
                            <li><a class="time-lenght-btn" href="#16">Year</a></li>
                        </ul>
                    </div>
                    <div class="weather block clear"> 
                        <h2 class="titular"><span class="icon entypo-location"></span><strong>CLUJ-NAPOCA</strong>/RO</h2>
                        <div class="current-day">
                            <p class="current-day-date">FRI 29/06</p>
                            <p class="current-day-temperature">24º<span class="icon-cloudy"></span></p>
                        </div>
                    </div>
                </div>


                    <link href="http://getbootstrap.com/examples/jumbotron-narrow/jumbotron-narrow.css" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"/>
                    <div class="container bootstrap snippets bootdey">

                        <div class="header">
                            <h3 class="text-muted prj-name">
                                
                            </h3>
                        </div>


                        <div class="jumbotron list-content">
                            <ul class="list-group">
                            <li href="#" class="list-group-item title">
                                Your friend zone
                            </li>
                            <li href="#" class="list-group-item text-left">
                                <img class="img-thumbnail" src="https://bootdey.com/img/Content/User_for_snippets.png"/>
                                <label class="name">
                                    Juan guillermo cuadrado<br/>
                                </label>
                                <label class="pull-right">
                                    <a  class="btn btn-success btn-xs glyphicon glyphicon-ok" href="#" title="View"></a>
                                    <a  class="btn btn-danger  btn-xs glyphicon glyphicon-trash" href="#" title="Delete"></a>
                                    <a  class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment" href="#" title="Send message"></a>
                                </label>
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name">
                                jo aderestand (10)
                                </label>
                                <label class="pull-right">
                                    <a  class="btn btn-success btn-xs glyphicon glyphicon-ok" href="#" title="View"></a>
                                    <a  class="btn btn-danger  btn-xs glyphicon glyphicon-trash" href="#" title="Delete"></a>
                                    <a  class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment" href="#" title="Send message"></a>
                                </label>
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name">
                                Sara Bencallin (10)
                                </label>
                                <label class="pull-right">
                                    <a  class="btn btn-success btn-xs glyphicon glyphicon-ok" href="#" title="View"></a>
                                    <a  class="btn btn-danger  btn-xs glyphicon glyphicon-trash" href="#" title="Delete"></a>
                                    <a  class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment" href="#" title="Send message"></a>
                                </label>
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name">
                                Emili jonson 
                                </label>
                                <label class="pull-right">
                                    <a  class="btn btn-success btn-xs glyphicon glyphicon-ok" href="#" title="View"></a>
                                    <a  class="btn btn-danger  btn-xs glyphicon glyphicon-trash" href="#" title="Delete"></a>
                                    <a  class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment" href="#" title="Send message"></a>
                                </label>
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_1.jpg"/>
                                <label class="name">
                                Amorina lasco(10)
                                </label>
                                <label class="pull-right">
                                    <a  class="btn btn-success btn-xs glyphicon glyphicon-ok" href="#" title="View"></a>
                                    <a  class="btn btn-danger  btn-xs glyphicon glyphicon-trash" href="#" title="Delete"></a>
                                    <a  class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment" href="#" title="Send message"></a>
                                </label>
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left">
                                <img class="img-thumbnail"  src="https://bootdey.com/img/Content/user_2.jpg"/>
                                <label class="name">
                                    Weide Wiliams
                                </label>
                                <label class="pull-right">
                                    <a  class="btn btn-success btn-xs glyphicon glyphicon-ok" href="#" title="View"></a>
                                    <a  class="btn btn-danger  btn-xs glyphicon glyphicon-trash" href="#" title="Delete"></a>
                                    <a  class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment" href="#" title="Send message"></a>
                                </label>
                                <div class="break"></div>
                            </li>
                            <li href="#" class="list-group-item text-left">
                                <a class="btn btn-block btn-primary">
                                    <i class="glyphicon glyphicon-refresh"></i>
                                    Load more...
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>              

            </div>

         );
    }
}
 
export default ProfileUsers;