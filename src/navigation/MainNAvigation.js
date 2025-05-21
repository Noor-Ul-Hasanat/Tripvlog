import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './StackNAvigation';

// Replace this with Redux, Context, or SecureStore check

export const MainNAvigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

