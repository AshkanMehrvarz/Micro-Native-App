import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Easing,
} from 'react-native';
import * as React from 'react';
import HelpIcon from '../../assets/svg/HelpIcon';
import Logo from '../../assets/svg/Logo';
import {moderateScale} from 'react-native-size-matters';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../assets/theme/Theme';
import Pulse from 'react-native-pulse';

const HomepageButtons = () => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const RegisterButtonHandler = () =>
    navigation.navigate('GetLicenceFormScreen');
  const HelpButtonHandler = () => navigation.navigate('HelpScreen');
  const WebsiteButtonHandler = () => navigation.navigate('WebsiteScreen');
  const LicenceScreenHandler = () => navigation.navigate('LinenceScreen');
  const [isRegistered, setIsRegistered] = React.useState(false);

  const getData = async () => {
    try {
      // AsyncStorage.setItem('isRegistered', 'false');
      const value = await AsyncStorage.getItem('isRegistered');
      if (value !== null) {
        setIsRegistered(value === 'false' ? false : true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <SafeAreaView style={{backgroundColor: colors.primary}}>
      <View style={[styles.Container]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={HelpButtonHandler}
          style={styles.Help}>
          <HelpIcon />
        </TouchableOpacity>

        <Animated.View style={[styles.Logo]}>
          <TouchableOpacity
            style={{transform: [{scale}]}}
            activeOpacity={1}
            onPressIn={onPressIn}
            onPressOut={onPressOut}>
            <Logo size={4} />
          </TouchableOpacity>
          <View style={styles.LogoPulse}>
            <Pulse
              color="white"
              numPulses={2}
              diameter={300}
              speed={5}
              duration={2000}
            />
          </View>
        </Animated.View>

        <View style={{width: '100%'}}>
          {!isRegistered ? (
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.7}
              onPress={RegisterButtonHandler}>
              <Text style={styles.Text}>دریافت لایسنس</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.Button}
              activeOpacity={0.7}
              onPress={LicenceScreenHandler}>
              <Text style={styles.Text}>مشاهده لایسنس</Text>
            </TouchableOpacity>
          )}

          <View style={styles.Icons}>
            <TouchableOpacity
              style={[styles.Button, styles.SecendryButton]}
              activeOpacity={0.7}
              onPress={WebsiteButtonHandler}>
              <Text style={[styles.Text, {color: '#FFF'}]}>وبسایت</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomepageButtons;

const styles = StyleSheet.create({
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
