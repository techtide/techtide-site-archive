import React, { Component } from 'react';
import './App.css';

class Player extends Component {
  render() {
    return (
        <div>
            <iframe className="player" type="text/html" width="640" height="360"
                title="Video Player"
                src={this.props.videoSrc}
                frameborder="0"
            ></iframe>
        </div>
    );
  }
}

export default Player;
