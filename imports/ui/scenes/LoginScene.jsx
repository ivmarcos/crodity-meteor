import React from 'react';
import LoginSocialButton from 'crodity-ui/lib/buttons/LoginSocialButton';
import AddCheckButton from 'crodity-ui/lib/buttons/AddCheckButton';
import CrodityIcon from 'crodity-ui/lib/icons/CrodityIcon';
import Video from 'crodity-ui/lib/landing-page/Video';

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
