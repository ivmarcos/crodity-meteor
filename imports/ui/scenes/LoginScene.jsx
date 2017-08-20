import React from 'react';
import LoginSocialButton from 'crodity-react/lib/buttons/LoginSocialButton';
import LoginButton from 'crodity-react/lib/buttons/LoginButton';


const LoginScene = () => (

  <div className="crd-login-scene">

    <div className="crd-login-logo" />

    <div className="crd-login-social">

      <LoginSocialButton
        label="connect with facebook"
        type="facebook"
        withIcon
      />

      <LoginSocialButton
        label="connect with twitter"
        type="twitter"
        withIcon
      />

      <LoginSocialButton
        label="connect with e-mail"
        type="email"
        withIcon
      />

    </div>

    <div className="crd-login-sign">

      <LoginButton>
        Sign in
      </LoginButton>

    </div>


  </div>


);


export default LoginScene;
