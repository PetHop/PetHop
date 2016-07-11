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
   getInitialState: function(){
     return {
       listing: []
     }
   },

   getAllListingsFromServer: function(){
     console.log("before ajax");
     var self = this;
     $.ajax({
      method: 'GET',
      url: '/travel'
    }).done(function(data){
      console.log("after ajax", data);
      self.setState({ listing: data })
    })
  },


  componentDidMount: function(){
    console.log("mounted feedlisting, props", this.props);
    this.getAllListingsFromServer();
  },


  seeDetails: function(id){
    console.log("seeDetails of ID", id);
    console.log("this.props", FeedListing.props);
    this.props.handleActiveIdChange(id);
    this.props.handleActiveComponentChange('details');
  },

  allListing: function(){
   var seeDetailsScoped = this.seeDetails; // I'm not sure if this is bad form or a good way to do this... It feels messy... but it works when I need to call the function inside the map.
   console.log("allListing function", this.state.listing);
   var listingthings = this.state.listing.map(function(item){
     return <FeedListingCard listing={ item }
                             key={ item._id }
                             seeDetails={ seeDetailsScoped } />
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
     console.log("feedlisting render");
     return(
       <div>

       { this.allListing() }

       </div>
     )
   }
 });

export default FeedListing;
