import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import HomePage from './HomeScreen/HomePage';
import HelpScreen from './HelpScreen/HelpScreen';
import WebsiteScreen from './WebsiteScreen/WebsiteScreen';
import RegisterPage from './RegisterScreen/RegisterPage';
import QRScreen from './RegisterScreen/QrScreen';
import LinenceScreen from './LicenceScreen/LicenceScreen';
import LoginWithOTP from './LoginWithOTP/LoginWithOTP';
import GetMobile from './LoginWithOTP/GetMobile';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginWithOTP"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="LoginWithOTP" component={LoginWithOTP} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen name="WebsiteScreen" component={WebsiteScreen} />
      <Stack.Screen name="QrCodeScreen" component={QRScreen} />
      <Stack.Screen name="LinenceScreen" component={LinenceScreen} />
      <Stack.Screen name="GetMobile" component={GetMobile} />
    </Stack.Navigator>
  );
}
