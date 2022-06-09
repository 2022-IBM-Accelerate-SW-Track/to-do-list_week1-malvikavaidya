import React, { Component } from 'react';
import './About.css';
import headshot from "../assets/headshot.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div class="split left">
          <div className="centered">
          <img 
            className="profile_image"
            src ={headshot}
          ></img>
          </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Malvika Vaidya</div>
        <div className="brief_description">
          I like reading, working out, and eating good food!
        </div>
      </div>
    </div>
  </div>
        
        
      </div>
    )
  }
}