import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import HelpScreenWebView from './HelpScreenWebView';

import BackHeader from '../../components/BackHeader';

const HelpScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BackHeader titleColor="#FFF" bgColor="#404CCF" iconColor="#404CCF" />
      <HelpScreenWebView />
    </SafeAreaView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    height: '100%',
    backgroundColor: '#FFF',
  },
});
