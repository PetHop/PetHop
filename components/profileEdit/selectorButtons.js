var React = require('react');

var SelectorButtons = React.createClass({
  render: function(){
    return(
      <div className="valign-wrapper">
        <div>
           <ul className="row center col s12 m12 l12">
            <li><button className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'contactInfoEdit') }> Update Info</button></li>
            <li><button className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'vehicleEdit') }>Add Vehicle</button></li>
            <li><button className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'addPet') }>Add Pet</button></li>
            <li><button className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'imageUpload') }>Add Profile Image</button></li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = SelectorButtons;
