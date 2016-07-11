React = require('react');

var contactListing = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the trip that is currently being viewed
      activeTravelData: null,
    }
  },

  // Gets the individual listing from our server with all extra data populated and saves to state.
  getActiveTravelInfo: function(){
    console.log("getActiveTravelInfo", this.props.activeTravelId)
    var self = this;  // prevent some scope issues
    $.ajax({
      url: '/travel/' + this.props.activeTravelId,
      method: 'GET'
    }).done(function(data){
      console.log("data", data);
      self.setState({ activeTravelData: data });
      console.log("saved activeTravelData:", self.state.activeTravelData);
    })
  },

  componentDidMount: function(){
    this.getActiveTravelInfo(this.props.activeTravelId);
    console.log(this.props.activeTravelId, 'componentdidmount');
  },

  render: function(){
    return(
      <div>
        <p> Future location of the contact (info) form! </p>
      </div>
    )
  }
});

module.exports = contactListing;
