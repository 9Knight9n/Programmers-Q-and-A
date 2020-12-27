import React from 'react'
import { MessageBox as MB } from 'react-chat-elements'
import { Avatar } from 'react-chat-elements'
import { getUserAvatar } from './util';
// CE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import './CSS/messageBox.css';


class MessageBox extends React.Component {
	state={
		userid:this.props.userid,
		avatarSrc:this.props.avatarSrc,
		title:this.props.title,
		text:this.props.text,
		dateString:this.props.dateString,
		isReply:this.props.isReply,
		titleRep:this.props.titleRep,
		messageRep:this.props.messageRep
	}

	async componentDidMount(){
		await getUserAvatar(this.state.userid);
        this.setState({avatarSrc:sessionStorage.getItem(this.state.userid+":avatar")})
	}

	render() {
		return (
		
		<React.Fragment>
			
			<div className='d-flex flex-row w-100'>
				<div className=''>
					<Avatar
						src={this.state.avatarSrc}
						alt={'logo'}
						size="large"
						type="circle flexible"
					/>
				</div>

				<div className='w-100'>
					<MB
						id={this.state.id}
						position={'left'}
						type={'text'}
						title={this.state.title}
						titleColor='#8717ae'
						text={this.state.text}
						dateString={this.state.dateString}
						onReplyClick={()=>console.log('reply')}
						// onClick
						onReplyMessageClick={() => console.log('reply clicked!')}
						replyButton={true}
						reply={this.state.isReply?{
							title:this.state.titleRep,
							titleColor: '#8717ae',
							message:this.state.messageRep,
						}:false}
						
						// reply
					/>
				</div>

			</div>
	
		</React.Fragment>
		);
	}
}
export default MessageBox;

