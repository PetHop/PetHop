//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location

import React from 'react';
import pet1 from 'file!./../../views/img/lucy.png';
import owner1 from 'file!./../../views/img/nick.png';
import TripDetails from './tripDetails.js';
import FeedListingCard from './feedListingCard.js';

var FeedListing = React.createClass({

  seeDetails: function(id){
    this.props.handleActiveIdChange(id);
    this.props.handleActiveComponentChange('details');
  },

  allListing: function(){
   var that = this; // I'm not sure if this is bad form or a good way to do this... It feels messy... but it works when I need to call the function inside the map.
     var listingthings = this.props.listing.map(function(item){

       return <FeedListingCard listing={ item }
                               key={ item._id }
                               seeDetails={ that.seeDetails } />
     });

    return (
      <div className="feedListing">
        <div className="row">
          {listingthings}
        </div>
      </div>
    )
  },

   render: function(){
     return(
       <div>

       { this.allListing() }

       </div>
     )
   }
 });

export default FeedListing;
