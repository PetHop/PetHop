var React = require('react');

var ContactInfoEdit = React.createClass({

  render: function(){
    return (
    <div className="valign-wrapper">
     <div className="row">
       <form className="col s12" onSubmit={ this.props.handleContactInfoSubmit }>
           <div className="col s12 center">
            <h3>Add/Update Your Contact Info!</h3>
           </div>
           <div className="row">
             <div className="input-field col s12 m12 l12">
               <input id="phone" type="text" className="validate" onChange={ this.props.handlePhoneChange}/>
               <label htmlFor="phone">Telephone</label>
             </div>
           </div>
         <div className="row">
           <div className="input-field col s12 m12 l12">
             <input id="street" type="text" className="validate" onChange={ this.props.handleStreetChange } />
             <label htmlFor="street">Street Address</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s12 m12 l12">
             <input id="city" type="text" className="validate" onChange={ this.props.handleCityChange }/>
             <label htmlFor="city">City</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s12 m12 l12">
             <input id="state" type="text" className="validate" onChange={ this.props.handleStateChange } />
             <label htmlFor="state">State</label>
           </div>
         </div>
         <div className="row">
           <div className="input-field col s12 m12 l12">
             <input id="zip" type="text" className="validate" onChange={ this.props.handleZipChange } />
             <label htmlFor="zip">Zip</label>
           </div>
         </div>
         <button className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" >Submit</button>
       </form>
     </div>
    </div>
    )
  }
});

module.exports = ContactInfoEdit;
