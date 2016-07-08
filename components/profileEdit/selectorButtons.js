var React = require('react');

var SelectorButtons = React.createClass({
  render: function(){
    return(
           <div className="row center col s12 m3 l3">
            <button className="btn block waves-effect waves-light col s12 m3 l3 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'contactInfoEdit') }>Update Info</button>
            <button className="btn block waves-effect waves-light col s12 m3 l3 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'vehicleEdit') }>Add Vehicle</button>
            <button className="btn block waves-effect waves-light col s12 m3 l3 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'addPet') }>Add Pet</button>
            <button className="btn block waves-effect waves-light col s12 m3 l3 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'imageUpload') }>Profile Image</button>
          </div>
          )
        }
      });

module.exports = SelectorButtons;
