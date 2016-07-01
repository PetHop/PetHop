import React from 'react';
import slider1 from 'file!./../../views/img/pexels-photo-57627-large.png';
import slider2 from 'file!./../../views/img/pexels-photo-96428-large.png';
import slider3 from 'file!./../../views/img/pexels-photo-55609-large.png';

var HomeHeader = React.createClass({
  render: function () {
    return (

        <div className="slider">
          <ul className="slides">
            <li>
              <img src={ slider1 }/>
              <div className="caption center-align">
                <h3>Tagline 1!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src={ slider2 }/>
              <div className="caption center-align">
                <h3>Tagline 2!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src={ slider3 }/>
              <div className="caption center-align top">
                <h3>Tagline 3!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>

   )
  }
});

export default HomeHeader;
