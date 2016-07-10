var React = require('react');
var PetOptionCard = require('./petOptionCard.js');


var AllPetOptions = React.createClass({
  render: function(){
    var that = this;
    console.log("AllPetOptions is rendering with these props", this.props);
    var petOptions = this.props.currentUser.pets.map(function(item){
      return <PetOptionCard name={ item.petName }
                            type={ item.type }
                            breed={ item.petBreed }
                            size={ item.petSize }
                            key={ item._id }
                            id={ item._id }
                            handleTravelerCheckbox={ that.props.handleTravelerCheckbox }
                            />

    })
    return(
      <div>
        { petOptions }
      </div>
    )
  }
});

module.exports = AllPetOptions;
