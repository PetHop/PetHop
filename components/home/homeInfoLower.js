import React from 'react';
import parallax1 from 'file!./../../views/img/pexels-photo-26128-large.jpg';

var InfoLower = React.createClass({
  render: function() {
    return (

      <div className="parallax-container">
        <div className="parallax">
          <img src={ parallax1 }/>
        </div>

      </div>
   )
  }
});

export default InfoLower;
