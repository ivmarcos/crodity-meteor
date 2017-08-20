import React from 'react';
import LoginSocialButton from 'crodity-react/lib/buttons/LoginSocialButton';
import RoundFontIcon from 'crodity-react/lib/icons/RoundFontIcon';


const LoginScene = () => (

  <div className="crd-login-scene">

    <div className="crd-login-scene-social">

      <LoginSocialButton
        label="connect with twitter"
        className="crd-btn-login-twitter"
      >
        <RoundFontIcon className="fa fa-twitter" />
      </LoginSocialButton>

      <LoginSocialButton
        label="connect with facebook"
        className="crd-btn-login-facebook"
      >
        <RoundFontIcon className="fa fa-facebook" />
      </LoginSocialButton>


      <LoginSocialButton
        label="connect with email"
        className="crd-btn-login-email"
      >
        <RoundFontIcon className="fa fa-envelope-o" />
      </LoginSocialButton>

    </div>


  </div>
);


export default LoginScene;
