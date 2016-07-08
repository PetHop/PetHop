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
    //console.log("mounted, props", this.props);
    this.getAllListingsFromServer();
  },

  //  allListing: function(){
  //    console.log("allListing state", this.state.listing)
  //    //console.log("allListing props", listings);
  //    var listingthings = this.state.listing.map(function(item){
  //      console.log("in map");
  //      return (
  //        <div>
  //           <div className="row">
  //             <div className="col s12 m12 l3">
  //               <div className="card z-depth-2">
  //               <div className="ownerPic">
  //                 <img src={ owner1 }alt="" className="responsive-img"/>
  //               </div>
  //                 <div className="card-image waves-effect waves-block waves-light">
  //                   <img src={ pet1 }/>
  //                   <span className="card-title">{ item.userDriver.firstName } + { item.userDriver.lastName } </span>
  //                 </div>
  //                 <div className="card-content">
  //                   <p> Needs a ride to:{ item.endPoint } </p>
  //                 </div>
  //                 <button onClick={ this.props.handleActiveIdChange.bind(null, item._id) }>Trip Details</button>
  //                 <div className="card-action center">
  //                 <a href="#">Delete</a>
  //                 </div>
  //               </div>
  //             </div>
  //            </div>
  //           </div>
  //         );
  //   });
  //   return (
  //     <div>
  //     {listingthings}
  //     </div>
  //   )
  // },
  render: function(){
    var allListing = this.state.listing.map(function(item){
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
                         <button>Trip Details</button>
                         <div className="card-action center">
                         <a href="#">Delete</a>
                         </div>
                       </div>
                     </div>
                    </div>
        </div>
      )
    })
    // console.log("props"(this.props));
    // var showComponent = this.props.activeTravelId ? <TripDetails /> : this.allListing(this.state.listing);
    // console.log("this state listing", this.state.listing)
//  {showComponent}
    return(
      <div>
      {allListing}
        
      </div>
    )
  }
 });

export default FeedListing;
