import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../../Assets/Theme/Index';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(25),
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    height: moderateScale(50),
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    shadowColor: '#000',
  },
  Text: {
    textAlign: 'center',
    fontFamily: 'Vazirmatn-Black',
    color: '#404CCF',
    fontSize: moderateScale(18),
    marginRight: moderateScale(10),
  },
  SecendryButton: {
    backgroundColor: 'transparent',
    borderColor: '#FFF',
    borderWidth: moderateScale(2),
  },
  SecendryText: {
    color: '#FFFFFF',
  },
  FooterButtons: {
    marginTop: moderateScale(25),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Icons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Help: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Logo: {
    position: 'relative',
    // backgroundColor: 'red',
    zIndex: 20,
  },
  LogoPulse: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -20,
  },
});
