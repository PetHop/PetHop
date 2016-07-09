import React from 'react';


var PicAndName = React.createClass({
  render: function () {
    console.log("picandname", this.props);

    return (
     <div className="profilePicAndName">
       <img className="headerImage" src={ this.props.coverPhoto } />
       <img className="profileOwnerPic" src={this.props.userImg} />
       <h2>{this.props.firstName} {this.props.lastName}</h2>
     </div>
   )
  }
});



export default PicAndName;
