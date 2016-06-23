import React from 'react';

var PetTrip = React.createClass({
 render: function(){
   return (
     <div>
       <div className="container">
       <form className="form-inline" onSubmit={this.props.xxxx}>
           <div className="form-group">
             <label>Where are leaving from?</label>
             <input type="text" className="form-control" placeholder="Starting location"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
           </div>
           <div className="form-group">
             <label>When are you leaving?</label>
             <input type="datetime-local" className="form-control"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
           </div>
           <div className="form-group">
             <label>Where are you going?</label>
             <input type="text" className="form-control" placeholder="Destination" onChange={this.props.handleMiscChange}   value={this.props.misc}/>
           </div>
           <div className="form-group">
             <label>When will you arrive?</label>
             <input type="datetime-local" className="form-control"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
           </div>
           <div className="form-group">
             <label>Is there any else you would like us to know?</label>
             <input type="textarea" className="form-control"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
          </div>
             <button type="submit" className="btn btn-primary">Register</button>
         </form>
       </div>
     </div>
   )
 }
});

export default PetTrip;
