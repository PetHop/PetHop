import React from 'react';
import Nav from './../nav/nav.js';
import Header from './profileHeader.js';
import PicAndName from './profilePicAndName.js';
import Info from './profileInfo.js';
import Listing from './profileListing';
import Footer from './../footer/footer.js'

var Profile = React.createCalss({
  render: function () {
    return (
   <div className="profile">
     <Header />
     <Nav />
     <PicAndName />
     <Info />
     <Listing />
     <Footer />
   </div>
 );
}

export default Profile;
