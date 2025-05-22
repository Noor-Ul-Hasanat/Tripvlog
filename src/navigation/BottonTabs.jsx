import React, { Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileMenu } from '../screens/ProfileEditProfile/ProfileMenu';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings/Settings';
import { Search } from '../screens/Search';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const isUserLoggedIn = true; // we will get this bit from redux to check weather user is logged in or not

// {/* 
// <Feather name="home" color="#000" size={24} />
//  <Feather name="search" color="#000" size={24} />
// */}

const HomeTabBarIcon = ({ color, size }) => (
  <Feather name="home" color={color} size={size} />
);
const SearchTabBarIcon = ({ color, size }) => (
  <Feather name="search" color={color} size={size} />
);
const UploadTabBarIcon = ({ color, size }) => (
  <Feather name="upload" color={color} size={size} />
);
const BookingTabBarIcon = ({ color, size }) => (
    <MaterialCommunityIcons name="printer-pos" color="#000" size={24} />
);
const ProfileTabBarIcon = ({ color, size }) => (
  <Feather name="circle" color={color} size={size} />
);

export const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: SearchTabBarIcon,
        }}/>
      {isUserLoggedIn &&
      <Fragment>
       <Tab.Screen name="Uploads" component={Home}   options={{
          tabBarIcon: UploadTabBarIcon,
        }}/>
       <Tab.Screen name="Booking" component={ProfileMenu}   options={{
          tabBarIcon: BookingTabBarIcon,
        }} />
       </Fragment>}
      <Tab.Screen name="Profile" component={Settings}   options={{
          tabBarIcon: ProfileTabBarIcon,
        }} />
    </Tab.Navigator>
  );
};
