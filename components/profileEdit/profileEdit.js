import React from 'react';

var ProfileEdit = React.createClass({

getInitialState(){
  return {
    firstName: null,
    lastName: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    stormpathId: null
  }
},

handleFirstNameChange: function(e){
  this.setState({ firstName: e.target.value })
},
handleLastNameChange: function(e){
  this.setState({ lastName: e.target.value })
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
handleUserChange: function(e){
  e.preventDefault();
  var user = {};
  user.firstName = this.state.firstName;
  user.lastName = this.state.lastName;
  user.street = this.state.street;
  user.city = this.state.city;
  user.state = this.state.state;
  user.zip = this.state.zip;

  this.handleUserCreate(user);
  this.setState({ firstName: "", lastName: "", street: "", city: "", state: "", zip: "" });
},




// Gets logged in user data and truncates the users ID from the account.href property (last 22 characters) of the returned data.
handleStormpathId: function(){
  $.ajax({
    url: '/me',
    method: "GET",
    success: function(data) {
      console.log(data);
      this.state.stormpathId = data.account.href.slice(data.account.href.length - 22);
      console.log(typeof this.state.stormpathId);
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/me', status, err.toString())
    }.bind(this)
  })
},

 render: function(){
   return (
    //  <div>
    //    <div className="container">
    //    <form className="form-inline" onSubmit={this.props.xxxx}>
    //        <div className="form-group">
    //          <label>First Name</label>
    //          <input type="text" className="form-control" placeholder="First Name"
    //          onChange={ this.handleFirstNameChange } value={ this.state.firstName }/>
    //        </div>
    //        <div className="form-group">
    //          <label>Last Name</label>
    //          <input type="text" className="form-control" placeholder="Last Name" onChange={ this.handleLastNameChange }   value={ this.state.lastName }/>
    //        </div>
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
    //          <button type="submit" className="btn btn-primary">Register</button>
    //      </form>
    //         <button  onClick={ this.handleStormpathId } >ID ME</button>
    //    </div>
    //  </div>

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
