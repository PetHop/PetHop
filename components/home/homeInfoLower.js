import React from 'react';

var InfoLower = React.createClass({
  componentDidMount: function(){
      $('.parallax').parallax();
  },
  render: function() {
    return (

      <div className="parallax-container">
        <div className="parallax">
          <img src='http://pethop.co/views/img/26128.jpg'/>
        </div>
        <div className="parallax-tagline">
        <div className="caption center-align light grey-text text-lighten-3">
            <h3>PetHop drivers treat your pets like they are family!</h3>
            <a href="#feed" className="btn waves-effect waves-light col s12 m12 l6 blue">View Listings</a>
        </div>
        </div>
      </div>
   )
  }
});

export default InfoLower;
