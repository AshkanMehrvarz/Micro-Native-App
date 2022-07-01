// Base
import {SafeAreaView, Animated, View} from 'react-native';
import React from 'react';

// Packages
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Ashkan
import LogoInside from '../../Assets/Svg/LogoInside';
import {styles} from './Style';

const SplashScreen = () => {
  // Variables
  const navigation = useNavigation();
  const logoAnimated = new Animated.Value(0);
  const scaleAnimated = new Animated.Value(0);
  const scale = scaleAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 5000],
  });

  // Reset SliderStatus
  AsyncStorage.setItem('isSliderFinished', 'false');
  AsyncStorage.setItem('isUserLoggedIn', 'false');

  // Functions
  const router = async () => {
    const isSliderFinished = await AsyncStorage.getItem('isSliderFinished');
    const isUserLoggedIn = await AsyncStorage.getItem('isUserLoggedIn');

    if (isSliderFinished === 'true') {
      if (isUserLoggedIn === 'true') {
        setTimeout(() => {
          navigation.replace('Home');
        }, 2250);
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 2250);
      }
    } else {
      setTimeout(() => {
        navigation.replace('Intro');
      }, 2250);
    }
  };

  // Timers
  setTimeout(() => {
    Animated.spring(scaleAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, 2000);

  // UseEffects
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
