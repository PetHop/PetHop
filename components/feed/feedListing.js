import React from 'react';
import cardPic from 'file!./../../views/img/lucy.png';
import ownerPic from 'file!./../../views/img/nick.png';
import card2Pic from 'file!./../../views/img/gingersnap.png';
import owner2Pic from 'file!./../../views/img/lauren.png';


var FeedListing = React.createClass({
  getInitialState: function(){
    return {
      listing: []
    }
  },

  getAllListingsFromServer: function(){
    var self = this;
    $.ajax({
      method: 'GET',
      url: '/travel'
    }).done(function(data){
      console.log(data);
      self.setState({ listing: data })
    })
  },

  componentDidMount: function(){
    this.getAllListingsFromServer();
  },

   allListing: function(props){
     console.log(props);
     var listingthings = props.map(function(item){
       console.log("in map");
       return (
         <div className="row">
           <div className="col s12 m12 l3">
             <div className="card">
               <div className="card-image">
                 <img src="./img/lucy.png"/>
                 <span className="card-title">Card Title</span>
               </div>
               <div className="card-content">



             <h3> { item.userTraveler.pets.petName} + { item.userTraveler.lastName } </h3>

             <h3> { item.userTraveler.pets.petProfileImage } </h3>
             <h3> { item.userTraveler.startPoint } </h3>
             <h3> { item.userTraveler.userImg} </h3>
               </div>
               <div className="card-action">
                 <a href="#">This is a link</a>
               </div>
             </div>
           </div>
         </div>
      )
    });
    return (

            // <div className="row">
            //   <div className="col s10 m10 l3">
            //     <div className="card z-depth-2">
            //     <div className="ownerPic">
            //       <img src={ ownerPic } alt="" className="responsive-img"/>
            //     </div>
            //       <div className="card-image">
            //         <img src={ cardPic }/>
            //         <span className="card-title">Jenny Marucci</span>
            //
            //       </div>
            //       <div className="card-content">
            //         <p>Needs a ride to: Kent, OH</p>
            //       </div>
            //       <div className="card-action">
            //       <a href="#">View Details</a>
            //       <a href="#">View Profile</a>
            //       </div>
            //     </div>
            //   </div>
            //
            //   <div className="col s10 m10 l3">
            //     <div className="card z-depth-2">
            //     <div className="ownerPic">
            //       <img src={ owner2Pic } alt="" className="responsive-img"/>
            //     </div>
            //       <div className="card-image">
            //         <img src={ card2Pic }/>
            //         <span className="card-title">GingerSnap Nichols</span>
            //
            //       </div>
            //       <div className="card-content">
            //         <p>Needs a ride to: Maui, HI</p>
            //       </div>
            //       <div className="card-action">
            //       <a href="#">View Details</a>
            //       <a href="#">View Profile</a>
            //       </div>
            //     </div>
            //   </div>
            // </div>

   )
    <div>
      { listingthings }
    </div>
  );


  },
  // listingcard: function(){
  //   console.log("in listing");
  //   return (
  //     <div className="row">
  //       <div className="col s12 m12 l3">
  //         <div className="card">
  //           <div className="card-image">
  //             <img src="lucy.png"/>
  //             <span className="card-title">Card Title</span>
  //           </div>
  //           <div className="card-content">
  //
  //         <h3> { this.state.startDate } </h3>
  //         <h3> { this.state.endDate } </h3>
  //           </div>
  //           <div className="card-action">
  //             <a href="#">This is a link</a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //  )
  // },

  render: function () {
    console.log("trying to render");
    return this.allListing(this.state.listing);

  }
});

{/*<p>{ this.props.petName } needs a ride to { this.props.destination }</p>*/}


export default FeedListing;
