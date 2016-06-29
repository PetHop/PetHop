import React from 'react';
import PetProfileEdit from './PetProfileEdit.js';

var ProfileEdit = React.createClass({

getInitialState(){
  return {
    street: null,
    city: null,
    state: null,
    zip: null,
    }

},

// List context functions that I plan to use in this component
contextTypes: {
  handleMongoId: React.PropTypes.func.isRequired
},

handleStreetChange: function(e){
  this.setState({ street: e.target.value })
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


handleFormSubmit: function(e){
  e.preventDefault(); //prevents page refresh
  var user = {};
  user.street = this.state.street;
  user.zip = this.state.zip;
  user.city = this.state.city;
  user.state = this.state.state;

  var mongoId;

  this.context.handleMongoId(user, this.handleProfileUpdate);
  this.setState({ street: "", city: "", zip: "", state: ""});
},


// Move this way higher up in the component chain, this will need to be called from any edit page or even the feed or listing pages (to add a listing _id to the user profile)
handleProfileUpdate: function(user, mongoId){
  console.log("handleProfileUpdate ", mongoId);
  $.ajax({
    url: '/users/' + mongoId,
    method: 'PUT',
    dataType: 'json',
    data: user,
    success: function(data){
      console.log("success")
      // DO SOMETHING USEFUL?
    }.bind(this),
      error: function(xhr, status, err){
      console.error('/users/' + this.props.id, status, err.toString());
    }.bind(this)
  });
},



 render: function(){
   return (
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="fstreet_address" type="text" className="validate"/>
          <label for="street_address">Street Address</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="city" type="text" className="validate"/>
          <label for="city">City</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="state" type="text" className="validate"/>
          <label for="state">State</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="zip" type="number" className="validate"/>
          <label for="zip">Zip</label>
        </div>
      </div>
    </form>
  </div>
   )
 }
});




export default ProfileEdit;

//  <div>
//    <PetProfileEdit />
//    <div className="container">
//    <form className="form-inline" onSubmit={ this.handleFormSubmit }>
//        <div className="form-group">
//          <label>Street Address</label>
//          <input type="text" className="form-control" placeholder="Street Address" onChange={ this.handleStreetChange }   value={this.state.street}/>
//        </div>
//        <div className="form-group">
//          <label>City</label>
//          <input type="text" className="form-control" placeholder="City"
//          onChange={ this.handleCityChange } value={ this.state.city }/>
//        </div>
//        <div className="form-group">
//          <label>State</label>
//          <input type="text" className="form-control" placeholder="State"
//          onChange={ this.handleStateChange } value={ this.state.state }/>
//        </div>
//        <div className="form-group">
//          <label>Zip</label>
//          <input type="text" className="form-control" placeholder="Zip"
//          onChange={ this.handleZipChange } value={ this.state.zip }/>
//        </div>
//          <button type="submit" className="btn btn-primary" >Register</button>
//      </form>
 //
//       <button type="submit" onClick={ this.consoleStormpathId }>ID ME</button>
 //
//     </div>
//  </div>
