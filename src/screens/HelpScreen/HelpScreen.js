import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import HelpScreenWebView from './HelpScreenWebView';
import BackHeader from '../../components/BackHeader';

const HelpScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BackHeader titleColor="#333" bgColor="transparent" iconColor="#333" />
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
