import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function MenuLogout({navigation}) {
  const menuItems = [
      { id: 1, title: 'About tripvlog', route: 'About' },
    { id: 2, title: 'Contact us', route: 'Contact' },
    { id: 3, title: 'Careers', route: 'Careers' },
    { id: 4, title: 'Become an affiliate', route: 'Affiliate' },
    { id: 5, title: 'Become a property partner', route: 'PropertyPartner' },
    { id: 6, title: 'Invite a friend', route: 'Invite' },
    { id: 7, title: 'Terms of service', route: 'Terms' },
    { id: 8, title: 'Privacy policy', route: 'Privacy' },
    { id: 9, title: 'Video Guidelines', route: 'Guidelines' },
  ];


  return (
    <View className="flex-1 bg-blue-950  ">
      {/* Logo/Header Placeholder */}
      <View className="h-32">

        {/* Replace with your actual logo */}
        <Image source={require('../assests/Banner.png')} className="w-full h-full " resizeMode="contain" />
      </View>

      {/* Menu Items */}
      <ScrollView className="flex-1 px-4 py-2">
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate(item.route)}
            className="flex-row items-center py-6 border-b border-gray-100"
          >
            <Text className="text-base text-white">{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
