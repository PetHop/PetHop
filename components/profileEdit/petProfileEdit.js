var React = require('react');


var PetProfileEdit = React.createClass({


  render: function(){
    return(
          <div className="valign-wrapper">
            <div className="row">
              <form className="col s12" onSubmit={ this.props.handlePetProfileSubmit } >
                <div className="col s12 center">
                 <h3>Add/Update Your Pet Info!</h3>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12">
                    <input id="name" type="text" className="validate" onChange={ this.props.handlePetNameChange } />
                    <label htmlFor="name">What is your pet's name?</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12">
                    <input id="type" type="text" className="validate" onChange={ this.props.handleTypeChange } />
                    <label htmlFor="type">What type of animal? (Dog? Cat? Bird?)</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12">
                    <input id="breed" type="text" className="validate" onChange={ this.props.handlePetBreedChange } />
                    <label htmlFor="breed">What is your companion's breed?</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12">
                    <input id="size" type="text" className="validate" onChange={ this.props.handlePetSizeChange } />
                    <label htmlFor="size">Size (big, medium, or small?)</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12">
                    <input id="description" type="text" className="validate" onChange={ this.props.handlePetDescChange } />
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12">
                    <input id="specialReq" type="text" className="validate" onChange={ this.props.handleSpecialReqChange } />
                    <label htmlFor="specialReq">Does he/she have any special requirements?</label>
                  </div>
                </div>
                <button className="btn waves-effect waves-light col s12 m12 l16 blue" type="submit" >Submit</button>
              </form>
            </div>
          </div>
    )
  }
});

module.exports = PetProfileEdit;
