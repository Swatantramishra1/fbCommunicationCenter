import React from 'react';
class AddPosts extends React.Component {

	constructor(props) {
		super(props)

	}
	render() {
		return (
			<div className="post-add-container" onClick={this.props.onClick}>
				+
			</div>
		)
	}

}

export default AddPosts;