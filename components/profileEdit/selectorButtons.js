var React = require('react');

var SelectorButtons = React.createClass({
  render: function(){
    return(
      <div>
        <div>
        <ul>
          <li><button className="btn block waves-effect waves-light col s12 m12 l6 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'contactInfoEdit') }> Your Contact info</button></li>
          <li><button className="btn block waves-effect waves-light col s12 m12 l6 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'vehicleEdit') }>Your Vehicle</button></li>
          <li><button className="btn block waves-effect waves-light col s12 m12 l6 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'addPet') }>Add a Pet</button></li>
          <button className="btn block waves-effect waves-light col s12 m12 l6 blue" onClick={ this.props.toggleActiveComponent.bind(null, 'imageUpload') }>Add a Profile Image</button>
        </ul>
        </div>
      </div>

    )
  }
});

module.exports = SelectorButtons;
