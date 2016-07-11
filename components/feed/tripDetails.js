import React from 'react';


var Details = React.createClass({
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


  render: function () {
    console.log(this.state.activeTravelData);
    var tripDetails = (this.state.activeTravelData) ? (
        <div className="details">
          <img src={ this.state.activeTravelData.animalTraveler[0].petProfileImage } height="300" width="300" />
          <h6> Can you help </h6><h5>{ this.state.activeTravelData.animalTraveler[0].petName }</h5><h6> get from { this.state.activeTravelData.startPoint } to { this.state.activeTravelData.endPoint } on { this.state.activeTravelData.startDate } ? </h6>
          <h5> Additional Details: </h5>
          <p> { this.state.activeTravelData.comments } </p>
          <p> Request posted by:  { this.state.activeTravelData.tripPostedBy.firstName } { this.state.activeTravelData.tripPostedBy.lastName }</p>

        </div>
      )
        : null;

    return (
      <div>
        { tripDetails }
      </div>
    );
  }
});

export default Details;
