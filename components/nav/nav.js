import React from 'react';
var Link = require('react-router').Link;
import ReactStormpath, { Authenticated, NotAuthenticated, LoginLink, LogoutLink, LogoutRoute } from 'react-stormpath';
import navLogo from 'file!./../../views/img/nav-logo.png';
import {Navbar, NavItem, Icon} from 'react-materialize';

var Nav = React.createClass({
  render: function(){
    return(
    //   <div className="nav">
    //       <ul className="nav">
    //         <img src={ navLogo } />
    //         <NotAuthenticated>
    //           <Link to='login'><li>Log in</li></Link>
    //           <Link to='register'><li>Sign Up</li></Link>
     //
    //         </NotAuthenticated>
    //         <Link to ='feed'><li>View Listings</li></Link>
    //         <Link to='/'><li>Home</li></Link>
     //
    //           <Authenticated>
    //             <Link to='profile'><li>Your Profile</li></Link>
    //             <Link to='pettrip'><li>Create Listing</li></Link>
    //             <Link to='profileedit'><li>Profile Settings</li></Link>
    //             <LogoutLink redirectTo='/'>Logout</LogoutLink>
    //           </Authenticated>
    //       </ul>
    //  </div>
          // <Navbar brand='PetHop' right>
          //     <NavItem href='/'>Home</NavItem>
          //     <NavItem href='#feed'>View Listings</NavItem>
          //   <NotAuthenticated>
          //     <NavItem href='#register'>Sign Up</NavItem>
          //     <NavItem href='#login'>Login</NavItem>
          //   </NotAuthenticated>
          //   <Authenticated>
          //     <NavItem href='#register'>Settings</NavItem>
          //     <LogoutLink href='#'>Logout</LogoutLink>
          //   </Authenticated>
          // </Navbar>
<nav>
  <div className="nav-wrapper orange darken-1">
    <a href="#" className="brand-logo"><img src={ navLogo } /></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
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
</nav>

   )
  }
});

export default Nav;
