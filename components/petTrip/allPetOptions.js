var React = require('react');

var PetOptionCard = require('./petOptionCard.js');

var AllPetOptions = function(props){
  console.log("AllPetOptions is rendering with these props", props);
  var petOptions = props.currentUser.pets.map(function(item){
    return <PetOptionCard name={ item.petName }
                          type={ item.type }
                          breed={ item.petBreed }
                          size={ item.petSize }
                          key={ item._id }
                          id={ item._id }
                          handleTravelerCheckbox={ props.handleTravelerCheckbox }
                          />

  })
  return(
    <div>
      { petOptions }
    </div>
  )
};

module.exports = AllPetOptions;
