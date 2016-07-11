import React from 'react';

var ProfileListing = React.createClass({

  petLister: function(){
    console.log('hello petLister', this.props.pets);
    var petList = this.props.pets.map(function(item){
      return(
        <div className="row">
          <img src={ item.petProfileImage } />
          <p>{ item.petName } the { item.petBreed } { item.type }</p>
        </div>
      )
    });
    return petList;
  },


  render: function () {
    return (
     <div className="profilelisting">
       <h5>Your furry friends!</h5>
       { this.petLister() }
     </div>
   )
  }
});


export default ProfileListing;
