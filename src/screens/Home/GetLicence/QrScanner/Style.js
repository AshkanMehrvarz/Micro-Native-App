import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  Container: {
    height: '100%',
    position: 'relative',
    zIndex: 10,
    alignItems: 'center',
  },
  Bottom: {
    height: moderateScale(50),
    backgroundColor: '#FFFFFFCC',
    width: '80%',
    position: 'absolute',
    bottom: moderateScale(100),
    borderRadius: moderateScale(8),
    zIndex: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Flash: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  BackHeader: {
    position: 'absolute',
    width: '100%',
    zIndex: 20,
  },
});
