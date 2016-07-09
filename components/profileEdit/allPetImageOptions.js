var React = require('react');

var PetOptionCard = require('./petImageOptionCard.js');


var AllPetOptions = React.createClass({




  render: function(){
    console.log("AllPetOptions is rendering with imgserver?", this.props.imgServer);
    var that = this;
    var petOptions = this.props.currentUserExpanded.pets.map(function(item){
      return <PetOptionCard pet={ item }
                            key={ item._id }
                            imgServer={ that.props.imgServer }
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
