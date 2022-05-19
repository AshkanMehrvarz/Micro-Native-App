import WebView from 'react-native-webview';
import * as React from 'react';

const HelpScreenWebView = () => {
  return (
    <WebView
      source={{
        uri: 'https://trexmine.com',
      }}
    />
  );
};

export default HelpScreenWebView;
