import React from 'react';

var Geolocator = React.createClass({
	getInitialState: function(){
			return {
				searchAddress: null,
				address: null
			}
	},

	handleUserSearch: function(e){
		this.setState({ searchAddress: e.target.value })
	},

	searchUserAddress: function(){

			var geocoder = new google.maps.Geocoder();

			geocoder.geocode({address: this.state.searchAddress}, function(results, status) {
				   console.log(results);
					 return results;
			});
	},

	render: function(){
		return (
			<div>
				<form onSubmit={this.searchUserAddress}>
   					<input type="text" onChange={this.handleUserSearch} value={this.state.searchAddress}/>
						<button className="btn">Search</button>
   			</form>
   		</div>
		)
	}
});

module.exports = Geolocator
