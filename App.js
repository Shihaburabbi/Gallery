// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import FullViewImage from './src/FullViewImage';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Gallery' }} />
        <Stack.Screen name="FullViewImage" component={FullViewImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;