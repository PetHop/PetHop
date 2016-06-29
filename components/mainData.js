var React = require('react');

var MongoId = React.createClass({

// Important for something.
propTypes: {
  children: React.PropTypes.node.isRequired
},

childContextTypes: {
  handleMongoId: React.PropTypes.func,
  consoleStormpathId: React.PropTypes.func
},

 // Adds function to props, this is the one to use when calling the function
  getChildContext: function(){
    return{
      handleMongoId: this.handleMongoId,
      consoleStormpathId: this.consoleStormpathId
    }
  },

  // A get request to the /me route stormpath provides for us (and with customData expanded) gives us access to the mongo_id saved with the stormpath account. We will need this to update our corresponding mongoDB user info.
  handleMongoId: function(user, callback){
    console.log("new special function!");
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

  // This function is for testing purposes only
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

  // gives the children access
  render: function(){
    return (
      <div>{this.props.children}</div>
    )
  }
});

module.exports = MongoId;
