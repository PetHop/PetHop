//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location

import React from 'react';
import Listings from './feedListing.js';
import Tools from './feedTools.js';
import Location from './Geolocator.js';
import Details from './tripDetails.js';
import ContactListing from './contactListing.js';



var Feed = React.createClass({

  getInitialState: function(){
    return{
      activeTravelId: null,
      activeComponent: "listings"
    }
  },

  handleActiveIdChange: function(travelId){

    this.setState({
      activeTravelId: travelId
    });
  },

  handleActiveComponentChange: function(componentName){
    console.log("handleActiveComponentChange", componentName);
    this.setState({
      activeComponent: componentName
    })
  },

  // Displays either the feed (by default) or details of a particular listing depending on user selection
  displaySelector: function(){
    if (this.state.activeComponent == 'details') {
      return <Details activeTravelId={ this.state.activeTravelId } />
    } else if (this.state.activeComponent == 'listings') {
      return <Listings activeTravelId={ this.state.activeTravelId } handleActiveIdChange={ this.handleActiveIdChange } handleActiveComponentChange={ this.handleActiveComponentChange }/>
    } else if (this.state.activeComponent == 'contact') {
      return <ContactListing activeTravelId={ this.state.activeTravelId }/>
    } else {
      throw new Error('No active component: ', this.state.activeComponent)
    }
  },

  componentDidMount: function(){
    window.scrollTo(0,0);
  },

  render: function() {
    console.log("activeComponent", this.state.activeComponent);
    return (
       <div className="feed">
          <Tools activeComponent={ this.state.activeComponent } handleActiveComponentChange={ this.handleActiveComponentChange }/>
          { this.displaySelector() }
          <Location />
       </div>
    );
  }
});

export default Feed;
