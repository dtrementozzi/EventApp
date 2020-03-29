import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import CreateEventScreen from './CreateEventScreen';
import AccountScreen from './AccountScreen';
import Event from './Event';

const Stack = createStackNavigator();

function ScreenNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: "Log In"}}/>

        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{title: "Create New Account"}}/>

        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{title: "Welcome"}}/>

        <Stack.Screen
          name="CreateEventScreen"
          component={CreateEventScreen}
          options={{title: "New Event"}}/>

        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{title: "Account Info"}}/>

        <Stack.Screen
          name="Event"
          component={Event}
          options={{title: "Event Info"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenNavigator;