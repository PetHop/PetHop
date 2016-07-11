import React from 'react';
import ReactStormpath, { LoginForm } from 'react-stormpath';
var logo = require('file!./../../views/img/pethop_logo.png');


function Login() {
  return (
 <div className="valign-wrapper">
   <div className="login">
     <LoginForm redirectTo='/feed' className="col s12 m12 l12" >
     <div className="row col 12">
        <div className="col s12 m12 l12">
          <div className="center">
            <img src={ logo }alt="" className="responsive-img"/>
            <h3>Login</h3>
          </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <input id="email" type="email" className="validate" name="username"/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <input id="password" type="password" className="validate" name="password"/>
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <p spIf="form.error">
              <strong>Error:</strong><br />
              <span spBind="form.errorMessage" />
            </p>
            <p>
              <input className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" value="Login" />
            </p>
          </div>
        </div>
         </LoginForm>
         </div>
       </div>
 );
}

export default Login;
