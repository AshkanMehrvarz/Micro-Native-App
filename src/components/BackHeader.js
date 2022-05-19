import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import BackIcon from '../assets/svg/BackIcon';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
const BackHeader = () => {
  const navigation = useNavigation();

  const backIconHandler = () => navigation.goBack();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.Icon}
        activeOpacity={0.7}
        onPress={backIconHandler}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.Title}>بازگشت</Text>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#404CCF',
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
  },
  Title: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(16),
    color: '#FFF',
    marginLeft: moderateScale(10),
  },
  Icon: {
    backgroundColor: 'white',
    padding: moderateScale(5),
    borderRadius: moderateScale(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(10),
  },
});
