import React from 'react';
import CrodityProvider from 'crodity-react/lib/provider/Provider';
import Routes from '/imports/ui/Routes';

const App = () => (
  <CrodityProvider>
     <Routes/>
  </CrodityProvider>
);

export default App;
