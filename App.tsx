import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Boarding } from './src/screens/Boarding';
import { Home } from './src/screens/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
     <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Boarding" component={Boarding} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};
export default App;
