import React from 'react';

var year = new Date().getFullYear();

var Footer = React.createClass({
  render: function () {
    return (
              <footer className="page-footer orange darken-1">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <h5 className="white-text">The Pet Hop Mission</h5>
                      <p className="grey-text text-lighten-4">Our goal is to connect your furry friends with a safe and reliable travel. Think of us as Uber for your pets.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                      <h5 className="white-text">Links</h5>
                      <ul>
                        <li><a className="grey-text text-lighten-3" href="#">Home</a></li>
                        <li><a className="grey-text text-lighten-3" href="#feed">View Listings</a></li>
                        <li><a className="grey-text text-lighten-3" href="#profile">Profile</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                  © { year } PetHop.co | All Rights Reserved
                  </div>
                </div>
              </footer>
   );
  }
});

export default Footer;
