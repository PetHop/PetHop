import React from 'react';

var ProfileListing = React.createClass({

  petLister: function(){
    var petList = this.props.pets.map(function(item){
      return(
        <div className="col s12 m12 l4">
          <div className="card z-depth-1">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={ item.petProfileImage } />
                <div className="card-content">
                  <h5>{ item.petName } the { item.petBreed } { item.type }</h5>
                </div>
            </div>
          </div>
        </div>
      )
    });
    return petList;
  },

  render: function () {
    return (
      <div className="col s12">
        <div className="row">
         <div className="profilelisting">
           <h4>Your furry friends!</h4>
           { this.petLister() }
         </div>
        </div>
      </div>
   )
  }
});


export default ProfileListing;


{/*<div className="row">
  <img src={ item.petProfileImage } />
  <p>{ item.petName } the { item.petBreed } { item.type }</p>
</div>*/}
