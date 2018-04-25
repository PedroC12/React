import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
  render() {
    return (
        <div className="background">
          <div className="text">
            <h1>MegaSite</h1>
            <h2>Lorem ipsum 
                dolor sit amet,
                consectetur adipiscing 
                elit.</h2>
          </div>
        </div>
    );
  }
}

export default Banner;