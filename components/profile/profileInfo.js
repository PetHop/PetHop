import React from 'react';


var Info = React.createClass({
  render: function() {
    return (
     <div className="profileInfo">

     <p className="flow-text" id="contact">
          <h5>Contact Info</h5>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <h5>Address</h5>
          <p>{this.props.street}</p>
          <p>{this.props.city}, {this.props.state} {this.props.zip}</p>

     </div>
   )
  }
});

export default Info;
