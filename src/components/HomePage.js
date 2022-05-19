import {StyleSheet, View, SafeAreaView} from 'react-native';
import * as React from 'react';
import Slider from './HomepageSlider';
import HomepageButtons from './HomepageButtons';
import {moderateScale} from 'react-native-size-matters';
import WebView from 'react-native-webview';

const HomePage = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Slider />
        <HomepageButtons />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: moderateScale(25),
  },
});
