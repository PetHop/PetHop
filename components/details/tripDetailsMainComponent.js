import React from 'react';


var TripDetailsMainComponent = React.createClass({
  render: function () {
    return (
     <div className="TripDetailsMainComponentPic">
       <img classname="ownerpic" src="#"/>
     </div>

     <div className = "TripDetailsMainComponentInfo">
        <h1> About This Posting </h1>
        <p> NAME needs a ride to DESTINATION </p>
        <ul>
          <lh>Contact Pet Owner:</lh>
            <li>Name            FIRSTNAME LASTNAME</li>
            <li>Phone           PHONE</li>
            <li>EMail           EMAIL</li>
            <li>Comments        COMMENTS</li>
        </ul>
      </div>
   )
  }
});


export default TripDetailsMainComponent;