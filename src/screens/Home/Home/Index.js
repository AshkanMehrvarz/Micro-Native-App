// Base
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import * as React from 'react';

// Packages
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pulse from 'react-native-pulse';

// Ashkan
import HelpIcon from '../../../Assets/Svg/HelpIcon';
import Logo from '../../../Assets/Svg/Logo';
import {colors} from '../../../Assets/Theme/Index';
import {styles} from './Style';

const HomepageButtons = () => {
  // States
  const [isRegistered, setIsRegistered] = React.useState(false);

  // Variables
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  // Screen Swaper
  const RegisterButtonHandler = () => navigation.navigate('GetLicence');
  const HelpButtonHandler = () => navigation.navigate('Help');
  const WebsiteButtonHandler = () => navigation.navigate('Website');
  const LicenceScreenHandler = () => navigation.navigate('Licence');

  // Animations
  const animation = new Animated.Value(0);
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
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

  // Functions
  const getData = async () => {
    try {
      AsyncStorage.setItem('isRegistered', 'false');
      const value = await AsyncStorage.getItem('isRegistered');
      if (value !== null) {
        setIsRegistered(value === 'false' ? false : true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // UseEffects
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
