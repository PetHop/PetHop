import React from 'react';
import AllPetOptions from './allPetOptions.js';

function bark(message){
  document.getElementById('output').innerHTML = message;
};

var PetTrip = React.createClass({

  contextTypes: {
    handleMongoId: React.PropTypes.func.isRequired,
  },

  getInitialState(){
    return{
      currentUser: null,
      selectedPets: [],
      startDate: undefined,
      endDate: undefined,
      startPoint: undefined,
      endPoint: undefined,
      comments: undefined,
    }
  },

  // Update state based on user interaction with inputs
  handleStartDateChange: function (e){
    this.setState({startDate: e.target.value})
  },
  handleEndDateChange: function (e){
    this.setState({endDate: e.target.value})
  },
  handleStartPointChange: function (e){
    this.setState({startPoint: e.target.value})
  },
  handleEndPointChange: function (e){
    this.setState({endPoint: e.target.value})
  },
  handleCommentsChange: function (e){
    this.setState({comments: e.target.value})
  },
  // The function should add a pets ID to array when checked, and remove it when unchecked.
  handleAnimalTravelerCheckboxChange: function(e){
    console.log("handleAnimalTravelerCheckboxChange Event:", e)
    var tempAnimalTraveler = this.state.animalTraveler;

    this.setState({animalTraveler: e.target.value })
  },

  // Combine data from inputs to one object for transmission
  handleFormSubmit: function(e){
    e.preventDefault(); //prevents page refresh
    var trip = {};
    trip.startDate = this.state.startDate;
    trip.endDate = this.state.endDate;
    trip.startPoint = this.state.startPoint;
    trip.endPoint = this.state.endPoint;
    trip.comments = this.state.comments;
    // trip.animalTraveler =
    console.log("hangleFormSubmit:", trip);
    this.context.handleMongoId(trip, this.handlePetTripFormUpdate);
    this.setState({ startDate: "", endDate: "", startPoint: "", endPoint: "", comments: ""});
  },


  // POST new listing to the server
  handlePetTripFormUpdate: function (trip, mongoId){
    $.ajax({
      url: '/travel/',
      method: 'POST',
      dataType: 'json',
      data: trip,
      success: function(data){
      }.bind(this),
      error: function(xhr, status, err){
        console.error('/travel/' + mongoId, status, err.toString());
      }.bind(this)
    });
  },
  // Radio Button code to select whether or not a person is offering or requesting a ride. We have decided to simplify our product to meet MVP requirements and only allow those in need of a ride ot post for now, while others will be able to accept the listing after it has been created.
  // giving: function(e){
  //   var value = e.target.value;
  //   if (this.state.active !== value) {
  //     bark("Giving a Ride");
  //     this.setState({ active: value });
  //   }
  // },
  // requesting: function(e){
  //   var value = e.target.value;
  //   if (this.state.active !== value) {
  //     bark("Requesting a ride");
  //     this.setState({ active: value });
  //   }
  // },
  // <div>
  //    <input id="radiobtn" type="radio" onChange={this.giving} value="Giving a ride"/>Giving a ride
  // </div>
  // <div>
  //    <input id="radiobtn" type="radio" onChange={this.requesting} value="Requesting a ride"/>Requesting a ride
  // </div>

  getCurrentUserInfo: function(empty, mongoId){
    console.log("getting CurrentUser info");
    var self = this;  // prevent some scope issues
    $.ajax({
      url: '/users/' + mongoId,
      method: 'GET'
    }).done(function(data){
      self.setState({ currentUser: data });
      console.log("saved currentUser:", data);
    })
  },


  componentDidMount: function(){
    console.log('mounting components');
    // (first get mongoId of logged in user, then) get current user's pets so we can map them to a form of option to select which pets need a ride.
    this.context.handleMongoId(null, this.getCurrentUserInfo);
  },

   render: function(){
     console.log("rendering", this.state.currentUser);

     var renderOnlyWhenReady = this.state.currentUser ? <AllPetOptions currentUser={ this.state.currentUser } /> : null;

     return (
       <div>
         <h3>Post a new request for transportation assistance here!</h3>
         <div className="container">
         <form className="form-inline" onSubmit={this.handleFormSubmit}>
          <div id="output"></div>

            { renderOnlyWhenReady }

             <div className="form-group">
               <label>Where are leaving from?</label>
               <input type="text" className="form-control" placeholder="Starting location"
               onChange={this.handleStartPointChange} />
             </div>
             <div className="form-group">
               <label>When are you leaving?</label>
               <input type="date" className="form-control"
               onChange={this.handleStartDateChange} />
             </div>
             <div className="form-group">
               <label>Where are you going?</label>
               <input type="text" className="form-control" placeholder="Destination" onChange={this.handleEndPointChange}   />
             </div>
             <div className="form-group">
               <label>When will you arrive?</label>
               <input type="date" className="form-control"
               onChange={this.handleEndDateChange}/>
             </div>
             <div className="form-group">
               <label>Is there anything else you would like us to know?</label>
               <input type="textarea" className="form-control"
               onChange={this.handleCommentsChange} value={this.comments}/>
              </div>
               <button type="submit" className="btn btn-primary">Post this Listing!</button>
           </form>
         </div>
       </div>
      )
   }
});

module.exports = PetTrip;
