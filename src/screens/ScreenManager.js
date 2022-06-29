import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as React from 'react';
import Intro from './Intro/Index';
import Splash from './Splash/Index';
import Login from '../Screens/Auth/Login/Index';
import Register from '../Screens/Auth/Register/Index';
import Home from '../Screens/Home/Home/Index';
import OTP from '../Screens/Auth/OTP/Index';
import GetLicence from '../Screens/Home/GetLicence/GetLicence/Index';
import Help from '../Screens/Home/Help/Index';
import Website from '../Screens/Home/Website/Index';
import Licence from '../Screens/Home/Licence/Index';
import QrScanner from '../Screens/Home/GetLicence/QrScanner/Index';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="GetLicence" component={GetLicence} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Website" component={Website} />
      <Stack.Screen name="Licence" component={Licence} />
      <Stack.Screen name="QrScanner" component={QrScanner} />
    </Stack.Navigator>
  );
}
