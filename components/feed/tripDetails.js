import React from 'react';


// The next step here is to figure out how to get a mongoID from a feed card to componentDidMount in this form....

var Details = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the trip that is currently being viewed
      travelData: undefined
    }
  },



  componentDidMount: function(){
    console.log('activeId changed to :', this.props.activeTravelId );
  },

  // This is the ajax request to load a Travel data from the server given a mongoId
  getTravelInfo: function(empty, travelId){
    var self = this;  // prevent some scope issues
    $.ajax({
      url: '/travels/' + travelId,
      method: 'GET'
    }).done(function(data){
      self.setState({ travelData: data });
      console.log("saved travelData:", self.state.travelData);
    })
  },


  render: function () {





    return (

     <div className="details">
      <li>WTF</li>
      {/*<li>{this.state.travelData.startDate}</li>*/}
      {/*{this.state.travelData.userDriver.startPoint}
      {this.state.travelData.userDriver.endPoint}
      {this.state.travelData.userDriver.animalTraveler.petSize}
      {this.state.travelData.userDriver.animalTraveler.petBreed}
      {this.state.travelData.userDriver.firstName}
      {this.state.travelData.userDriver.lastName}
      {this.state.travelData.userDriver.phone}*/}

     </div>
   );
  }
});

export default Details;
