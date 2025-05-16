// LoginScreen.tsx
import React from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';


export default function Signup({navigation}) {

  return (
    <View className="flex-1 items-center bg-[#f7fffd] px-6">
      {/* Logo */}
      <Image
        source={require('../assests/Header.png')}
        className="w-24 h-24 mb-4 "
        resizeMode="contain"
      />

      {/* Welcome text */}
      <Text className="text-2xl font-bold text-center mt-6">  Let’s get started</Text>
      <Text className="text-md font-semibold text-center mt-2 mb-8">
         Create your new account and find more beautiful places
      </Text>

       {/* User Input */}
        <TextInput
        placeholder="Name"
        className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 mb-3 mt-10"
        placeholderTextColor="#aaa"
      />
      {/* Email input */}
      <TextInput
        placeholder="Email"
        className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 mb-5 "
        placeholderTextColor="#aaa"
      />

      {/* Password input */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 mb-5"
        placeholderTextColor="#aaa"
      />
      {/*Confirm Password input */}
      <TextInput
        placeholder="Re type Password"
        secureTextEntry
        className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 mb-5"
        placeholderTextColor="#aaa"
      />


      {/* Sign In button */}
      <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6  mt-auto"
      onPress={()=>navigation.navigate('EmailVerificationScreen')}>
        <Text className="text-white text-center font-semibold text-base">
          Sign up
        </Text>
      </TouchableOpacity>

      {/* Social login buttons */}

      {/* Sign up link */}
      <View className="flex-row mb-8">
        <Text className="text-gray-500">Already have an account? </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Login')}>
          <Text className="text-[#00aaff] font-semibold">Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
