import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../../Assets/Theme/Index';

export const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#FFF',
    padding: moderateScale(25),
    justifyContent: 'space-between',
  },
  InputDiv: {
    marginBottom: moderateScale(25),
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
  InputTitle: {
    textAlign: 'right',
    marginBottom: moderateScale(10),
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey1,
    marginRight: moderateScale(2.5),
  },
  Header: {
    marginVertical: moderateScale(25),
  },
  h1: {
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(20),
    color: colors.primary,
    marginVertical: moderateScale(5),
  },
  DisText: {
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey3,
    marginVertical: moderateScale(5),
    paddingLeft: moderateScale(75),
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
  RegisterButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(50),
    borderRadius: moderateScale(6),
  },
  RegisterButtonText: {
    color: '#FFF',
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(18),
  },
  ErrorText: {
    color: colors.error1,
    textAlign: 'left',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
  },
});
