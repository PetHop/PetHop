import React from 'react';


var PicAndName = React.createClass({
  render: function () {
    return (
     <div className="prolfilePicAndName">
       <img classname="profileOwnerPic" src='#' />
       <h2>{this.props.firstName} {this.props.lastName}</h2>


     </div>
   )
  }
});



export default PicAndName;
