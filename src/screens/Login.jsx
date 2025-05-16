// LoginScreen.tsx
import React from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';


export default function LoginScreen({navigation}) {

  return (
    <View className="flex-1 items-center bg-[#f7fffd] px-6">
      {/* Logo */}
      <Image
        source={require('../assests/Header.png')}
        className="w-24 h-24 mb-4 "
        resizeMode="contain"
      />

      {/* Welcome text */}
      <Text className="text-2xl font-bold text-center mt-6">Welcome Back!</Text>
      <Text className="text-md font-semibold text-center mt-1 mb-8">
        Sign in to your Tripvlog account
      </Text>

      {/* Email input */}
      <TextInput
        placeholder="Email"
        className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 mb-3 mt-10"
        placeholderTextColor="#aaa"
      />

      {/* Password input */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full bg-white border border-gray-300 rounded-full px-6 py-3 mb-1"
        placeholderTextColor="#aaa"
      />

      {/* Keep signed in and forgot password */}
      <View className="flex-row justify-between items-center w-full mb-5 px-1 mt-3">
        <View className="flex-row items-center">
          <View className="w-4 h-4 rounded border border-gray-400 mr-2" />
          <Text className="text-sm text-gray-500">Keep me signed in</Text>
        </View>
        <TouchableOpacity
       onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text className="text-sm text-red-500 font-medium">Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In button */}
      <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6  mt-6">
        <Text className="text-white text-center font-semibold text-base">
          Sign in
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="flex-row items-center w-full mb-6 mt-10">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-gray-500">Or connect with</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social login buttons */}
      <View className="flex-row justify-between w-full mb-4">
        <TouchableOpacity className="flex-1 bg-red-600 py-3 rounded-full mr-2 items-center">
          <Text className="text-white font-semibold">G  Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-blue-800 py-3 rounded-full ml-2 items-center">
          <Text className="text-white font-semibold">f  Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-black w-full py-3 rounded-full mb-6 items-center">
        <Text className="text-white font-semibold">  Sign in with Apple</Text>
      </TouchableOpacity>

      {/* Sign up link */}
      <View className="flex-row">
        <Text className="text-gray-500">Don’t have an account? </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Signup')}>
          <Text className="text-[#00aaff] font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
