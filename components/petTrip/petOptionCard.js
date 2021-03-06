var React = require('react');

var PetOptionCard = React.createClass({
  render: function(){
    console.log(this.props.handleTravelerCheckbox);
    return (
      <div>
        <input type="checkbox" className="filled-in" id={ this.props.id } value={ this.props.id } onChange={ this.props.handleTravelerCheckbox }/>
        <label htmlFor={ this.props.id }>{ this.props.name } the { this.props.breed } { this.props.type }</label>
      </div>
    );
  }
});

module.exports = PetOptionCard;
