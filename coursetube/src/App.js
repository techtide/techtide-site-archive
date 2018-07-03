import React, { Component } from 'react';
import './App.css';
import Player from './Player';

class App extends Component {
  constructor() {
    super();
    this.state = {
      playingCourse: "Calculus"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/YouTube_social_white_circle_%282017%29.svg/2000px-YouTube_social_white_circle_%282017%29.svg.png" className="App-logo" alt="logo" />
          <h1 className="App-title">CourseTube</h1>
        </header>
        <div id="CurrentCourse"><b>Current Course: </b>{this.state.playingCourse}</div>
        <Player videoSrc="https://www.youtube.com/embed/V4MF2s6MLxY"></Player>
      </div>
    );
  }
}

export default App;
