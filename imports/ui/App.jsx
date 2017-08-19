import React from 'react';
import CrodityProvider from 'crodity-react/lib/provider/Provider';
import LoginSocialButton from 'crodity-react/lib/buttons/LoginSocialButton';
import RoundFontIcon from 'crodity-react/lib/icons/RoundFontIcon';


const App = () => (
  <CrodityProvider>
      <div>
        <LoginSocialButton
          label="connect with twitter"
          className="crd-btn-login-twitter"
        >
         
        </LoginSocialButton>

         <RoundFontIcon className="fa fa-twitter"  color="#0486b2"/>
      </div>
  </CrodityProvider>
);

export default App;
