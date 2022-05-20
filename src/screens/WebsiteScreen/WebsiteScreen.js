import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import BackHeader from '../../components/BackHeader';
import WebsiteWebView from './WebsiteWebView';

const HelpScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BackHeader />
      <WebsiteWebView />
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