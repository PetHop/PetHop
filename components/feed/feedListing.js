//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location


import React from 'react';
import pet1 from 'file!./../../views/img/lucy.png';
import owner1 from 'file!./../../views/img/nick.png';

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
                  <img src={ owner1 }alt="" className="responsive-img"/>
                </div>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={ pet1 }/>
                    <span className="card-title">{ item.userDriver.firstName } + { item.userDriver.lastName } </span>
                  </div>
                  <div className="card-content">
                    <p> Needs a ride to:{ item.endPoint } </p>
                  </div>
                  <div className="card-action center">
                  <a href="/tripdetails/{ item.animalTraveler._id }">View Details</a>
                  <a href="#profile">View Profile</a>
                  <a href="#">Delete</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l3">
                <div className="card z-depth-2">
                <div className="ownerPic">
                  <img src={ owner1 }alt="" className="responsive-img"/>
                </div>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img src={ pet1 }/>
                    <span className="card-title">{ item.userDriver.firstName } + { item.userDriver.lastName } </span>
                  </div>
                  <div className="card-content">
                    <p> Needs a ride to:{ item.endPoint } </p>
                  </div>
                  <div className="card-action center">
                  <a href="/tripdetails/{ item.animalTraveler._id }">View Details</a>
                  <a href="#profile">View Profile</a>
                  <a href="#">Delete</a>
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
