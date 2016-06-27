var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
// var Router = ReactRouter.Router; // replace with stormpath later
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
import ReactStormpath, { Router, AuthenticatedRoute, LoginRoute, LoginLink, HomeRoute } from 'react-stormpath';

import TripDetails from './../tripDetails/tripDetails';
import Feed from './../feed/feed';
import Footer from './../footer/footer';
import Home from './../home/home';
import Login from './../auth/login';
import Nav from './../nav/nav';
import PetTrip from './../petTrip/petTrip';
import ProfileEdit from './../profileEdit/profileEdit';
import RegistrationPage from './../auth/registrationPage';
import Main from './../main.js';
import Profile from './../profile/profile.js';

ReactStormpath.init({});

ReactDOM.render(
  (<Router history={hashHistory }>
      <Route path='/' component={ Main }>
        <IndexRoute component={ Home }/>
        <Route path='/feed' component={ Feed }/>
        <Route path='/profile' component={ Profile }/>
        <Route path='/tripdetails' component={ TripDetails }/>
        <Route path='/pettrip' component={ PetTrip }/>
        <AuthenticatedRoute path='/profileedit' component={ ProfileEdit }/>
        <LoginRoute path='/login' component={ Login }/>
        <Route path='/register' component={ RegistrationPage }/>
      </Route>
  </Router>),
  document.getElementById('app')
);
