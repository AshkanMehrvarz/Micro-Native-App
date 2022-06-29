import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../Assets/Theme/Index';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    height: '100%',
    paddingVertical: moderateScale(25),
  },
  Slide: {
    backgroundColor: colors.primary,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SlideImage: {
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
  },
  SlideTitle: {
    fontFamily: 'Vazirmatn-Bold',
    paddingHorizontal: moderateScale(50),
    marginTop: moderateScale(50),
    textAlign: 'center',
    fontSize: moderateScale(28),
    color: '#FFF',
    width: '100%',
  },
  SlideDis: {
    fontFamily: 'Vazirmatn-Regular',
    paddingHorizontal: moderateScale(50),
    marginTop: moderateScale(10),
    textAlign: 'right',
    fontSize: moderateScale(16),
    color: '#FFF',
    width: '100%',
  },
  SliderNextButton: {
    backgroundColor: '#FFFFFF',
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Footer: {
    marginBottom: moderateScale(10),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  PaginationDiv: {
    position: 'absolute',
    zIndex: -2,
  },
});
