import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import BackHeader from '../../components/BackHeader';
import WebsiteWebView from './WebsiteWebView';

const HelpScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BackHeader titleColor="#333" bgColor="transparent" iconColor="#333" />
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
