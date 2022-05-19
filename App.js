import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import HomePage from './src/components/HomePage';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <HomePage />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#404CCF',
    height: '100%',
  },
});
