import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SubmitReview = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white justify-center items-center p-6 relative pt-40">

      {/* Close Icon */}
      <TouchableOpacity
        className="absolute top-4 right-4"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-xl">✕</Text>
      </TouchableOpacity>

      {/* Success Icon */}
      <Text className="text-xl font-bold mb-4">Thanks!</Text>
      <Image
        source={require('../../assests/Check.png')} // Replace with your checkmark image
        className="w-28 h-28 mb-4"
      />

      {/* Message */}
      <Text className="text-center text-gray-600 mb-2">
        Your review has been submitted to TripVlog for approval. We will notify you as soon as your review has been approved.
      </Text>

      {/* Guidelines Link */}
      <TouchableOpacity onPress={() => Linking.openURL('https://example.com/guidelines')}>
        <Text className="text-blue-600 font-semibold mb-6">See Review Guidelines</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity
        className="bg-blue-500 px-6 py-3 rounded-full mt-auto mb-8"
        onPress={() => navigation.navigate('ReviewsScreen')}
      >
        <Text className="text-white font-bold">Back To Reviews</Text>
      </TouchableOpacity>
    </View>
  );
};
