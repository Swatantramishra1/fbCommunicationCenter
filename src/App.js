import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
    this.state = {
      timestamp: 'no timestamp yet'
    };
  }
  getData() {
    console.log("Data")
    axios.get('https://5b1ac18783b6190014ca3afd.mockapi.io/posts')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 postData()
 {
  axios.post('https://5b1ac18783b6190014ca3afd.mockapi.io/posts', {
    "craetedAt": new Date(),
    "text": "Swatantra",
    "comments": [{name:"ddd"}],
    "imageUrl": "swatantra.png",
    "profileName": "Take Data"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 }

  render() {


    let d = this.getData();
    return (



      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button type="submit" onClick={() => this.postData()}>Post Data</button>
          This is the timer value: {this.state.timestamp}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
