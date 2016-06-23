import React from 'react';
import Nav from './../nav/nav.js';
import FeedLeft from './feedLeft.js';
import FeedMap from './feedMap.js';
import Footer from './../footer/footer.js'

function Feed() {
  return (
   <div className="feed">
     <Nav />
     <FeedLeft />
     <FeedMap />
     <Footer />
   </div>
 );
}

export default Feed;
