import React from 'react';

var PicAndName = React.createClass({

  render: function () {
    console.log("picandname", this.props);


    return (
     <div className="profilePicAndName">
      <div className="cover-photo">
       <img className="responsive-img" src={ this.props.coverPhoto } />
      </div>
      <div className="info-wrapper">
       <div className="col s12 m12 offset-m2 l12 offset-l12">
        <div className="grey lighten-3">
          <div className="row valign-wrapper">
           <img className="circle responsive-img z-depth-1" id="profile-user" height="150" width="150" src={this.props.userImg} />
            <div className="col s12">
              <span className="black-text center" id="user-name">
                <h4>{this.props.firstName} {this.props.lastName}</h4>
              </span>
                <a className="waves-effect waves-light btn blue right" href="#profileedit" id="edit-btn"><i className="material-icons right">settings</i>Edit Profile</a>
            </div>
          </div>
        </div>
      </div>
      </div>
     </div>
   )
  }
});



export default PicAndName;
