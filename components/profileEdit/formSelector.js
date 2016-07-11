var React = require('react');
var PetProfileEdit = require('./petProfileEdit.js');
var VehicleEdit = require('./vehicleEdit.js');
var ContactInfoEdit = require('./contactInfoEdit.js');
var SelectorButtons = require('./selectorButtons.js');
var ImageUpload = require('./imageUpload.js');


var ProfileEditSelector = React.createClass({

  getInitialState: function(){
    return{
      activeComponent: 'contactInfoEdit', // components will include editAddress, addPet, editVehicle, ????
      activeUserId: null, // I think this is extraneous at the moment...
    }
  },

 // Displays one of several component based on the value of state.activeComponent
  showComponent: function(){
    if (this.state.activeComponent === 'contactInfoEdit') {
      return <ContactInfoEdit handleStreetChange={ this.props.handleStreetChange }
                              handleCityChange={ this.props.handleCityChange }
                              handleStateChange={ this.props.handleStateChange }
                              handleZipChange={ this.props.handleZipChange }
                              handlePhoneChange={ this.props.handlePhoneChange }
                              handleContactInfoSubmit={ this.props.handleContactInfoSubmit }/>
    } else if ( this.state.activeComponent === 'vehicleEdit') {
      return <VehicleEdit handleVehicleTypeChange={ this.props.handleVehicleTypeChange }
                          handleColorChange={ this.props.handleColorChange }
                          handleMakeChange={ this.props.handleMakeChange }
                          handleModelChange={ this.props.handleModelChange }
                          handleYearChange={ this.props.handleYearChange }
                          handleVehicleInfoSubmit={ this.props.handleVehicleInfoSubmit }/>
    } else if ( this.state.activeComponent === 'addPet') {
      return <PetProfileEdit handlePetNameChange={ this.props.handlePetNameChange }
                             handleTypeChange={ this.props.handleTypeChange }
                             handlePetSizeChange={ this.props.handlePetSizeChange }
                             handlePetBreedChange={ this.props.handlePetBreedChange }
                             handlePetDescChange={ this.props.handlePetDescChange }
                             handleSpecialReqChange={ this.props.handleSpecialReqChange }
                             handlePetProfileSubmit={ this.props.handlePetProfileSubmit } />
    } else if ( this.state.activeComponent = 'imageUpload') {
      // This ternary statement is to prevent rendering before currentUser is defined, which would break the app
      return this.props.currentUser ? <ImageUpload currentUser={ this.props.currentUser }/> : null;
    } else {
      throw new Error('No active profileEdit component: ', this.state.activeComponent)
    }
  },

  // Gives functions in children access to state.activeComponent
  toggleActiveComponent: function(name){
    this.setState({
      activeComponent: name
    })
  },


  render: function(){
    return(
      <div>
        <SelectorButtons toggleActiveComponent={ this.toggleActiveComponent } />
        { this.showComponent() }
      </div>
    )
  }
});

module.exports = ProfileEditSelector;
