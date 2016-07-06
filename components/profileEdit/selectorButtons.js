var React = require('react');

var SelectorButtons = React.createClass({
  render: function(){
    return(
      <div className="valign-wrapper">
           <ul className="row center col s12 m12 l12">
            <li className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'contactInfoEdit') }> Update Info</li>
            <li className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'vehicleEdit') }>Add Vehicle</li>
            <li className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'addPet') }>Add Pet</li>
            <li className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'imageUpload') }>Add Profile Image</li>
          </ul>
      </div>
    )
  }
});

module.exports = SelectorButtons;
