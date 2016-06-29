import React from 'react';
import {Slider, Slide} from 'react-materialize';


var HomeHeader = React.createClass({
  render: function () {
    return (

      <div className="slider">
      <ul className="slides">
        <li>
          <img src="./../../views/img/lorempixel.jpg"/>
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="https://static.pexels.com/photos/96938/pexels-photo-96938-large.jpeg"/>
          <div className="caption center-align">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="https://static.pexels.com/photos/36198/pexels-photo-large.jpg"/>
          <div className="caption center-align">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
      </ul>
      </div>

   )
  }
});

export default HomeHeader;
