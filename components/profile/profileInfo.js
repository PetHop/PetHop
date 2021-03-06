import React from 'react';


var Info = React.createClass({

  vehicle: function(){  // If vehicle information has been entered, display it!
    var vehicleInfo = this.props.vehicleType ?
      <div>
      <h5>Transportation</h5>
      <p>You drive a {this.props.vehicleColor} {this.props.vehicleType}</p>
      <p>(A {this.props.vehicleYear} {this.props.vehicleMake} {this.props.vehicleModel})</p>
      </div>
      : null;
    return vehicleInfo;
  },

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

          { this.vehicle() }
      </p>


     </div>
   )
  }
});

export default Info;
