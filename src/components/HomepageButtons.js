import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HelpIcon from '../assets/svg/HelpIcon';
import LoginIcon from '../assets/svg/LoginIcon';
import WebsiteIcon from '../assets/svg/WebsiteIcon';
import {moderateScale} from 'react-native-size-matters';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomepageButtons = () => {
  const navigation = useNavigation();
  const HelpButtonHandler = () => navigation.navigate('HelpScreen');
  const WebsiteButtonHandler = () => navigation.navigate('WebsiteScreen');
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
        <Text style={styles.Text}>ثبت نام</Text>
        <View style={styles.Icon}>
          <LoginIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.Button, styles.SecendryButton]}
        activeOpacity={0.7}
        onPress={HelpButtonHandler}>
        <Text style={[styles.Text, styles.SecendryText]}>راهنما</Text>
        <View style={styles.Icon}>
          <HelpIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.Button, styles.SecendryButton]}
        activeOpacity={0.7}
        onPress={WebsiteButtonHandler}>
        <Text style={[styles.Text, styles.SecendryText]}>وبسایت</Text>
        <View style={styles.Icon}>
          <WebsiteIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomepageButtons;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafaf9',
    width: '100%',
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(10),
    position: 'relative',
  },
  Text: {
    textAlign: 'center',
    fontFamily: 'Vazirmatn-Black',
    color: '#404CCF',
    fontSize: moderateScale(18),
    marginRight: moderateScale(10),
  },
  SecendryButton: {
    backgroundColor: '#404CCF',
    borderColor: '#FFF',
    borderWidth: moderateScale(2),
  },
  SecendryText: {
    color: '#FFFFFF',
  },
  Icon: {
    position: 'absolute',
    right: moderateScale(100),
  },
});
