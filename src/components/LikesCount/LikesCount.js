import React from 'react';

class LikesCount extends React.Component {
	render() {
		return(
			<div className="flex likes-count">
        <i class="icon"></i>
        <span className="count-number">0 People </span>
        <p>&nbsp;like this.</p>
      </div>
		)
	}
}

export default LikesCount;