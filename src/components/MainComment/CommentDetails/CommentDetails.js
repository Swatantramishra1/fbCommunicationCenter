import React from 'react';

class CommentDetails extends React.Component {
	constructor(props)
	{
		super(props)
	}
	render() {
		return(
			<div className="comment-details">
        <span className="commented-by-name">{this.props.data.commented_by}&nbsp;</span>
        <p className="comment-text"> {this.props.data.text} </p>
    	</div>
		)
	}
}

export default CommentDetails;