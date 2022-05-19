import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {moderateScale} from 'react-native-size-matters';
import WebView from 'react-native-webview';

const HomepageSlider = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={true}
      autoplay={true}
      dot={
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.2)',
            width: moderateScale(20),
            height: moderateScale(5),
            borderRadius: 9999,
            margin: moderateScale(5),
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: 'white',
            width: moderateScale(20),
            height: moderateScale(5),
            borderRadius: 9999,
            margin: moderateScale(5),
          }}
        />
      }>
      <View style={styles.slide}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

export default HomepageSlider;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
