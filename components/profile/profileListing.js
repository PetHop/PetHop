import React from 'react';


var ProfileListing = React.createClass({
  render: function () {
    return (
     <div className="profilelisting">
       <img classname="animalpic" src="#"/>
       <img classname="ownerpic" src="#"/>
       <p> NAME needs a ride to DEST </p>

     </div>
   )
  }
});

{/*<p>{ this.props.petName } needs a ride to { this.props.destination }</p>*/}


export default ProfileListing;
