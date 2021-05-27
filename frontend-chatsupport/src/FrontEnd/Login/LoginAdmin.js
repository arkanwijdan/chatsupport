import React from 'react';
import './LoginAdmin.css';
import Textfield from './Textfield';
import './textfield.css';
import Logo from './Logo';

function LoginAdmin(){
  var inputtext = "Masukkan Username Anda";
  return (
    <div className="form-content-back">
     <div className="form-content-left">
      <form className="form">
        <h1>LOGIN</h1>
        <div className="form-input-label">
        <h4>Username :</h4>
           <Textfield placeholder='text'/>
        <h4>Password :</h4>
        <Textfield/>
        </div>
          <button className="form-input-btn" type="submit">LOGIN</button>
      </form>
     </div>
     <div className="image-content-right">
      <Logo/>
       <p> Bantuan Layanan Kader</p>
     </div>
    </div>
  )
}

export default LoginAdmin
