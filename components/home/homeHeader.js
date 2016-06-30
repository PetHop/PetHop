import React from 'react';

var HomeHeader = React.createClass({
  render: function () {
    return (

        <div className="slider">
          <ul className="slides">
            <li>
              <img src="https://static.pexels.com/photos/57627/pexels-photo-57627-large.jpeg"/>
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://static.pexels.com/photos/96428/pexels-photo-96428.jpeg"/>
              <div className="caption center-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://static.pexels.com/photos/55609/pexels-photo-55609-large.jpeg"/>
              <div className="caption center-align top">
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
