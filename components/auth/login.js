import React from 'react';
import ReactStormpath, { LoginForm } from 'react-stormpath';
var logo = require('file!./../../views/img/login-logo.png');


function Login() {
  return (
   <div className="login">
     <LoginForm redirectTo='/feed' >

     <div className="row">
        <div className="col s12 m12 l6 center">
          <div className='login'>
            <h1>Login</h1>
            <br/>
            <p>
              <label htmlFor="username">Email</label><br />
              <input id="username" type="text" name="username" placeholder="enter username"/>
            </p>
            <p>
              <label htmlFor="password">Password</label><br />
              <input id="password" type="password" name="password" placeholder="enter password" />
            </p>
            <p spIf="form.error">
              <strong>Error:</strong><br />
              <span spBind="form.errorMessage" />
            </p>
            <p>
              <input className="btn waves-effect waves-light col s12 m12 l6 blue" type="submit" value="Login" />
            </p>
          </div>
        </div>
      </div>
         </LoginForm>
       </div>
 );
}

export default Login;
