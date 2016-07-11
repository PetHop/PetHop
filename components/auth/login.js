import React from 'react';
import ReactStormpath, { LoginForm } from 'react-stormpath';
var logo = require('file!./../../views/img/pethop_logo.png');


function Login() {
  return (
 <div className="valign-wrapper container">
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
            {/*<p>
              <label htmlFor="password">Password</label><br />
              <input id="password" type="password" name="password" placeholder="enter password" />
            </p>*/}
            <p spIf="form.error">
              <strong>Error:</strong><br />
              <span spBind="form.errorMessage" />
            </p>
            <p>
              <input className="btn waves-effect waves-light col s12 m12 l12 blue" type="submit" value="Login" />
            </p>
          </div>
        </div>
      {/*<div>
          <div className="center">
           <h3>Login</h3>
          </div>
          <div className="row">
            <div className="input-field col s12 m12 l6">
              <input id="email" type="email" className="validate"/>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row col s12 m12 l6">
            <div className="input-field col s12 m12 l6">
              <input id="password" type="password" className="validate"/>
              <label for="password">Password</label>
            </div>
          </div>
    </div>
    <button className="btn waves-effect waves-light col s12 m12 l6 blue" type="submit" value="Login" >Submit</button>*/}
         </LoginForm>
         </div>
       </div>
 );
}

export default Login;
