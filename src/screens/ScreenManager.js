import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import HomePage from '../components/HomePage';
import HelpScreen from './HelpScreen/HelpScreen';
import WebsiteScreen from './WebsiteScreen/WebsiteScreen';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen name="WebsiteScreen" component={WebsiteScreen} />
    </Stack.Navigator>
  );
}
