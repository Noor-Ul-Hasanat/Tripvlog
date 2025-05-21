import React, { Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileMenu } from '../screens/ProfileEditProfile/ProfileMenu';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings/Settings';
import { Search } from '../screens/Search';

const Tab = createBottomTabNavigator();
const isUserLoggedIn = true; // we will get this bit from redux to check weather user is logged in or not

export const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      {isUserLoggedIn &&
      <Fragment>
       <Tab.Screen name="Uploads" component={Home} />
       <Tab.Screen name="Booking" component={ProfileMenu} />
       </Fragment>}
      <Tab.Screen name="Profile" component={Settings} />
    </Tab.Navigator>
  );
};
