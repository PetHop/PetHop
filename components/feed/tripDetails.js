import React from 'react';


var Details = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the trip that is currently being viewed
      travelData: null
    }
  },

  componentDidMount: function(){
    this.setActiveTravel(this.props.activeTravelId);
  },

  // This function finds the listing in our array of data with the matching activeTravelId and saves it in stat for easy access. This saves us from needing to do another AJAX call. (And from having to write an ajax readById w/ populate function which is proving difficult at this absurd hour).
  setActiveTravel: function(){
    for (var i = 0; i < this.props.listing.length; i++){
      if (this.props.listing[i]._id == this.props.activeTravelId) {
        this.setState({travelData:this.props.listing[i]});
        return console.log("setActiveTravel:", this.props.listing[i]);
      }
    }
    throw new Error('ID not found:', this.props.activeTravelId)
  },

  // This function adds all pets requesting transport in this listing to a single convenient string.
  petNameCombiner: function(){
    var names = this.state.travelData.animalTraveler[0].petName;
    for (var i = 1; i < this.state.travelData.animalTraveler.length; i++) {
      names += (' and ' + this.state.travelData.animalTraveler[i].petName);
    }
    return names;
  },


  render: function () {
    console.log("rendering travelData", this.state.travelData.startPoint);
    return (
      <div className="details">
        <h3>{ this.petNameCombiner() } needs a ride from { this.state.travelData.startPoint } to { this.state.travelData.endPoint } on { this.state.travelData.startDate.toString() }. Are you able to assist?</h3>


      </div>
   );
  }
});

export default Details;
