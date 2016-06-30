import React from 'react';


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
