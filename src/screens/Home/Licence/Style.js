import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../../Assets/Theme/Index';

export const styles = StyleSheet.create({
  Container: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: moderateScale(25),
    // backgroundColor: 'red',
  },
  DoneImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    position: 'relative',
    top: moderateScale(-50),
  },
  LinenceText: {
    fontFamily: 'Vazirmatn-Medium',
    fontSize: moderateScale(14),
    color: '#333',
    width: '100%',
    textAlign: 'right',
    marginBottom: moderateScale(10),
  },
  TextInput: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: '#333',
    borderColor: '#33333380',
    borderWidth: moderateScale(2),
    paddingHorizontal: moderateScale(10),
    textAlign: 'center',
  },
  CopyButton: {
    marginTop: moderateScale(25),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(4),
    backgroundColor: '#404CCF',
    width: '40%',
    alignItems: 'center',
  },
  CopyButtonText: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(14),
    color: '#fff',
  },
  Main: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    top: moderateScale(-50),
  },
  BackHeaderContainer: {
    backgroundColor: '#FFF',
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
    width: '100%',
  },
  Title: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(16),
    color: '#333',
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
    elevation: moderateScale(10),
    shadowOpacity: 0.15,
    shadowRadius: moderateScale(5),
  },
  ToastDiv: {
    borderRightColor: colors.done1,
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
    color: colors.done1,
    textAlign: 'right',
  },
  ToastText2: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey2,
    textAlign: 'right',
  },
});
