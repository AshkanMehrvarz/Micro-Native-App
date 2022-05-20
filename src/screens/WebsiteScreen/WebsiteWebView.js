import WebView from 'react-native-webview';
import {ActivityIndicator} from 'react-native';
import * as React from 'react';

const WebsiteWebView = () => {
  const loading = () => (
    <ActivityIndicator
      size="large"
      color="#404CCF"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    />
  );
  return (
    <WebView
      renderLoading={loading}
      startInLoadingState={true}
      source={{
        uri: 'https://google.com',
      }}
    />
  );
};

export default WebsiteWebView;
