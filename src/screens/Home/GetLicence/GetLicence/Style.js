import {StyleSheet} from 'react-native';
import {colors} from '../../../../Assets/Theme/Index';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  MainContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  Button: {
    width: '100%',
    backgroundColor: '#404CCF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    height: moderateScale(50),
    marginTop: moderateScale(25),
  },
  ButtonText: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(18),
    color: '#FFF',
  },
  ButtonsDiv: {
    width: '100%',
  },
  ButtonSecendry: {
    marginTop: moderateScale(15),
    backgroundColor: '#FFF',
    borderColor: '#404CCF',
    borderWidth: moderateScale(2),
  },
  ButtonTextSecendry: {
    color: '#404CCF',
  },
  Input: {
    height: moderateScale(47.5),
    borderRadius: moderateScale(8),
    backgroundColor: '#FFF',
    borderWidth: moderateScale(1),
    borderColor: colors.grey4,
    paddingHorizontal: moderateScale(10),
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey1,
  },
  InputsContainer: {
    marginVertical: moderateScale(10),
  },
  ErrorText: {
    color: colors.error1,
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
    marginRight: moderateScale(5),
  },
  ErrorView: {
    height: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(25),
  },
  ErrorMessage: {
    fontFamily: 'Vazirmatn-Bold',
    color: 'red',
    fontSize: moderateScale(18),
    marginBottom: moderateScale(50),
  },
  ErrorImage: {
    height: '37.5%',
    resizeMode: 'contain',
  },
  ErrorButton: {
    backgroundColor: '#ff4f5a',
    width: '60%',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(6),
  },
  ErrorButtonText: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(16),
    color: '#FFF',
    textAlign: 'center',
  },
  CodeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    backgroundColor: '#FFF',
    borderWidth: moderateScale(1),
    borderColor: colors.grey4,
    height: moderateScale(47.5),
    paddingLeft: moderateScale(5),
  },
  QrInput: {
    borderRadius: 0,
    borderColor: 'transparent',
    width: '85%',
    borderRadius: moderateScale(8),
    height: moderateScale(40),
  },
  BackHeaderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(25),
  },
  BackHeaderButtonText: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.primary,
    marginLeft: moderateScale(20),
  },
  ToastDiv: {
    borderRightColor: colors.error1,
    borderWidth: moderateScale(4),
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    height: moderateScale(60),
  },
  ToastText1: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(16),
    color: colors.error1,
    textAlign: 'right',
  },
  ToastText2: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey2,
    textAlign: 'right',
  },
});
