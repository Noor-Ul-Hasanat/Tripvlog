import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function AccountTypeScreen({ navigation }) {
  const [accountType, setAccountType] = useState(null);

  return (
    <View className="flex-1 items-center bg-white px-6">
      {/* Logo - Replace with your actual logo */}
      <Image
      source={require('../assests/Header.png')}
        className="w-24 h-24 mb-8"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-2xl font-bold text-center mb-2">Let's get started</Text>

      {/* Subtitle */}
      <Text className="text-center text-gray-600 mb-8 px-4">
        Create your new account and find more beautiful places
      </Text>

      {/* Divider */}
      <View className="w-full  bg-gray-200 mb-8" />

      {/* Account Type Selection */}
      <View className="w-full mb-8 justify-between flex-row ">
        <TouchableOpacity
          className={` rounded-lg border-2 w-2/5 ml-6 flex justify-center items-center ${accountType === 'business' ? 'border-blue-500 bg-blue-50' : 'border-gray-800'}`}
          onPress={() => setAccountType('business')}
        >
         <Image
         source={require('../assests/Business.png')}
         className="w-14 h-14 mb-4 mt-6"
        resizeMode="contain"
      />
       <Text className={'mb-6 '}>Business</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={` rounded-lg border-2 w-2/5 mr-6 flex justify-center items-center ${accountType === 'traveller' ? 'border-blue-300 bg-blue-50' : 'border-gray-800'}`}
          onPress={() => setAccountType('traveller')}
        >
          <Image
          source={require('../assests/Traveller.png')}
          className="w-14 h-14 mb-4 mt-6"
          resizeMode="contain"
      />
       <Text className={'mb-6 '}>Traveler</Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className={`w-full py-4 rounded-full mb-6 mt-auto ${accountType ? 'bg-blue-500' : 'bg-gray-300'}`}
        disabled={!accountType}
        onPress={() => navigation.navigate('SignUp', { accountType })}
      >
        <Text className="text-white text-center font-bold text-lg">Continue</Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <View className="flex-row mb-8">
        <Text className="text-gray-600">Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text className="text-blue-500 font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
