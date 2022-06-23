import {SafeAreaView, StyleSheet, Animated, View} from 'react-native';
import React from 'react';
import LogoInside from '../assets/svg/LogoInside';
import {colors} from '../assets/theme/Theme';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  const logoAnimated = new Animated.Value(0);
  const scaleAnimated = new Animated.Value(0);

  // Reset SliderStatus
  // AsyncStorage.setItem('isSliderFinished', 'false');

  const scale = scaleAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 5000],
  });

  const router = async () => {
    const isSliderFinished = await AsyncStorage.getItem('isSliderFinished');
    const isUserLoggedIn = await AsyncStorage.getItem('isUserLoggedIn');

    if (isSliderFinished === 'true') {
      if (isUserLoggedIn === 'true') {
        setTimeout(() => {
          navigation.replace('HomeScreen');
        }, 2250);
      } else {
        setTimeout(() => {
          navigation.replace('LoginScreen');
        }, 2250);
      }
    } else {
      setTimeout(() => {
        navigation.replace('SlidersScreen');
      }, 2250);
    }
  };

  setTimeout(() => {
    Animated.spring(scaleAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, 2000);

  React.useEffect(() => {
    Animated.spring(logoAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();

    router();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <View style={styles.Container}>
        <Animated.View
          style={[
            styles.LogoBg,
            {transform: [{scale: logoAnimated}, {scale}]},
          ]}>
          <LogoInside />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoBg: {
    backgroundColor: colors.primary,
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BgView: {
    borderRadius: 9999,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
  },
});
