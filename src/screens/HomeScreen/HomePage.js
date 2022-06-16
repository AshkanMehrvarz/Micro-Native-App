import {StyleSheet, View, SafeAreaView} from 'react-native';
import Slider from './HomepageSlider';
import * as React from 'react';
import HomepageButtons from './HomepageButtons';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../assets/theme/Theme';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.Container}>
        <Slider />
        <HomepageButtons />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#404CCF',
  },
  Container: {
    backgroundColor: colors.primary,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: moderateScale(25),
  },
});
