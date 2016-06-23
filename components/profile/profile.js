import React from 'react';
import Header from './profileHeader.js';
import PicAndName from './profilePicAndName.js';
import Info from './profileInfo.js';
import Listing from './profileListing';

var Profile = React.createClass({
  render: function () {
    return (
     <div className="profile">
       <Header />
       <PicAndName />
       <Info />
       <Listing />
     </div>
   );
  }
});

export default Profile;
