var React = require('react');

var PetOptionCard = React.createClass({
  render: function(){
    return (
      <div>
        <ul>
          <li>{ this.props.name }</li>
          <li>{ this.props.size }</li>
          <li>{ this.props.type }</li>
          <li>{ this.props.breed }</li>
          <li>{ this.props.key }</li>
          <li>{ this.props._id }</li>

        </ul>
      </div>
    );
  }
});

module.exports = PetOptionCard;
