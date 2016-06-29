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

  this.handleMongoId(user, this.handleProfileUpdate);
  this.setState({ street: "", city: "", zip: "", state: ""});
},

// A get request to the /me route stormpath provides for us (and with customData expanded) gives us access to the mongo_id saved with the stormpath account. We will need this to update our corresponding mongoDB user info.
handleMongoId: function(user, callback){
  var mongoId = '';
  $.ajax({
    url: '/me',
    method: "GET",
    success: function(data) {
      mongoId = data.account.customData.mongo_id;
      console.log("mongoId:",mongoId);
      callback(user, mongoId);
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/me', status, err.toString())
    }.bind(this)
  })
},

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

// This function is for testing purposes only and should be removed later with the "ID ME" button below
consoleStormpathId: function(){
  $.ajax({
    url: '/me',
    method: "GET",
    success: function(data) {
      console.log("MongoID: ", data.account.customData.mongo_id);
      this.state.stormpathId =  data.account.href.slice(data.account.href.length - 22);
      console.log("stormpathId is " + this.state.stormpathId)
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/me', status, err.toString())
    }.bind(this)
  })
},



 render: function(){
   return (
     <div>
       <PetProfileEdit />
       <div className="container">
       <form className="form-inline" onSubmit={ this.handleFormSubmit }>
           <div className="form-group">
             <label>Street Address</label>
             <input type="text" className="form-control" placeholder="Street Address" onChange={ this.handleStreetChange }   value={this.state.street}/>
           </div>
           <div className="form-group">
             <label>City</label>
             <input type="text" className="form-control" placeholder="City"
             onChange={ this.handleCityChange } value={ this.state.city }/>
           </div>
           <div className="form-group">
             <label>State</label>
             <input type="text" className="form-control" placeholder="State"
             onChange={ this.handleStateChange } value={ this.state.state }/>
           </div>
           <div className="form-group">
             <label>Zip</label>
             <input type="text" className="form-control" placeholder="Zip"
             onChange={ this.handleZipChange } value={ this.state.zip }/>
           </div>
             <button type="submit" className="btn btn-primary">Register</button>
         </form>

          <button type="submit" onClick={ this.consoleStormpathId }>ID ME</button>

        </div>
     </div>
   )
 }
});


export default ProfileEdit;
