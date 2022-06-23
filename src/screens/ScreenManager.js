import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as React from 'react';
import SlidersScreen from './IntroScreen/SlidersScreen';
import LoginScreen from './IntroScreen/LoginScreen';
import RegisterScreen from './IntroScreen/RegisterScreen';
import HomeScreen from './HomeScreen/HomeScreen';
import GetOTPCode from './IntroScreen/GetOTPCode';
import GetLicenceFormScreen from './GetLicenceScreen/GetLicenceFormScreen';
import HelpScreen from './HelpScreen/HelpScreen';
import WebsiteScreen from './WebsiteScreen/WebsiteScreen';
import LinenceScreen from './LicenceScreen/LicenceScreen';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SlidersScreen" component={SlidersScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GetOTPCode" component={GetOTPCode} />
      <Stack.Screen
        name="GetLicenceFormScreen"
        component={GetLicenceFormScreen}
      />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen name="WebsiteScreen" component={WebsiteScreen} />
      <Stack.Screen name="LinenceScreen" component={LinenceScreen} />
    </Stack.Navigator>
  );
}
