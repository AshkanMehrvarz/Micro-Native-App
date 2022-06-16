import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Sliders from '../HomeScreen/HomepageSlider';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../assets/theme/Theme';

const LoginWithOTP = () => {
  const navigation = useNavigation();
  const getMobile = () => navigation.navigate('GetMobile');
  return (
    <SafeAreaView style={{backgroundColor: '#404CCF'}}>
      <View style={styles.Container}>
        <Sliders />
      </View>
    </SafeAreaView>
  );
};

export default LoginWithOTP;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    height: '100%',
    paddingVertical: moderateScale(25),
    // paddingHorizontal: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
