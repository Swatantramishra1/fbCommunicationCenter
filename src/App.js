import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';
import axios from 'axios';
import PostTitle from './components/PostTitle/PostTitle';
import PostContent from './components/PostContent/PostContent';
import ActionButtons from './components/ActionButtons/ActionButtons';
import LikesCount from './components/LikesCount/LikesCount';
import MainComment from './components/MainComment/MainComment';
import URL from './config';
import ReplyToComments from './components/MainComment/ReplyToComment/ReplyToComment';
import AddPosts from './components/addPosts/addPosts';
import Modal from 'react-responsive-modal';
import AddNewPosts from './components/addNewPost/addNewPosts'
let comment_div;
let comment_data = [];
let temp_state = [];
class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.getMainData());
    this.state = {
      posts: [{
        "id": "",
        "createdAt": '',
        "comments": [],
        "imageUrl": "",
        "profileName": ""
      }],
      comments: [],
      step: [],
      open: false,
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    this.getMainData();
  }
  getMainData() {

    let that = this;
    axios.get(`${URL.url}${URL.endPoints.posts}`)
      .then(function (response) {
        that.setState({
          posts: response.data
        })
        that.callCommentsApi();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  callCommentsApi() {
    let that = this;
    temp_state = [];
    that.setState({ step: [] });
    for (let i of this.state.posts) {
      console.log(i)
      that.getPostsCommnets(i.id)
    }
    that.setState({
      comments: comment_data
    })

  }
  getPostsCommnets(id) {
    let that = this;
    temp_state = [...this.state.posts]
    axios.get(`${URL.url}${URL.endPoints.posts}/${id}/${URL.endPoints.comments}`)
      .then(function (response) {

        temp_state.push(response.data)
        that.setState({ step: temp_state });
        comment_data.push(response.data)
        // document.getElementById(id). = comment_div;
        console.log("gjkj", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getData() {
    this.getMainData();
  }

  postData(e) {
    e.preventDefault();
    let testData = [...this.state.posts];
    let postData = {
      "createdAt": new Date(),
      "text": e.target.newPostContent.value,
      "imageUrl": "http://via.placeholder.com/36x36",
      "profileName": e.target.newPostUser.value,
      comments: []
    }
    axios.post('https://5b1ac18783b6190014ca3afd.mockapi.io/posts', postData)
      .then(function (response) {
        testData.push(postData)
        this.setState({
          posts: testData
        });
        this.onCloseModal();
        this.getMainData();

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  postComment(text, id) {
    axios.post(`${URL.endPoints}${URL.url.posts}/${id}`, {
      "createdAt": new Date(),
      "text": "Do you think that people going through a divorce should be allowed to be on a worship team?",
      "imageUrl": "swatantra.png",
      "profileName": "Swatantra"
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) {

    for (var i = 0; i < arraytosearch.length; i++) {

      if (arraytosearch[i][key] == valuetosearch) {
        return i;
      }
    }
    return null;
  }
  postNewComment(e, id) {
    e.preventDefault();
    let that = this;
    let post = {
      "createdAt": new Date(),
      "text": e.target.comment.value,
      "commented_by": "Purander",
      postId: id,
      userProfileImage: '',
      postedByImage: ''
    }
    var index = this.functiontofindIndexByKeyValue(this.state.posts, "id", id);
    let completeData = this.state.posts[index];
    completeData.comments.push(post)
    this.state.posts[index] = completeData;
    axios.put(`${URL.url}${URL.endPoints.posts}/${id}`, completeData)
      .then(function (response) {
        that.callCommentsApi();

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getCommentData(id, index) {
    try {
      if (id === this.state.step[index][0].postId) {
        return <MainComment data={this.state.step[index]} />
      }
      else {
        return null
      }
    }
    catch (e) {

    }

  }

  render() {

    // let d = this.getMainData();;
    const { open } = this.state;
    const postsData = this.state.posts.map(((data, index) =>
      <div className="post-wrapper">
        <PostTitle data={data} />

        <PostContent data={data} />

        <ActionButtons />

        <LikesCount />
        <MainComment data={data.comments} />

        <ReplyToComments from="post" postId="post_id" data={data} handleSubmit={(e) => this.postNewComment(e, data.id)} />

      </div>
    ))


    return (
      <div className="App">

        <div className="flex post-container">


          {postsData}




          <AddPosts onClick={this.onOpenModal} />
          <Modal open={open} onClose={this.onCloseModal} center>

            <AddNewPosts onClick={(e) => this.postData(e)} />

          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
