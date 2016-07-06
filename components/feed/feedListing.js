//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location


import React from 'react';

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
    console.log("mounted");
    this.getAllListingsFromServer();
  },

   allListing: function(props){
     console.log(props);
     var listingthings = props.map(function(item){
       console.log("in map");
       return (
         <div>
            <div className="row">
              <div className="col s12 m12 l3">
                <div className="card z-depth-2">
                <div className="ownerPic">
                  <img src= "" alt="" className="responsive-img"/>
                </div>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src=""

                     />
                    <span className="card-title"> { item.userDriver.firstName} + { item.userDriver.lastName } </span>
                  </div>
                  <div className="card-content">
                    <p> Needs a ride to:{ item.endPoint } </p>
                  </div>
                  <div className="card-action">
                  <a href="/tripdetails/{ item.animalTraveler._id }">View Details</a>
                  <a href="#">View Profile</a>
                  </div>
                </div>
              </div>


             </div>
            </div>
          );
    });
    return (
      <div>
      {listingthings}
      </div>
    )
  },
  render: function(){
    console.log("this state listing", this.state.listing)
    return this.allListing(this.state.listing);
  }
 });

export default FeedListing;
