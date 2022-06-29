import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {ActivityIndicator} from 'react-native';
import BackHeader from '../../../Components/BackHeader';

const HelpScreen = () => {
  const loading = () => (
    <ActivityIndicator
      size="large"
      color="#404CCF"
      style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
    />
  );
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BackHeader titleColor="#333" bgColor="transparent" iconColor="#333" />
      <WebView
        renderLoading={loading}
        startInLoadingState={true}
        source={{
          uri: 'https://trexmine.com',
        }}
      />
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
