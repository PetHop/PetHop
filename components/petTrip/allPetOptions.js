var React = require('react');

var PetOptionCard = require('./petOptionCard.js');

var AllPetOptions = function(props){
  var petOptions = props.pets.map(function(item){
    return <PetOptionCard />

  })
  return(
    <div>
      { petOptions }
    </div>
  )
};

module.exports = AllPetOptions;
