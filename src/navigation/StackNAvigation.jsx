import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Boarding } from '../screens/Boarding';
import LoginScreen from '../screens/Login';
import Signup from '../screens/Signup';
import { Home } from '../screens/Home';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import MenuLogout from '../screens/MenuLogout';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';
import AccountTypeScreen from '../screens/AccountTypeScreen';
import AboutTripvlogScreen from '../screens/About';
import AffaliateProgram from '../screens/AfaliateProgram';
import JoinAffaliate from '../screens/JoinAffaliate';
import { ReviewsScreen } from '../screens/ReviewScreens/ReviewScreen';
import { Dashboard } from './BottonTabs';
import { GiveReview } from '../screens/ReviewScreens/GiveReview';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Boarding" component={Boarding} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="LogoutMenu" component={MenuLogout} />
        <Stack.Screen name="EmailVerificationScreen" component={EmailVerificationScreen} />
        <Stack.Screen name="AccountTypeScreen" component={AccountTypeScreen} />
        <Stack.Screen name="About" component={AboutTripvlogScreen} />
        <Stack.Screen name="Affiliate" component={AffaliateProgram} />
        <Stack.Screen name="JoinAffaliate" component={JoinAffaliate} />
        <Stack.Screen name="ReviewScreen" component={ReviewsScreen} />
        <Stack.Screen name="GiveReview" component={GiveReview} />
        <Stack.Screen name= "Dashboard" component={Dashboard}/>
    </Stack.Navigator>
  );
};
