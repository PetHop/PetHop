var React = require('react');


var VehicleEdit = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Update Your Vehicle Information!</h3>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <input id="vehicleType" type="text" className="validate"/>
                  <label for="vehicleType">What type of vehicle (car, truck, van?)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <input id="make" type="text" className="validate"/>
                  <label for="make">Vehicle make (Ford, BMW, etc...)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <input id="model" type="text" className="validate"/>
                  <label for="model">What model is it?</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <input id="year" type="text" className="validate"/>
                  <label for="year">Year?</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l6">
                  <input id="color" type="number" className="validate"/>
                  <label for="color">What color is it?</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light col s12 m12 l6 blue" type="submit" >Submit</button>
            </form>
          </div>
      </div>
    )
  }
})

module.exports = VehicleEdit;
