import React from 'react';


var InfoUpper = React.createClass({
  render: function() {
    return (

      <div className="row">
        <h3 className="center">How PetHop Works!</h3>
          <h5 className="center condensed">It's easy as 1, 2, 3</h5>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center light-blue-text"><i className="medium material-icons">web</i></h2>
              <h5 className="center">Step 1</h5>
              <h6 className="center">Search Listings</h6>

              <p className="light center">Browse loving, trusted dog sitters and walkers near you.</p>
            </div>
          </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="medium material-icons">contacts</i></h2>
            <h5 className="center">Step 2</h5>
            <h6 className="center">Select Pet Trip</h6>


            <p className="light center">Get to know your sitter at a Meet & Greet. Then book a stay—at their house or yours.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="medium material-icons">loyalty</i></h2>
            <h5 className="center">Step 3</h5>
            <h6 className="center">Breathe Easy</h6>

            <p className="light center">You’ll enjoy text and photo updates, world-class customer support, and premium insurance.</p>
          </div>
        </div>
      </div>

   )
  }
});

export default InfoUpper;
