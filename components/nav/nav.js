import React from 'react';
var Link = require('react-router').Link;
import ReactStormpath, { Authenticated, NotAuthenticated, LoginLink, LogoutLink, LogoutRoute } from 'react-stormpath';
import navLogo from 'file!./../../views/img/nav-logo.png';


var Nav = React.createClass({
  render: function(){
    return(
      <div className="nav">
        <img src={ navLogo } />
          <ul className="nav">
            <Link to='/'><li>Home</li></Link>
            <Link to ='feed'><li>View Listings</li></Link>
              <NotAuthenticated>
                <Link to='register'><li>Sign Up</li></Link>
                <Link to='login'><li>Log in</li></Link>
              </NotAuthenticated>
              <Authenticated>
                <Link to='profile'><li>Your Profile</li></Link>
                <Link to='pettrip'><li>Create Listing</li></Link>
                <LogoutLink redirectTo='/'>Logout</LogoutLink>
              </Authenticated>
          </ul>
     </div>
   )
  }
});

export default Nav;
