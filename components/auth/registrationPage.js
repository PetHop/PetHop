import React from 'react';
import ReactStormpath, { RegistrationForm, LoginLink } from 'react-stormpath';
var logo = require('file!./../../views/img/pethop_logo.png');
import Footer from './../footer/footer.js';

var Registration = React.createClass({

  render: function(){
    return (
      <div>
    <div className="valign-wrapper container">
     <div className="registration">
       <RegistrationForm>
        <div spIf="account.created">
          <span spIf="!account.enabled">To verify your account, click the verification link that we sent to your email then proceed to login by going to <LoginLink />.</span>
        </div>
        <div spIf="!account.created">
          <p spIf="form.error">
            <strong>Error:</strong><br />
            <span spBind="form.errorMessage" />
          </p>
          <div className="row">
             <div className="col s12 m12 l12">
              <div className="center">
            <img src={ logo }alt="" className="responsive-img"/>
               <h3>Register</h3>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="firstname" type="text" className="validate" name="givenName"/>
                  <label htmlFor="firstname">First Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="lastname" type="text" className="validate" name="surname"/>
                  <label htmlFor="lastname">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="email" type="email" className="validate" name="email"/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="password" type="password" className="validate" name="password"/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>

            <button href="#feed" className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" value="Register" >Sign Up</button>

        </div>
        </div>
        </div>
      </RegistrationForm>
    </div>
  </div>
    <Footer />
  </div>
  );
}
});

export default Registration;
