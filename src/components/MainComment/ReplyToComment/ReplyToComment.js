import React from 'react';

class ReplyToComments extends React.Component {
	render() {
		console.log(this.props.from);
		return(
			<div className="flex replyToComment">
				<img className="profile-photo-small" src="http://via.placeholder.com/24x24" alt="" />
				<form action="" onSubmit={(e) => this.props.handleSubmit(e)}>
					<input type="text" className="user-reply" name="comment" placeholder="Write a reply..." />
				</form>
			</div>
		)
	}
}

export default ReplyToComments;