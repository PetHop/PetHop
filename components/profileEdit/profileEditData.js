
import React from 'react';
import PetProfileEdit from './petProfileEdit.js';
import ContactInfoEdit from './contactInfoEdit.js';
import FormSelector from './formSelector.js'

var ProfileEditData = React.createClass({

// List context functions that I plan to use in this component
contextTypes: {
  handleMongoId: React.PropTypes.func.isRequired
},

getInitialState(){
  return {
    // Holds current user object
    currentUser: {},
    // These are for contactInfoEdit
    street: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
    phone: undefined,
    // These are for PetProfileEdit
    petName: undefined,
    type: undefined,
    petSize: undefined,
    petBreed: undefined,
    petDesc: undefined,
    specialReq: undefined,
    // These are for vehicleEdit

    }
},

// Handle Change functions for contactInfoEdit
handleStreetChange: function(e){
  this.setState({ street: e.target.value });
},
handleCityChange: function(e){
  this.setState({ city: e.target.value })
},
handleStateChange: function(e){
  this.setState({ state: e.target.value })
},
handleZipChange: function(e){
  this.setState({ zip: e.target.value })
},
handlePhoneChange: function(e){
  this.setState({ phone: e.target.value })
},
// Handle Change functions for petProfileEdit
handlePetNameChange: function(e){
  this.setState({ petName: e.target.value })
},
handleTypeChange: function(e){
  this.setState({ type: e.target.value })
},
handlePetSizeChange: function(e){
  this.setState({ petSize: e.target.value })
},
handlePetBreedChange: function(e){
  this.setState({ petBreed: e.target.value })
},
handlePetDescChange: function(e){
  this.setState({ petDesc: e.target.value })
},
handleSpecialReqChange: function(e){
  this.setState({ specialReq: e.target.value })
},
// Handle change functions for vehicleEdit


// Combines all of the contact form data into one object to prepare for transmission.
handleContactInfoSubmit: function(e){
  e.preventDefault(); //prevents page refresh
  var user = {};
  user.street = this.state.street;
  user.zip = this.state.zip;
  user.city = this.state.city;
  user.state = this.state.state;
  user.phone = this.state.phone;
  // new pet IDs should be pushed to (or deleted from) state.currentUser.pets before calling this function, then the entire array is submitted here.
  user.pets = this.state.currentUser.pets


  this.context.handleMongoId(user, this.handleProfileUpdate);
  this.setState({ street: "", city: "", zip: "", state: "", phone: "" });
},

// Combines all of the pet form data into one object to prepare for ajax transmission.
handlePetProfileSubmit: function(e){
  e.preventDefault();
  var pet = {};
  pet.petName = this.state.petName;
  pet.type = this.state.type;
  pet.petSize = this.state.petSize;
  pet.petBreed = this.state.petBreed;
  pet.petDesc = this.state.petDesc;
  pet.specialReq = this.state.specialReq;

  this.context.handleMongoId(pet, this.handleAddPetProfile);
  this.setState({ petName: "", type: "", petSize: "", petBreed: "", petDesc: "", specialReq: "" });
},

// This function updates the user profile with new contact info, vehicle info, and petIDs
// Maybe move this way higher up in the component chain, this will need to be called from any edit page or even the feed or listing pages (to add a listing _id to the user profile)
handleProfileUpdate: function(user, mongoId){
  console.log("handleProfileUpdate starting");
  $.ajax({
    url: '/users/' + mongoId,
    method: 'PUT',
    dataType: 'json',
    data: user,
    success: function(data){
      console.log("handleProfileUpdate success")
      // DO SOMETHING USEFUL?
    }.bind(this),
      error: function(xhr, status, err){
      console.error('/users/' + mongoId, status, err.toString());
    }.bind(this)
  });
},

// After the MongoId of currentUser is retrieved, we are adding that to the pet object and saving the new pet to the database. The Id of the new pet will then be passed to another function to be saved in the current user's .pets property for easy future reference
handleAddPetProfile: function(pet, mongoId){
  console.log("handleAddPetProfile starting");
  // now that we have the mongoId of the owner (currentUser), we attach it to the pet before POSTing the new pet
  pet.owner = mongoId;
  console.log("handleAddPetProfile posting: ", pet);
  $.ajax({
    url: '/pets/',
    method: 'POST',
    dataType: 'json',
    data: pet,
    success: function(data){
      console.log("newly created pet _id: ", data._id);
      this.state.currentUser.pets.push(data._id);
      // DEPRECATED
      // We are taking the new pet's document ID passing it to the handleProfileUpdate so that the user that added this pet will be able to reference it from his own mongoDB entry.
      // var user = {};
      // user.pets = [data._id];
      // this.handleProfileUpdate(user, mongoId);
    }.bind(this),
    error: function(xhr, status, err){
      console.error('/pets/', status, err.toString());
    }.bind(this)
  });
},

// Gets the current user and saves the info to this.state.currentUser for easy manipulation of arrays and data
getCurrentUserInfo: function(empty, mongoId){
  var self = this;  // prevent some scope issues
  $.ajax({
    url: '/users/' + mongoId,
    method: 'GET'
  }).done(function(data){
    self.setState({ currentUser: data });
    console.log("saved currentUser:", self.state.currentUser);
  })
},

// Will retrieve info about the current User to save locally. This will make pushing data to properties that are saved as arrays easier by allowing us to use javascript array operations instead of working through mongoose
componentDidMount: function(){
  this.context.handleMongoId(null, this.getCurrentUserInfo);
},

 render: function(){
   return (
    <FormSelector handleStreetChange={ this.handleStreetChange }
                  handleCityChange={ this.handleCityChange }
                  handleStateChange={ this.handleStateChange }
                  handleZipChange={ this.handleZipChange }
                  handlePhoneChange={ this.handlePhoneChange }
                  handleContactInfoSubmit={ this.handleContactInfoSubmit }
                  handlePetNameChange={ this.handlePetNameChange }
                  handleTypeChange={ this.handleTypeChange }
                  handlePetSizeChange={ this.handlePetSizeChange }
                  handlePetBreedChange={ this.handlePetBreedChange }
                  handlePetDescChange={ this.handlePetDescChange }
                  handleSpecialReqChange={ this.handleSpecialReqChange }
                  handlePetProfileSubmit={ this.handlePetProfileSubmit }
                  />
   )
 }
});




export default ProfileEditData;
