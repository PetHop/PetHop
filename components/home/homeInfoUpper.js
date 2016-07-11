import React from 'react';
var logo = require('file!./../../views/img/login-logo.png');

var InfoUpper = React.createClass({
  render: function() {
    return (
    <div className="row">
      <div className="home_row center">
        <h3 className="center">How PetHop Works!</h3>
          <h5 className="center condensed">It's easy as 1, 2, 3</h5>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="medium material-icons">pets</i></h2>
              <h5 className="center">Step 1</h5>
              <h6 className="center">Search Listings</h6>

              <p className="light center">Browse loving, trusted pet travelers near you.</p>
            </div>
          </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="medium material-icons">face</i></h2>
            <h5 className="center">Step 2</h5>
            <h6 className="center">Select Pet Trip</h6>


            <p className="light center">Get to know your traveler. Then book a trip with them.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="medium material-icons">favorite</i></h2>
            <h5 className="center">Step 3</h5>
            <h6 className="center">Breathe Easy</h6>

            <p className="light center">Enjoy text and photo updates from the road.</p>
          </div>
        </div>
      </div>
    </div>

   )
  }
});

export default InfoUpper;
