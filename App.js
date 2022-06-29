import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenManager from './Src/Screens/ScreenManager';

const App = () => {
  return (
    <NavigationContainer>
      <ScreenManager />
    </NavigationContainer>
  );
};

export default App;
