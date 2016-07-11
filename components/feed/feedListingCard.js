var React = require('react')


var FeedListingCard = React.createClass({

  render: function(){
    console.log("feedlistingcard", this.props);

    return(
      <div className="col s12 m12 l6">
        <div className="card z-depth-2">
        <div className="ownerPic">
          <img src="" alt="" className="responsive-img"/>
        </div>
          <div className="card-image waves-effect waves-block waves-light">
            <img src="" />
            <span className="card-title">{ this.props.listing.userDriver.firstName } + { this.props.listing.userDriver.lastName } </span>
          </div>
          <div className="card-content">
            <p> Needs a ride to:{ this.props.listing.endPoint } </p>
          </div>
          <div className="card-action center">
        <button onClick={ this.props.seeDetails.bind(null, this.props.listing._id) } >View Details</button>
          <a href="#">Delete</a>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = FeedListingCard;
