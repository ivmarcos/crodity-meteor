import React from 'react';

import {
  LoginSocialButton,
  AddCheckButton,
  CrodityIcon,
  Video,
} from 'crodity-ui';

const LoginScene = () => (

  <div>
    <CrodityIcon />
    <LoginSocialButton
      type="facebook"
      label="connect with facebook"
      withIcon
      onClick={() => console.log('ok')}
    />
    <LoginSocialButton
      type="twitter"
      withIcon
      label="connect with twitter"
      onClick={() => console.log('ok')}
    />
    <LoginSocialButton
      type="email"
      label="connect with email"
      onClick={() => console.log('ok')}
    />
    <AddCheckButton onClick={() => console.log('ok')} />
    <AddCheckButton onClick={() => console.log('ok')} added />
    <Video src="https://www.youtube.com/embed/zWk5a-lDe8c" />
  </div>

);


export default LoginScene;
