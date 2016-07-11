var React = require('react')


var FeedListingCard = React.createClass({

  render: function(){
    return(
          <main>
            <div className="col s12 m12 l6 container">
              <div className="card z-depth-2">
              <div className="ownerPic">
                <img src={ this.props.listing.tripPostedBy.userImg } alt="" className="responsive-img"/>
              </div>
                <div className="card-image waves-effect waves-block waves-light">
                  <img src={ this.props.listing.animalTraveler[0].petProfileImage } />
                  <span className="card-title">{ this.props.listing.tripPostedBy.firstName } { this.props.listing.tripPostedBy.lastName } </span>
                </div>
                <div className="card-content">
                  <h5>Needs a Ride</h5>
                  <p><i className="material-icons">location_on</i>From: { this.props.listing.startPoint } </p>
                  <p><i className="material-icons">location_on</i>To: { this.props.listing.endPoint } </p>
                </div>
                <div className="card-action center">
                  <button className="waves-effect waves-light btn blue white-text" onClick={ this.props.seeDetails.bind(null, this.props.listing._id) } >View Details</button>
                </div>
              </div>
            </div>
          </main>
    )
  }
});

module.exports = FeedListingCard;
