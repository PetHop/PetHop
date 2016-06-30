var React = require('react');

var SelectorButtons = React.createClass({
  render: function(){
    return(
      <div>
        <div>
          <button onClick={ this.props.toggleActiveComponent.bind(null, 'contactInfoEdit') }> Your Contact info</button>
          <button onClick={ this.props.toggleActiveComponent.bind(null, 'vehicleEdit') }>Your Vehicle</button>
          <button onClick={ this.props.toggleActiveComponent.bind(null, 'addPet') }>Add a Pet</button>
        </div>
      </div>
    )
  }
});

module.exports = SelectorButtons;
