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
    console.log('fire start');
    this.setState({startDate: e.target.value})
    console.log("start", this.state.startDate);
  },
  handleEndDateChange: function (e){
    console.log('fire end');
    this.setState({endDate: e.target.value})
    console.log("end", this.state.endDate);
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
  // The function should add a pet's ID to array when it's checkbox is checked, and remove it when unchecked.
  handleTravelerCheckbox: function(e){
    // If the item is not in the array, the index will be -1
    var index = this.state.selectedPets.indexOf(e.target.value);
    // If the Id of the activated pet is not in the array, push it to the array.
    if (index == -1){
      this.state.selectedPets.push(e.target.value);
    // otherwise find the index of the Id and remove it from the array.
    } else {
      this.state.selectedPets.splice(index,1);
    }
    console.log("selectedPets", this.state.selectedPets);
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
    trip.animalTraveler = this.state.selectedPets;

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
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
    console.log('mounting components');
    // (first get mongoId of logged in user, then) get current user's pets so we can map them to a form of option to select which pets need a ride.
    this.context.handleMongoId(null, this.getCurrentUserInfo);
  },


   render: function(){
     console.log("rendering", this.state.currentUser);
     // Will prevent AllPetOptions component from loading until data is present (otherwise everything breaks and will render a blank page)
     var allPetOptionsWhenReady = this.state.currentUser ? <AllPetOptions currentUser={ this.state.currentUser } handleTravelerCheckbox={ this.handleTravelerCheckbox } /> : null;

     return (

       <div className="valign-wrapper">
        <div className="row">
          <form className="col s12" onSubmit={ this.props.handleContactInfoSubmit }>
              <div className="col s12 center">
               <h3>Add details of your pets trip!</h3>
              </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <input id="street" type="text" className="validate" onChange={ this.handleStartPointChange } />
                <label htmlFor="street">What is your start Location?</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <input id="city" type="text" className="validate" onChange={ this.handleEndPointChange }/>
                <label htmlFor="city">What is your end Location?</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <input id="date" type="date" className="datepicker" onChange={ this.handleStartDateChange }/>
                <label htmlFor="date">What date are you leaving?</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <input id="date" type="date" className="datepicker" onChange={ this.handleEndDateChange }/>
                <label htmlFor="date">What date will you arrive?</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <textarea id="textarea" type="textarea" className="materialize-textarea" onChange={ this.handleCommentsChange } value={this.comments}></textarea>
                <label htmlFor="textarea">Is there anything else you would like your driver to know?</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" >Add Listing</button>
          </form>
        </div>
       </div>
      )
   }
});

module.exports = PetTrip;
