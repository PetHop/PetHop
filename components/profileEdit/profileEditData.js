
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

handleAddPetProfile: function(pet, mongoId){
  console.log("handleAddPetProfile starting");
  // now that we have the mongoId of the owner (currentUser), we attach it to the pet before POSTing the new pet
  pet.owner = mongoId;
  console.log(pet);
  $.ajax({
    url: '/pets/',
    method: 'POST',
    dataType: 'json',
    data: pet,
    success: function(data){
      console.log("handleAddPetProfile success! checking new document _id, then calling handleProfileUpdate.");
      console.log(data);
      console.log("_id: ", data._id);
      // We are taking the new pet's document ID passing it to the handleProfileUpdate so that the user that added this pet will be able to reference it from his own mongoDB entry.
      var user = {};
      user.pets = [data._id];
      this.handleProfileUpdate(user, mongoId);
    }.bind(this),
    error: function(xhr, status, err){
      console.error('/pets/', status, err.toString());
    }.bind(this)
  });
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
