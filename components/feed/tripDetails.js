import React from 'react';


var Details = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the trip that is currently being viewed
      activeTravelData: null,
    }
  },

  // Gets the individual listing from our server with all extra data populated and saves to state.
  getActiveTravelInfo: function(){
    console.log("getActiveTravelInfo", this.props.activeTravelId)
    var self = this;  // prevent some scope issues
    $.ajax({
      url: '/travel/' + this.props.activeTravelId,
      method: 'GET'
    }).done(function(data){
      console.log("data", data);
      self.setState({ activeTravelData: data });
      console.log("saved activeTravelData:", self.state.activeTravelData);
    })
  },

  componentDidMount: function(){
    this.getActiveTravelInfo(this.props.activeTravelId);
    console.log(this.props.activeTravelId, 'componentdidmount');
  },

  // <img src={ this.state.activeTravelData.animalTraveler[0].petProfileImage } className="responsive-img circle" />
  // <span className="card-title">{ this.state.activeTravelData.AnimalTraveler[0].petName } { this.props.listing.tripPostedBy.lastName } </span>
  // <h6> Can you help </h6><h5>{ this.state.activeTravelData.animalTraveler[0].petName }</h5><h6> get from { this.state.activeTravelData.startPoint } to { this.state.activeTravelData.endPoint } on { this.state.activeTravelData.startDate } ? </h6>

  render: function () {
    console.log(this.state.activeTravelData);
    var tripDetails = (this.state.activeTravelData) ? (
      <div className="valign-wrapper">
        <div className="details col 12">
            <div className="col s12 m12 l6 container left">
              <div className="card">
              <p className="flow-text" id="contact">
                <img src={ this.state.activeTravelData.animalTraveler[0].petProfileImage } className="responsive-img circle center" id="detail-user" />
                <h6> Can you help </h6><h5>{ this.state.activeTravelData.animalTraveler[0].petName }</h5><h6> Get from: { this.state.activeTravelData.startPoint } to { this.state.activeTravelData.endPoint }? </h6>
                <h5> Additional Details: </h5>
                <p> { this.state.activeTravelData.comments } </p>
                <p> Request posted by:  { this.state.activeTravelData.tripPostedBy.firstName } { this.state.activeTravelData.tripPostedBy.lastName }</p>
              </p>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4"> { this.state.activeTravelData.animalTraveler[0].petName } <i className="material-icons right">more_vert</i></span>
                </div>
                 <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{ this.state.activeTravelData.animalTraveler[0].petName }<i className="material-icons right">close</i></span>
                  <p className="flow-text" id="contact">
                    <img src={ this.state.activeTravelData.animalTraveler[0].petProfileImage } className="responsive-img circle" id="detail-user" />
                    <h6> Can you help </h6><h5>{ this.state.activeTravelData.animalTraveler[0].petName }</h5><h6> Get from: { this.state.activeTravelData.startPoint } to { this.state.activeTravelData.endPoint }? </h6>
                    <h5> Additional Details: </h5>
                    <p> { this.state.activeTravelData.comments } </p>
                    <p> Request posted by:  { this.state.activeTravelData.tripPostedBy.firstName } { this.state.activeTravelData.tripPostedBy.lastName }</p>
                  </p>
                </div>
              </div>
              {/*<div className="card z-depth-2">
                <div className="card-image waves-effect waves-block waves-light">
                </div>
                  <div className="card-content center">
                    <p className="flow-text" id="contact">
                      <img src={ this.state.activeTravelData.animalTraveler[0].petProfileImage } className="responsive-img circle" id="detail-user" />
                      <h6> Can you help </h6><h5>{ this.state.activeTravelData.animalTraveler[0].petName }</h5><h6> Get from: { this.state.activeTravelData.startPoint } to { this.state.activeTravelData.endPoint }? </h6>
                      <h5> Additional Details: </h5>
                      <p> { this.state.activeTravelData.comments } </p>
                      <p> Request posted by:  { this.state.activeTravelData.tripPostedBy.firstName } { this.state.activeTravelData.tripPostedBy.lastName }</p>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  </div>
              </div>*/}
          </div>
        </div>
      </div>
      )
        : null;

    return (
      <div>
        { tripDetails }
      </div>
    );
  }
});

export default Details;
