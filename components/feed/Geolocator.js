// import React from 'react';
//
//
// var Location = React.createClass({
//   getInitialState: function(){
//     return {
//       petTrip: []
//     }
//   },
//
//   getAllpetTripFromServer: function(){
//     var self = this;
//
//     $.ajax({
//       method: 'GET',
//       url: '/travel'
//     }).done(function(data){
//       console.log(data);
//       self.setState({ petTrip: data })
//     })
//   },
//
//   componentDidMount: function(){
//     this.getAllpetTripFromServer();
//   },
//
//   render: function(){
//     return (<AllpetTrip petTrip={this.state.petTrip}/>)
//   }
//
// });
//
// function AllpetTrip(state){
//   var admin = state.petTrip.map(function(item){
//     return <feedMap startPoint={item._id}
//
//                        />
//   });
//
//
// var Geolocator = React.createClass({
// 	getInitialState: function(){
// 			return {
// 				searchAddress: null,
// 				address: null,
// 				position: {
// 									 lat: null,
// 									 lng: null
// 								 	},
// 			}
// 	},
//
// 	handleUserSearch: function(e){
// 		this.setState({ searchAddress: e.target.petTrip })
// 	},
//
// 	searchUserAddress: function(){
//
// 			var geocoder = new google.maps.Geocoder();
//
// 			geocoder.geocode({address: this.state.searchAddress}, function(results, status) {
// 				  this.state.position.lat=results.geometry.location.lat;
//           this.state.position.lat=results.geometry.location.lng;
// 			});
// 	},
//
// });
//
// module.exports = Geolocator;
// module.exports = Location;
