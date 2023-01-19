// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home1';
import Login from './src/Login';
import Signup from './src/Signup';
import Main1 from './src/Main';
import Homescreen from './src/Homescreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main1" component={Main1} />
        <Stack.Screen name="Homescreen" component={Homescreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;