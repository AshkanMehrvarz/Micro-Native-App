import {colors} from '../../Assets/Theme/Index';
import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoBg: {
    backgroundColor: colors.primary,
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BgView: {
    borderRadius: 9999,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
  },
});
