import React from 'react';
import ReactStormpath, { LoginForm } from 'react-stormpath';
var logo = require('file!./../../views/img/login-logo.png');


function Login() {
  return (
   <div className="login">
    <img className='logo' src={ logo }/>
     <LoginForm redirectTo='/feed' >
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
               <input type="submit" value="Login" />
             </p>
           </div>
           {/*<div className="row">
           <form className="col s12">
             <div className="row">
               <div className="input-field col s6">
                 <input id="street_address" type="text" className="validate"/>
                 <label for="street_address">First Name</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s6">
                 <input id="last_name" type="text" className="validate"/>
                 <label for="last_name">Last Name</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s6">
                 <input id="email" type="email" className="validate"/>
                 <label for="email">Email</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s6">
                 <input id="password" type="password" className="validate"/>
                 <label for="password">Password</label>
               </div>
             </div>
           </form>
         </div>*/}
         </LoginForm>
       </div>
 );
}

export default Login;
