import React from 'react';
import ReactStormpath, { RegistrationForm, LoginLink } from 'react-stormpath';
var logo = require('file!./../../views/img/login-logo.png');

var Registration = React.createClass({
  // getInitialState(){
  //   return {
  //     stormpathId: null,
  //     firstName: null,
  //     lastName: null,
  //     email: null,
  //     password: null,
  //     state: null,
  //     city: null,
  //     street: null,
  //     zip: null,
  //   }
  // },
  //
  // onFirstNameChange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  // onLastNameChange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  // onEmailChange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  // onPasswordChange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  // onCityChange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  // onStateChange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  // onStreetChange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  // onZipchange: function(e){
  //   this.setState({ name: e.target.value })
  // },
  //
  // handleFormSubmit: function(e){
  //   e.preventDefault();
  //   var newLocalUserData = {};
  //   var newStormpathUser = {};
  //   newStormpathUser = {
  //     givenName: this.state.firstName,
  //     surname: this.state.lastName,
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //
  //   registerStormpathAccount(newStormpathUser)
  //   .then(
  //     handleStormpathId()
  //     .then(
  //       console.log("getting further..."),
  //       newLocalUserData = {
  //         firstName: this.state.firstName,
  //         lastName: this.state.lastName,
  //         email: this.state.email,
  //         street: this.state.street,
  //         city: this.state.city,
  //         zip: this.state.zip,
  //         state: this.state.state,
  //         stormpathId: this.state.stormpathId
  //       },
  //       console.log("deep in handleformsubmit-> object check:"),
  //       console.log(newLocalUserData),
  //     handleCreateLocalAccount(newLocalUserData)))
  // },

  // registerStormpathAccount: function(newStormpathUser){
  //   $.ajax({
  //     method: 'POST',
  //     url: '/register',
  //     dataType: 'json',
  //     data: newStormpathUser,
  //     success: function(data){
  //       console.log("registerStormpathAccount response:")
  //       console.log(data);
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error('/register', status, err.toString())
  //     }.bind(this)
  //   })
  // },
  // I want to clear the sensitive info from state (esp. password)
  // getInitialState();

  // create user account in our MongoDB, include stormpath ID that comes back in their response so that we can retrieve their info after they log in through Stormpath

  // handleCreateLocalAccount: function(){
  //   self = this;
  //   $.ajax({
  //     method: 'POST',
  //     url: '/users'
  //   }).done(function(response){
  //     console.log("handleCreateLocalAccount completed:");
  //     console.log(response);
  //   })
  // },


  // Gets logged in user data and truncates the users ID from the account.href property (last 22 characters) of the returned data. Saves the ID is this.state.stormpathId

  // handleStormpathId: function(){
  //   $.ajax({
  //     url: '/me',
  //     method: "GET",
  //     success: function(data) {
  //       console.log("handleStormpathId data:")
  //       console.log(data);
  //       this.state.stormpathId =  data.account.href.slice(data.account.href.length - 22);
  //       console.log("stormpathId is " + this.state.stormpathId)
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error('/me', status, err.toString())
  //     }.bind(this)
  //   })
  // },

  // -> get data from form
  // -> send to stormpath /register api
  // -> on response grab stormpath id from /me
  // -> create new mongoDB user with all info
  // -> redirect to profileEdit


// onSubmit={ this.createNewUser }

  render: function(){
    return (
    <div className="valign-wrapper">
     <div className="registration">
       <RegistrationForm>
        <div spIf="account.created">
          <span spIf="!account.enabled">To verify your account, click the verification link that we sent to your email then proceed to login by going to <LoginLink />.</span>
        </div>
        <div spIf="!account.created">
          <p spIf="form.error">
            <strong>Error:</strong><br />
            <span spBind="form.errorMessage" />
          </p>
          <div className="row">
             <div className="col s12 m12 l12">
              <div className="center">
            <img src={ logo }alt="" className="responsive-img"/>
               <h3>Register</h3>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="firstname" type="text" className="validate" name="givenName"/>
                  <label htmlFor="firstname">First Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="lastname" type="text" className="validate" name="surname"/>
                  <label htmlFor="lastname">Last Name</label>
                </div>
              </div>
              {/*<div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="petName" type="text" className="validate" name="surname"/>
                  <label htmlFor="petName">Pet Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="petType" type="text" className="validate" name="surname"/>
                  <label htmlFor="petType">Pet Type</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="petBreed" type="text" className="validate" name="surname"/>
                  <label htmlFor="petBreed">Pet Breed</label>
                </div>
              </div>*/}
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="email" type="email" className="validate" name="email"/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="password" type="password" className="validate" name="password"/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            <a href="#feed" className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" value="Register">Sign Up</a>
        </div>
        </div>
        </div>
      </RegistrationForm>
    </div>
  </div>
  );
}
});

export default Registration;
