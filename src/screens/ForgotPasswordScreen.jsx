import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function ForgotPasswordScreen({navigation}) {
  return (
    <View className="flex-1 items-center bg-[#f7fffd] px-6 ">
      {/* Logo - Assuming same logo as login screen */}
      <Image
        source={require('../assests/Header.png')}
        className="w-24 h-24 mb-4"
        resizeMode="contain"
      />
      <Image
        source={require('../assests/Password.png')}
        className="w-32 h-32 mb-4"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-2xl font-bold text-center mt-6">Forgot password</Text>
      {/* Subtitle */}
      <Text className="text-md font-semibold text-center mt-1 mb-8 px-10">
        No worries, we'll send you reset instructions.
      </Text>

      {/* Email input */}
      <TextInput
        placeholder="Email"
        className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 mb-6 mt-14"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Submit button */}
      <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6"
      onPress={()=>navigation.navigate('LogoutMenu')}>
        <Text className="text-white text-center font-semibold text-base">
          Submit
        </Text>
      </TouchableOpacity>

      {/* Back to sign in */}
      <View className="flex-row mt-auto mb-8">
        <Text className="text-gray-500">Already have an account? </Text>
        <TouchableOpacity>
          <Text className="text-[#00aaff] font-semibold ">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

