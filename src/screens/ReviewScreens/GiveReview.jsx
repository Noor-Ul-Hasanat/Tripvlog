import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Linking } from 'react-native';

export const GiveReview = ({navigation}) => {
  return (
    <View className="flex-1 p-4">
      {/* Hotel Info Section */}
      <View className="flex-row items-center mb-4">
        <Image
          source={{ uri: 'https://example.com/pool-image.jpg' }}
          className="w-16 h-16 rounded-full"
        />
        <View className="">
          <Text className="text-xl font-bold">Vida Downtown Hotel</Text>
          <Text className="text-sm text-gray-600 mr-12">
            Stay in style at Vida Downtown Hotel with modern rooms, a rooftop pool, spa, and fine dining—your perfect city escape.
          </Text>
        </View>
      </View>

      {/* Rating Section */}
      <Text className="text-3xl font-bold mb-2 text-center">Rate us!</Text>
      <Text className="text-md text-gray-600 mb-4 text-center">Please rate your experience</Text>
      <View className="flex-row mb-4 justify-center">
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index}>
            <Text className={`text-3xl text-center ${index < 3 ? 'text-yellow-500' : 'text-gray-300'}`}>★</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Review Input */}
       <Text className="mb-2">Write Your Review</Text>
      <TextInput
        className="border border-gray-300  mb-4 rounded h-40"
        placeholder="Would you like to write anything about us?"
        multiline
      />

      {/* Guidelines Link */}
      <TouchableOpacity className="mb-4"
      onPress={() => Linking.openURL('https://example.com/guidelines')}>
        <Text className="text-blue-500">See Review Guidelines</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity className="bg-blue-500 p-4  mt-auto rounded-full mb-8"
      onPress={()=>navigation.navigate('SubmitReview')}>
        <Text className="text-white text-center">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
