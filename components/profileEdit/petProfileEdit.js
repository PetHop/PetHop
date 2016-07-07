var React = require('react');


var PetProfileEdit = React.createClass({

  handleImageUpload: function(img) {

    console.log(img)
    $.ajax({
      url: '/petpic',
      method: 'POST',
      // dataType: 'form',
      data: img,
      cache: false,
      contentType: false,
      processData: false,
      success: function(data) {
        console.log("success!");
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/petpic', status, err.toString())
      }.bind(this)
    })
  },

    componentDidMount: function(){
      $(document).ready(function() {
        $('select').material_select();
    });
  },
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

          // <form id="uploadForm"
          //     enctype="multipart/form-data"
          //       action="/petpic"
          //       method="post">
          //   <input type="file" name="petpic" multiple />
          //   <input type="submit" value="Upload Image" name="submit" />
          //   <input type='text' id='random' name='random' /><br/>
          //   <span id = "status"></span>
          // </form>
          //
          //

// {/*<div className="container">
// <form className="form-inline" onSubmit={  }>
//     <div className="form-group">
//       <label>Your Pet's Name</label>
//       <input type="text" className="form-control" placeholder="Your Pet's Name" onChange={  }   value={ }/>
//     </div>
//     <div className="form-group">
//       <label>What kind of animal is it?</label>
//       <input type="text" className="form-control" placeholder="Type of animal"
//       onChange={  } value={  }/>
//     </div>
//     <div className="form-group">
//       <label>Breed</label>
//       <input type="text" className="form-control" placeholder="Breed"
//       onChange={  } value={  }/>
//     </div>
//     <div className="form-group">
//       <label>Size</label>
//       <select name=''>
//         <option value="big">Big</option>
//         <option value="medium">Medium</option>
//         <option value="small">Small</option>
//       </select>
//     </div>
//     <div className="form-group">
//       <label>Pet Description</label>
//       <input type="text" className="form-control" placeholder="Description of your pet"
//       onChange={  } value={  }/>
//     </div>
//     <div className="form-group">
//       <label>Any Special Requirements?</label>
//       <input type="text" className="form-control" placeholder="Special requirements?"
//       onChange={  } value={  }/>
//     </div>
//       <button type="submit" className="btn btn-primary">Register</button>
//   </form>
// </div>*/}

//old form

// {/*<form onSubmit={ this.handleImageUpload } type="multipart/form-data">
//   <div className="form-group">
//     <label>Upload a profile image for your pet:</label>
//     <input type="file" name="petpic" enctype="multipart/form-data" method="post" accept-charset="utf-8" action="./../../uploads" method="post" placeholder="Select an Image"  />
//     </div>
//     <input type="submit" value="Post Picture" />
// </form>*/}
