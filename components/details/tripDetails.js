import React from 'react';
import Nav from './../nav/nav.js';
import TripDetailsMainComponent from './tripDetailsMainComponent';
import TripDetailsBigDog from './tripDetailsBigDog.js';
import Footer from './../footer/footer.js'

function TripDetails() {
  return (
   <div className="tripdetails">
     <Nav />
     <TripDetailsBigDog />
     <TripDetailsMainComponent />
     <TripDetailsMapComponent />
     <Footer />
   </div>
 )
}
});


export default TripDetails;
