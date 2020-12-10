import React, { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Link, Route } from 'react-router-dom';
import './CSS/search.css';
import QuestionChatbox from './questionChatbox';

class SearchResultPage extends Component {
    state = {
        selectedTab:1,
        searchInput:this.props.match.params.searchPhrase,
        chatrooms:[
            {
                label:"chatroom 1",
                id:1
            },
            {
                label:"chatroom 2",
                id:2
            },
            {
                label:"chatroom 3",
                id:3
            },
            {
                label:"chatroom 4",
                id:4
            },
        ],
        questions:[]
    }

    componentDidMount(){


        document.getElementById("searchChatroomTab").click();
    }

    changeTab=(tab)=>{
        this.setState({selectedTab:tab})
    }

    render() { 
        return (
            <React.Fragment>
                <Link id="searchChatroomTab" 
                    to={"/search/chatroom/"+this.state.searchInput}/>
                <div className="w-100 h-100">
                    <div id="search-result" className="h-100 w-100 d-flex flex-column">
                        <div id="header" className="pt-3 pl-3 pr-3 d-flex flex-row w-100">
                            <Link onClick={()=>this.changeTab(1)} 
                                className={"nav-link w-25 d-flex".concat(this.state.selectedTab===1?" active":"")}
                                to={"/search/chatroom/"+this.state.searchInput}>
                                <p style={{width:"fit-content"}} className="ml-auto mr-auto mt-auto mb-auto">
                                    Chatroom
                                </p>
                            </Link>
                            <Link onClick={()=>this.changeTab(2)} 
                                className={"nav-link w-25 d-flex".concat(this.state.selectedTab===2?" active":"")}
                                to={"/search/questions/"+this.state.searchInput}>
                                <p style={{width:"fit-content"}} className="ml-auto mr-auto mt-auto mb-auto">
                                    Questions
                                </p>
                            </Link>
                            <button className='mt-2 mb-2 ml-auto mr-2 p-1 d-flex flex-row rounded'>
                                Filters 
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-filter" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>
                        </div>
                        <div id="body" className="ml-3 mr-3 mb-3 h-100 rounded-bottom">
                            <div className='m-5'>
                                <Switch>
                                    <Route path="/search/chatroom/">
                                        <p>Found Chatrooms:</p>
                                        {this.state.chatrooms.map(chatroom => 
                                        <Link key={chatroom.id} 
                                            className={"nav-link m-4".concat(this.state.activeChatroom===chatroom.id? "active":"")} 
                                            onClick={()=> this.handleTabClick(chatroom.id)} 
                                            to={"/cr"+chatroom.id} >
                                            <div className="d-flex flex-row ">
                                                <img className="d-flex align-items-center mr-3" id="chatroom-img" src={chatroom.Base64} />
                                                <div className="d-flex align-items-center pr-5">{chatroom.label}</div>
                                            </div>
                                        </Link>)}
                                    </Route>
                                    <Route path="/search/questions/">
                                        <p>Found Questions:</p>
                                        {this.state.questions.map(question =>(
                                            <QuestionChatbox
                                                // loadQuestions={this.loadQuestions}
                                                sameProblemCount={question.commonQuestion}
                                                sameProblem={question.sameProblem}
                                                senderId={question.userid}
                                                senderUsername={question.user}
                                                context={question.text}
                                                sentDate={question.time}
                                                showMoreButton={true}
                                                isAnswered={question.isAnswered}
                                                Qid={question.id}
                                                Cid={this.state.ChatroomID}/>
                                        ))}
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default SearchResultPage;