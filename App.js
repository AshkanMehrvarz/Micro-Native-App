import {StyleSheet, SafeAreaView} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenManager from './src/screens/ScreenManager';

const App = () => {
  return (
    <NavigationContainer>
      <ScreenManager />
    </NavigationContainer>
  );
};

export default App;
