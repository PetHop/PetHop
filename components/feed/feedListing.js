import React from 'react';

var FeedListing = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col s12 m12 l3">
          <div className="card">
            <div className="card-image">
              <img src="lucy.png"/>
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
   )
  }
});

{/*<p>{ this.props.petName } needs a ride to { this.props.destination }</p>*/}


export default FeedListing;
