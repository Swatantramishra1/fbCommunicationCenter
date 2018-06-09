import React from 'react';
import CommentDetails from './CommentDetails/CommentDetails';
import CommentActionButtons from './CommentActionButtons/CommentActionButtons';
import ReplyToComments from './ReplyToComment/ReplyToComment';

class MainComment extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {


		try {
			const html = this.props.data.map((data =>
				<div className="flex">

					<img className="commented-by" src="http://via.placeholder.com/36x36" alt="" />
					<div className="flex comments">

						<CommentDetails data={data} />

						<CommentActionButtons data={data} />
					</div>
				</div>
			))

			return (
				<div className="flex main-comment-container">
					{html}
				</div>
			)
		}
		catch (e) {
			return ('')
		}


	}
}

export default MainComment;