import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Boarding } from './src/screens/Boarding';
import './global.css';
import LoginScreen from './src/screens/Login';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import MenuLogout from './src/screens/MenuLogout';
import Signup from './src/screens/Signup';
import { Home } from './src/screens/Home';
import EmailVerificationScreen from './src/screens/EmailVerificationScreen';
import AccountTypeScreen from './src/screens/AccountTypeScreen';
import AboutTripvlogScreen from './src/screens/About';



const Stack = createNativeStackNavigator();
const App = () => {
  return (
     <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Boarding" component={Boarding} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="LogoutMenu" component={MenuLogout} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="EmailVerificationScreen" component={EmailVerificationScreen} />
            <Stack.Screen name="AccountTypeScreen" component={AccountTypeScreen} />
              <Stack.Screen name="About" component={AboutTripvlogScreen} />
             {/*
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Careers" component={CareersScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
  );
};
export default App;
