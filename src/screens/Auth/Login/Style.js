import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../../Assets/Theme/Index';

export const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.primary,
    position: 'relative',
  },
  AnimatedView: {
    height: 1,
    width: 1,
    backgroundColor: '#FFF',
    borderRadius: 9999,
    position: 'absolute',
  },
  MainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Image: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  Footers: {
    width: '100%',
    paddingHorizontal: moderateScale(25),
  },
  Input: {
    height: '98%',
    borderRadius: moderateScale(6),
    paddingHorizontal: moderateScale(10),
    width: '90%',
    color: colors.grey2,
    fontSize: moderateScale(14),
    textAlign: 'left',
    fontFamily: 'Vazirmatn-Regular',
  },
  InputTitle: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(16),
    textAlign: 'right',
    marginBottom: moderateScale(10),
    marginRight: moderateScale(5),
    color: colors.grey2,
  },
  InputDiv: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: moderateScale(10),
    width: '100%',
    borderColor: colors.grey4,
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1),
    height: moderateScale(50),
  },
  LoginButton: {
    backgroundColor: colors.primary,
    marginBottom: moderateScale(25),
    marginTop: moderateScale(50),
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(6),
  },
  LoginButtonText: {
    fontFamily: 'Vazirmatn-Bold',
    color: '#FFF',
    fontSize: moderateScale(18),
  },
  RegisterTextsDiv: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(50),
  },
  RegisterText1: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey1,
  },
  RegisterText2: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(16),
    color: colors.primary,
    marginRight: moderateScale(10),
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  ErrorText: {
    color: colors.error1,
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
    marginTop: moderateScale(5),
  },
});
