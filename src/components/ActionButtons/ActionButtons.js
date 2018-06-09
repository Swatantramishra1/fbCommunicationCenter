import React from 'react';

class AcionButtons extends React.Component {
	render() {
		return(
			<div className="action-buttons">
        <button id="like" className="btn">Like</button>
        <button id="comment" className="btn">Comment</button>
        <button id="share" className="btn">Share</button>
      </div>
		)
	}
}

export default AcionButtons;