import React from 'react';



var PetTrip = React.createClass({

  getInitialState(){
    return{
      startDate: null,
      endDate: null,
      startPoint: null,
      endPoint: null,
      comments: null
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
    success: funtion(data){
    }.bind(this),
      error: function(xhr, status, err){
        console.error('/users/' + mongId, status, err.toString());
      }.bind(this)
  });
},


 render: function(){
   return (
     <div>
       <div className="container">
       <form className="form-inline" onSubmit={this.handleFormSubmit}>
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
