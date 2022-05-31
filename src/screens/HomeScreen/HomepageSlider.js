import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {moderateScale} from 'react-native-size-matters';

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
        <Image
          style={styles.SliderImage}
          source={require('../../assets/images/s2.png')}
        />
        <Text style={styles.Text}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Text>
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.SliderImage}
          source={require('../../assets/images/s3.png')}
        />
        <Text style={styles.Text}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Text>
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.SliderImage}
          source={require('../../assets/images/s1.png')}
        />
        <Text style={styles.Text}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Text>
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
  SliderImage: {
    width: '75%',
    height: '50%',
    resizeMode: 'contain',
  },
  Text: {
    fontFamily: 'Vazirmatn-Medium',
    textAlign: 'center',
    fontSize: moderateScale(16),
    paddingHorizontal: moderateScale(25),
    marginBottom: moderateScale(50),
    marginTop: moderateScale(25),
    color: '#FFF',
  },
});
