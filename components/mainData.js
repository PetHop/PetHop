var React = require('react');

var MongoId = React.createClass({

  // Important for something.
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  // Declares the type of the context?
  childContextTypes: {
    handleMongoId: React.PropTypes.func,
    consoleStormpathId: React.PropTypes.func,
    getCurrentUsersPets: React.PropTypes.func
  },

  // Adds function to props, this is the one to use when calling the function
  getChildContext: function(){
    return{
      handleMongoId: this.handleMongoId,
      consoleStormpathId: this.consoleStormpathId,
      getCurrentUsersPets: this.getCurrentUsersPets
    }
  },

  // GETs the mongoId of the logged in User and then passes it to the callback along with the data it was given.
  // A get request to the /me route stormpath provides for us (and with customData expanded) gives us access to the mongo_id saved with the stormpath account. We will need this to update our corresponding mongoDB user info.
  handleMongoId: function(passthroughDataObject, callback){
    console.log("handleMongoId is ajaxing...");
    var mongoId = '';
    $.ajax({
      url: '/me',
      method: "GET",
      success: function(data) {
        mongoId = data.account.customData.mongo_id;
        console.log("mongoId:",mongoId);
        callback(passthroughDataObject, mongoId);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/me', status, err.toString())
      }.bind(this)
    })
  },

  // AJAX request to get all of the logged in user's pets and save them in state
  getCurrentUsersPets: function(empty, mongoId){
    var self = this;
    console.log("getCurrentUsersPets is about to AJAX");
    $.ajax({
      method: 'GET',
      url: '/users/' + mongoId
    }).done(function(data){
      console.log("getCurrentUsersPets ajaxed succssfully. data:", data);
      self.setState({ currentUsersPets: data.pets })
    })
  },

  // This function is for testing purposes only and also is broken now as it was written in profileEdit.js
  // consoleStormpathId: function(){
  //   $.ajax({
  //     url: '/me',
  //     method: "GET",
  //     success: function(data) {
  //       console.log("MongoID: ", data.account.customData.mongo_id);
  //       this.state.stormpathId =  data.account.href.slice(data.account.href.length - 22);
  //       console.log("stormpathId is " + this.state.stormpathId)
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error('/me', status, err.toString())
  //     }.bind(this)
  //   })
  // },

  // gives the children access
  render: function(){
    return (
      <div>{this.props.children}</div>
    )
  }
});

module.exports = MongoId;
