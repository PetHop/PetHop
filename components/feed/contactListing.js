React = require('react');

var contactListing = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the trip that is currently being viewed
      activeTravelData: null,
    }
  },

  // Gets the individual listing from our server with all extra data populated and saves to state.
  getActiveTravelInfo: function(){
    console.log("getActiveTravelInfo", this.props.activeTravelId)
    var self = this;  // prevent some scope issues
    $.ajax({
      url: '/travel/' + this.props.activeTravelId,
      method: 'GET'
    }).done(function(data){
      console.log("data", data);
      self.setState({ activeTravelData: data });
      console.log("saved activeTravelData:", self.state.activeTravelData);
    })
  },

  componentDidMount: function(){
    this.getActiveTravelInfo(this.props.activeTravelId);
    console.log(this.props.activeTravelId, 'componentdidmount');
  },

  render: function(){
    var mailto = this.state.travelData ? ('mailto' + this.state.activeTravelData.tripPostedBy.email) : null;
    var contactInfo = this.state.activeTravelData ? (
      <div>
        <h4>Great!</h4>
        <p>We're glad you want to help!</p>
        <p>Please contact { this.state.activeTravelData.tripPostedBy.firstName } { this.state.activeTravelData.tripPostedBy.lastName } by <a href={ mailto }>email</a> or telephone: { this.state.activeTravelData.tripPostedBy.phone } to make further arrangments.</p>
        <img src={ this.state.activeTravelData.tripPostedBy.userImg } height="200" width="200" className="circle" />
        <img src={ this.state.activeTravelData.animalTraveler.petProfileImage } height="200" width="200" className="circle" />
        <h5>Thanks for using PetHop and enjoy your trip!</h5>
      </div>
    ) : null;

    return(
      <div>
        { contactInfo }
      </div>
    )
  }
});

module.exports = contactListing;
