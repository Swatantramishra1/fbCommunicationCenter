import React from 'react';
import timeSince from '../../commonFunction'

class PostTitle extends React.Component {

	constructor(props) {
		super(props)

	}
	render() {
		return (
			<div className="post-title-container">
				<div className="flex post-title">
					<img className="profile-img" src="http://via.placeholder.com/36x36" alt="Sample" />
					<div className="post-intro">
						<p className="profile-name">{this.props.data.profileName}</p>
						<p className="created-at">{timeSince(this.props.data.createdAt)}</p>
					</div>
				</div>
				<hr />
			</div>
		)
	}

}

export default PostTitle;