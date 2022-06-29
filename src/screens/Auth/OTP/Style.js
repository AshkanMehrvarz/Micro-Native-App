import {StyleSheet} from 'react-native';
import {colors} from '../../../Assets/Theme/Index';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    height: '100%',
    padding: moderateScale(25),
    justifyContent: 'space-between',
  },
  BackHeaderButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BackHeaderButtonText: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.primary,
    marginLeft: moderateScale(20),
  },
  Contents: {
    marginVertical: moderateScale(50),
  },
  h1: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(18),
    textAlign: 'right',
    color: colors.grey2,
  },
  WarningText: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    marginTop: moderateScale(20),
    textAlign: 'right',
    paddingLeft: moderateScale(25),
    color: colors.grey3,
  },
  TimeText: {
    color: colors.error1,
    fontFamily: 'Vazirmatn-Bold',
  },
  CodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(50),
    paddingVertical: moderateScale(10),
  },
  CodeInput: {
    width: moderateScale(50),
    height: moderateScale(50),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(8),
    backgroundColor: colors.grey5,
    borderColor: colors.grey4,
    borderWidth: moderateScale(1),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(18),
  },
  Button: {
    backgroundColor: '#404CCF',
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
  ButtonText: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(18),
    color: '#FFF',
  },
  DidNotgetCode: {
    marginHorizontal: moderateScale(25),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  TimeEndText: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    marginTop: moderateScale(20),
    textAlign: 'right',
    paddingLeft: moderateScale(25),
    color: colors.error1,
  },
  Resend: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  ResendText: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(14),
    textAlign: 'right',
    paddingLeft: moderateScale(10),
    color: colors.primary,
  },
  DidNotgetCodeText: {
    fontFamily: 'Vazirmatn-Medium',
    fontSize: moderateScale(14),
    textAlign: 'right',
    paddingLeft: moderateScale(10),
    color: colors.grey2,
  },
});
