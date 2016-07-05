var React = require('react');

var SelectorButtons = React.createClass({
  render: function(){
    return(
      <div className="valign-wrapper">
        <div>
           <div className="row center">
            <button className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'contactInfoEdit') }> Update Info</button>
            <button className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'vehicleEdit') }>Add Vehicle</button>
            <button className="btn block waves-effect waves-light col s12 m12 l12 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'addPet') }>Add Pet</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SelectorButtons;
