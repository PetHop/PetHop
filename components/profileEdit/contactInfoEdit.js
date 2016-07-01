var React = require('react');

var ContactInfoEdit = React.createClass({

  render: function(){
    return (
     <div className="row">
       <form className="col s12" onSubmit={ this.props.handleContactInfoSubmit }>
         <div className="row">
           <div className="input-field col s6">
             <input id="phone" type="text" className="validate" onChange={ this.props.handlePhoneChange}/>
             <label for="phone">Telephone</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s6">
             <input id="street" type="text" className="validate" onChange={ this.props.handleStreetChange } />
             <label for="street">Street Address</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s6">
             <input id="city" type="text" className="validate" onChange={ this.props.handleCityChange }/>
             <label for="city">City</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s6">
             <input id="state" type="text" className="validate" onChange={ this.props.handleStateChange } />
             <label for="state">State</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s6">
             <input id="zip" type="number" className="validate" onChange={ this.props.handleZipChange } />
             <label for="zip">Zip</label>
           </div>
         </div>
         <button type="submit" >Submit</button>
       </form>
     </div>
    )
  }
});

{/*<div className="row">
   <div className="input-field col s6">
     <a href="#profile" className="btn waves-effect waves-light col s12 blue" onclick="Materialize.toast('Profile Updated', 4000)">Update</a>
   </div>
 </div>*/}

module.exports = ContactInfoEdit;
