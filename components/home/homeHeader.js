import React from 'react';
import slider1 from 'file!./../../views/img/57627.png';
import slider2 from 'file!./../../views/img/96428.png';
import slider3 from 'file!./../../views/img/55609.png';

var HomeHeader = React.createClass({
  componentDidMount: function(){
    $(document).ready(function () {
        $('.slider').slider({full_width: true});
    });
  },
  render: function () {
    return (

        <div className="slider">
          <ul className="slides">
            <li>
              <img src={ slider1 }/>
              <div className="caption center-align">
                <h3>We All LOVE Our Pets!</h3>
                <h5 className="light grey-text text-lighten-3">There is a community of pet lovers out there that are waiting to give your precious cargo a ride.</h5>
                <a href="#register" className="btn waves-effect waves-light col s12 m12 l6 blue">Sign Up Now</a>
              </div>
            </li>
            <li>
              <img src={ slider2 }/>
              <div className="caption center-align">
                <h3>Select a Trip Today!</h3>
                <h5 className="light grey-text text-lighten-3">Our drivers are pet owners like you, they know how they would want their own pets to be treated.</h5>
                <a href="#register" className="btn waves-effect waves-light col s12 m12 l6 blue">Sign Up Now</a>
              </div>
            </li>
            <li>
              <img src={ slider3 }/>
              <div className="caption center-align top">
                <h3>Tagline 3!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                <a href="#register" className="btn waves-effect waves-light col s12 m12 l6 blue">Sign Up Now</a>
              </div>
            </li>
          </ul>
        </div>

   )
  }
});

export default HomeHeader;
