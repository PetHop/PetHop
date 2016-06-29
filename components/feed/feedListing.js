
import React from 'react';


var FeedListing = React.createClass({
  render: function () {
    return (

            <div className="row">
              <div className="col s12 m3">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Result 1</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">Trip Details</a>
                    <a href="#">User Profile</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m3">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Result 2</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">Trip Details</a>
                    <a href="#">User Profile</a>
                  </div>
                </div>
              </div>
            </div>

   )
  }
});

{/*<p>{ this.props.petName } needs a ride to { this.props.destination }</p>*/}


export default FeedListing;
