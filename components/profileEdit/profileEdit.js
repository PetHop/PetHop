import React from 'react';

var ProfileEdit = React.createClass({
 render: function(){
   return (
     <div>
       <div className="container">
       <form className="form-inline" onSubmit={this.props.xxxx}>
           <div className="form-group">
             <label>First Name</label>
             <input type="text" className="form-control" placeholder="First Name"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
           </div>
           <div className="form-group">
             <label>Last Name</label>
             <input type="text" className="form-control" placeholder="Last Name" onChange={this.props.handleMiscChange}   value={this.props.misc}/>
           </div>
           <div className="form-group">
             <label>Street Address</label>
             <input type="text" className="form-control" placeholder="Street Address" onChange={this.props.handleExtraChange}   value={this.props.extra}/>
           </div>
           <div className="form-group">
             <label>City</label>
             <input type="text" className="form-control" placeholder="City"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
           </div>
           <div className="form-group">
             <label>State</label>
             <input type="text" className="form-control" placeholder="State"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
           </div>
           <div className="form-group">
             <label>Zip</label>
             <input type="text" className="form-control" placeholder="Zip"
             onChange={this.props.handleUrlChange} value={this.props.url}/>
           </div>
             <button type="submit" className="btn btn-primary">Register</button>
         </form>
       </div>
     </div>
   )
 }
});


export default ProfileEdit;
