import React from 'react';
var Link = require('react-router').Link;
import ReactStormpath, { Authenticated, NotAuthenticated, LoginLink, LogoutLink, LogoutRoute } from 'react-stormpath';
import navLogo from 'file!./../../views/img/nav-logo.png';

var Nav = React.createClass({
  componentDidMount: function(){
    $(".button-collapse").sideNav();
  },
  render: function(){
    return(
        <nav>
            <div className="nav-wrapper orange darken-1 z-depth-1">
              <a href="/" className="brand-logo">PetHop</a>
              <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                 <Link to='/'><li>Home</li></Link>
                 <Link to ='feed'><li>View Listings</li></Link>
              <NotAuthenticated>
                 <Link to='register'><li>Sign Up</li></Link>
                 <Link to='login'><li>Log in</li></Link>
              </NotAuthenticated>
              <Authenticated>
                 <Link to='profile'><li>Your Profile</li></Link>
                 <Link to='profileedit'><li>Update Profile</li></Link>
                 <LogoutLink redirectTo='/'><li>Logout</li></LogoutLink>
              </Authenticated>
              </ul>
            </div>
               <ul id="slide-out" className="side-nav">
                  <Link to='/'><li>Home</li></Link>
                  <Link to ='feed'><li>View Listings</li></Link>
               <NotAuthenticated>
                  <Link to='register'><li>Sign Up</li></Link>
                  <Link to='login'><li>Log in</li></Link>
               </NotAuthenticated>
               <Authenticated>
                  <Link to='profile'><li>Your Profile</li></Link>
                  <Link to='profileedit'><li>Update Profile</li></Link>
                  <LogoutLink redirectTo='/'><li>Logout</li></LogoutLink>
               </Authenticated>
              </ul>
          </nav>


   )
  }
});

export default Nav;
