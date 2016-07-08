import React from 'react';
import Nav from './../nav/nav.js';
import Footer from './../footer/footer.js'


// The next step here is to figure out how to get a mongoID from a feed card to componentDidMount in this form....

var Details = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the trip that is currently being viewed
      travelData: undefined
    }
  },

  contextTypes: {
    handleMongoId: React.PropTypes.func.isRequired
  },

  componentDidMount: function(){
    // is to be passed a mongoId of the trip we would like to view upon loading of the page
    this.context.handleMongoId(null, this.getTravelInfo);
  },

  // This is the ajax request to load a Travel data from the server given a mongoId
  getTravelInfo: function(empty, mongoId){
    var self = this;  // prevent some scope issues
    $.ajax({
      url: '/travels/' + mongoId,
      method: 'GET'
    }).done(function(data){
      self.setState({ travelData: data });
      console.log("saved travelData:", self.state.travelData);
    })
  },


  render: function () {
    var travelInfo = this.state.travelData ? <TravelInfo
                startDate={this.state.travelData.userDriver.startDate}
                startPoint={this.state.travelData.userDriver.startPoint}
                endPoint={this.state.travelData.userDriver.endPoint}
                petSize={this.state.travelData.userDriver.animalTraveler.petSize}
                petBreed={this.state.travelData.userDriver.animalTraveler.petBreed}
                /> : null;
    var contactInfo = this.state.travelData ? <Details
                firstName={this.state.travelData.userDriver.firstName}
                lastName={this.state.travelData.userDriver.lastName}
                userPhone={this.state.travelData.userDriver.phone}

                /> : null;

    return (

     <div className="profile">
      <li>WTF</li>

     </div>
   );
  }
});

export default Details;
