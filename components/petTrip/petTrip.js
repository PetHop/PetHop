import React from 'react';

function bark(message){
  document.getElementById('output').innerHTML = message;
};

var PetTrip = React.createClass({

  getInitialState(){
    return{
      startDate: undefined,
      endDate: undefined,
      startPoint: undefined,
      endPoint: undefined,
      comments: undefined,
      active: null
    }
  },


handleStartDateChange: function (e){
  this.setState({startDate: e.target.value})
},
handleEndDateChange: function (e){
  this.setState({endDate: e.target.value})
},
handleStartPointChange: function (e){
  this.setState({startPoint: e.target.value})
},
handleEndPointChange: function (e){
  this.setState({endPoint: e.target.value})
},
handleCommentsChange: function (e){
  this.setState({comments: e.target.value})
},

handleFormSubmit: function(e){
  e.preventDefault(); //prevents page refresh
  var trip = {};
  trip.startDate = this.state.startDate;
  trip.endDate = this.state.endDate;
  trip.startPoint = this.state.startPoint;
  trip.endPoint = this.state.endPoint;
  trip.comments = this.state.comments;

  this.context.handleMongoId(trip, this.handlePetTripFormUpdate);
  this.setState({ startDate: "", endDate: "", startPoint: "", endPoint: "", comments: ""});
},

handlePetTripFormUpdate: function (trip, mongoId){

  $.ajax({
    url: '/travel/' + mongoId,
    method: 'PUT',
    dataType: 'json',
    data: trip,
    success: function(data){
    }.bind(this),
      error: function(xhr, status, err){
        console.error('/users/' + mongId, status, err.toString());
      }.bind(this)
  });
},

giving: function(e){
  var value = e.target.value;
  if (this.state.active !== value) {
    bark("Giving a Ride");
    this.setState({ active: value });
  }
},
requesting: function(e){
  var value = e.target.value;
  if (this.state.active !== value) {
    bark("Requesting a ride");
    this.setState({ active: value });
  }
},
 render: function(){
   return (
     <div>
       <div className="container">
       <form className="form-inline" onSubmit={this.handleFormSubmit}>

       <form>
        <div>
           <input id="radiobtn" type="radio" onChange={this.giving} value="Giving a ride"/>Giving a ride
        </div>
        <div>
           <input id="radiobtn" type="radio" onChange={this.requesting} value="Requesting a ride"/>Requesting a ride
        </div>
       </form>
       <div id="output"></div>
           <div className="form-group">
             <label>Where are leaving from?</label>
             <input type="text" className="form-control" placeholder="Starting location"
             onChange={this.handleStartPointChange} value={this.state.startPoint}/>
           </div>
           <div className="form-group">
             <label>When are you leaving?</label>
             <input type="datetime-local" className="form-control"
             onChange={this.handleStartDateChange} value={this.startDate}/>
           </div>
           <div className="form-group">
             <label>Where are you going?</label>
             <input type="text" className="form-control" placeholder="Destination" onChange={this.handleEndPointChange}   value={this.endPoint}/>
           </div>
           <div className="form-group">
             <label>When will you arrive?</label>
             <input type="datetime-local" className="form-control"
             onChange={this.handleEndDateChange} value={this.endDate}/>
           </div>
           <div className="form-group">
             <label>Is there any else you would like us to know?</label>
             <input type="textarea" className="form-control"
             onChange={this.handleCommentsChange} value={this.comments}/>
          </div>
             <button type="submit" className="btn btn-primary">Register</button>
         </form>
       </div>
     </div>
   )
 }
});

export default PetTrip;
