import React from 'react';
class AddNewPosts extends React.Component {

	constructor(props) {
		super(props)

	}
	render() {
		return (
            <div className="newPostFormContainer">
                <h3>Add new Post</h3>
                <form className="newPostForm" onSubmit={(e) => this.props.onClick(e)}>
                    <input type="text" name="newPostUser" placeholder="Enter Name" id=""/>
                    <textarea name="newPostContent" rows="5" placeholder="Write something here..."></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
            
		)
	}

}

export default AddNewPosts;