import React from 'react';
import Nav from './../nav/nav.js';
import Header from './homeHeader.js';
import InfoUpper from './homeInfoUpper.js';
import InfoLower from './homeInfoLower.js';
import Footer from './../footer/footer.js'

function Home() {
  return (
   <div className="home">
   <Header />
   <InfoUpper />
   <InfoLower />
   </div>
 );
}

export default Home;
