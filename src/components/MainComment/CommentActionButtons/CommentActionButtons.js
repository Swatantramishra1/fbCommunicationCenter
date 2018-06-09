import React from 'react';
import timeSince from '../../../commonFunction'
class CommentActionButtons extends React.Component {
constructor(props)
{
	super(props)
}
	render() {
		return(
			<div className="flex comment-action-buttons">
			  <button id="like" className="btn">Like</button>
			  <button id="reply" className="btn">Reply</button>
			  <button className="btn comment-likes-count">&#x1F44D; 0</button>
			  <span className="posted-at">{timeSince(this.props.data.createdAt)}</span>
			</div>
		)
	}
}

export default CommentActionButtons;