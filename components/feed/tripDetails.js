import React from 'react';


var Details = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the trip that is currently being viewed
      travelData: null,
      tDI: null  // Index of current active travel data props will be saved here.
    }
  },

  componentDidMount: function(){
    this.setActiveTravel(this.props.activeTravelId);
  },

  // This function finds the listing in our array of data with the matching activeTravelId and saves it in stat for easy access. This saves us from needing to do another AJAX call. (And from having to write an ajax readById w/ populate function which is proving difficult at this absurd hour).
  setActiveTravel: function(){
    for (var i = 0; i < this.props.listing.length; i++){
      if (this.props.listing[i]._id == this.props.activeTravelId) {
        this.setState({
          travelDataIndex: i,
          travelData:this.props.listing[i]
        });
        console.log("setActiveTravel:", this.props.listing[i]);
        console.log("activeIndex:", i);
        return
      }
    }
    throw new Error('Active ID not found:', this.props.activeTravelId)
  },

  // This function adds all pets requesting transport in this listing to a single convenient string for display.
  petNameCombiner: function(){
    var names = this.props.listing[this.state.tDI].animalTraveler[0].petName;
    for (var i = 1; i < this.props.listing[this.state.tDI].animalTraveler.length; i++) {
      names += (' and ' + this.props.listing[this.state.tDI].animalTraveler[i].petName);
    }
    return names;
  },


  render: function () {
    console.log("rendering travelData", this.props.listing[this.state.tDI].startPoint);
    return (
      <div className="details">
        <h3>{ this.petNameCombiner() } needs a ride from { this.props.listing[this.state.tDI].startPoint } to { this.props.listing[this.state.tDI].endPoint } on { this.props.listing[this.state.tDI].startDate }. Are you able to assist?</h3>
      </div>
   );
  }
});

export default Details;
