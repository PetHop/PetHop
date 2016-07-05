var React = require('react');


var VehicleEdit = React.createClass({
  render: function(){
    return(
      <div className="valign-wrapper">
          <div className="row">
            <form className="col s12" onSubmit={ this.props.vehicleEditSubmit }>
              <div className="col s12 center">
               <h3>Add/Update Your Vehicle Info!</h3>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="vehicleType" type="text" className="validate" onChange={ this.props.handlePetNameChange }/>
                  <label for="vehicleType">What type of vehicle (car, truck, van?)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="make" type="text" className="validate" onChange={ this.props.handlePetNameChange }/>
                  <label for="make">Vehicle make (Ford, BMW, etc...)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="model" type="text" className="validate" onChange={ this.props.handlePetNameChange }/>
                  <label for="model">What model is it?</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="year" type="text" className="validate" onChange={ this.props.handlePetNameChange }/>
                  <label for="year">Year?</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="color" type="text" className="validate" onChange={ this.props.handlePetNameChange }/>
                  <label for="color">What color is it?</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" >Submit</button>
            </form>
          </div>
        </div>
    )
  }
})

module.exports = VehicleEdit;
