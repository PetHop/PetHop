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

  getInitialState(){
    return {
      petName: null,
      type: null,
      petSize: null,
      petBreed: null,
      petDesc: null,
      specialReq: null,
      }
  },
  handleStreetChange: function(e){
    this.setState({ street: e.target.value })
  },
  handleCityChange: function(e){
    this.setState({ city: e.target.value })
  },
  handleStateChange: function(e){
    this.setState({ state: e.target.value })
  },
  handleZipChange: function(e){
    this.setState({ zip: e.target.value })
  },

  handleFormSubmit: function(e){
    e.preventDefault(); //prevents page refresh
    var user = {};
    user.street = this.state.street;
    user.zip = this.state.zip;
    user.city = this.state.city;
    user.state = this.state.state;

    this.handleProfileUpdate(user);
    this.setState({ street: "", city: "", zip: "", state: ""});
  },

  render: function(){
    return(
      <div>
        <h1>Add a profile for your pet!</h1>

          <form id="uploadForm"
              enctype="multipart/form-data"
                action="/petpic"
                method="post">
            <input type="file" name="petpic" multiple />
            <input type="submit" value="Upload Image" name="submit" />
            <input type='text' id='random' name='random' /><br/>
            <span id = "status"></span>
          </form>



        </div>
    )
  }
});

export default PetProfileEdit;


{/*<div className="container">
<form className="form-inline" onSubmit={  }>
    <div className="form-group">
      <label>Your Pet's Name</label>
      <input type="text" className="form-control" placeholder="Your Pet's Name" onChange={  }   value={ }/>
    </div>
    <div className="form-group">
      <label>What kind of animal is it?</label>
      <input type="text" className="form-control" placeholder="Type of animal"
      onChange={  } value={  }/>
    </div>
    <div className="form-group">
      <label>Breed</label>
      <input type="text" className="form-control" placeholder="Breed"
      onChange={  } value={  }/>
    </div>
    <div className="form-group">
      <label>Size</label>
      <select name=''>
        <option value="big">Big</option>
        <option value="medium">Medium</option>
        <option value="small">Small</option>
      </select>
    </div>
    <div className="form-group">
      <label>Pet Description</label>
      <input type="text" className="form-control" placeholder="Description of your pet"
      onChange={  } value={  }/>
    </div>
    <div className="form-group">
      <label>Any Special Requirements?</label>
      <input type="text" className="form-control" placeholder="Special requirements?"
      onChange={  } value={  }/>
    </div>
      <button type="submit" className="btn btn-primary">Register</button>
  </form>
</div>*/}

//old form

{/*<form onSubmit={ this.handleImageUpload } type="multipart/form-data">
  <div className="form-group">
    <label>Upload a profile image for your pet:</label>
    <input type="file" name="petpic" enctype="multipart/form-data" method="post" accept-charset="utf-8" action="./../../uploads" method="post" placeholder="Select an Image"  />
    </div>
    <input type="submit" value="Post Picture" />
</form>*/}
