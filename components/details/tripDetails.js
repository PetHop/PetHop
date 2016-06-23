import React from 'react';
import Nav from './../nav/nav.js';
import TripDetailsMainComponent from './tripDetailsMainComponent';
import TripDetailsHeader from './tripDetailsHeader.js';
import Footer from './../footer/footer.js'

function TripDetails() {
  return (
   <div className="tripdetails">
     <TripDetailsHeader />
     <TripDetailsMainComponent />
     <TripDetailsMapComponent />
   </div>
 )
}
});


export default TripDetails;
