import React from 'react';

class PostContent extends React.Component {
	constructor(props)
	{
		super(props);
	}
	render() {
		return(
			<div className="post-content">
        <p className="content">{this.props.data.text}</p>
      </div>
		)
	}
}
export default PostContent;