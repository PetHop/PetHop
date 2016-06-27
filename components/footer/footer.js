import React from 'react';

var year = new Date().getFullYear();

var Footer = React.createClass({
  render: function () {
    return (
     <div className="footer">
       <p>Copyright { year } MT Code School</p>
     </div>
   );
  }
});

export default Footer;
