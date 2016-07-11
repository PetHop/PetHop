import React from 'react';
import AllPetOptions from './allPetOptions.js';
import { Router, browserHistory } from 'react-router';
var Link = require('react-router').Link;



var PetTrip = React.createClass({

  gotoPage: function() {
      browserHistory.push('#/feed');
  },




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
    // e.preventDefault(); //prevents page refresh
    var trip = {};
    trip.startDate = this.state.startDate;
    trip.endDate = this.state.endDate;
    trip.startPoint = this.state.startPoint;
    trip.endPoint = this.state.endPoint;
    trip.comments = this.state.comments;
    trip.animalTraveler = this.state.selectedPets;

    console.log("handleFormSubmit:", trip);
    this.context.handleMongoId(trip, this.handlePetTripFormUpdate);
    this.setState({ startDate: "", endDate: "", startPoint: "", endPoint: "", comments: ""});
    this.gotoPage();
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
     // Will prevent AllPetOptions component from loading until data is present (otherwise everything breaks and will render a blank page)
     var allPetOptionsWhenReady = this.state.currentUser ? <AllPetOptions currentUser={ this.state.currentUser } handleTravelerCheckbox={ this.handleTravelerCheckbox } /> : <h2>Please add a pet from the update profile page!</h2>;

     return (

       <div className="valign-wrapper">
        <div className="row">
          <form className="col s12" onSubmit={ this.handleFormSubmit }>
            <div className="col s12 center">
              <h3>Add details of your pets trip!</h3>
            </div>

              { allPetOptionsWhenReady }

              <div>
                <br/>
                <Link to='profileedit'>Click here to edit your profile. You must add/select at least one pet to continue.</Link>
                <br/>
                <Link to='profileedit'>Also, check that your contact info is accurate or drivers may not be able to reach you!</Link>
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
              <div className="something">
                <label htmlFor="date">What date are you leaving?</label>
              </div>
              <div className="input-field col s12 m12 l12">
              <input id="date" type="date" className="datetime" onChange={ this.handleStartDateChange }/>
              </div>
            </div>
            <div className="row">
              <div className="something">
                <label htmlFor="date">What date will you arrive?</label>
              </div>
              <div className="input-field col s12 m12 l12">
                <input id="date" type="date" className="datetime" onChange={ this.handleEndDateChange }/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <textarea id="textarea" type="textarea" className="materialize-textarea" onChange={ this.handleCommentsChange } value={this.comments}></textarea>
                <label htmlFor="textarea">Is there anything else you would like your driver to know?</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" > Add Listing</button>
          </form>
        </div>
       </div>
      )
   }
});

module.exports = PetTrip;
