var React = require('react')


var FeedListingCard = React.createClass({

  render: function(){
    console.log("feedlistingcard", this.props);
    console.log('petProfileImage', this.props.listing.animalTraveler.petProfileImage);
    console.log('humanprofileimage', this.props.listing.tripPostedBy.userImg );

    return(
      <div className="col s12 m12 l6">
        <div className="card z-depth-2">
        <div className="ownerPic">
          <img src={ this.props.listing.tripPostedBy.userImg } alt="" className="responsive-img"/>
        </div>
          <div className="card-image waves-effect waves-block waves-light">
            <img src={ this.props.listing.animalTraveler[0].petProfileImage } />
            <span className="card-title">{ this.props.listing.tripPostedBy.firstName } { this.props.listing.tripPostedBy.lastName } </span>
          </div>
          <div className="card-content">
            <p> Needs a ride from: { this.props.listing.startPoint } </p>
            <p> Needs a ride to: { this.props.listing.endPoint } </p>
          </div>
          <div className="card-action center">
            <button onClick={ this.props.seeDetails.bind(null, this.props.listing._id) } >View Details</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = FeedListingCard;
