import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export const ReviewsScreen = ({navigation}) => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
        <View className="flex-row justify-center items-center p-2">
          <TouchableOpacity className="flex-1 justify-center items-center p-2">
            <Text className="text-lg font-bold">Tripvlog</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 justify-center items-center p-2">
            <Text className="text-lg font-bold">Tripadvisor</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Rating Section */}
            {/* Rating Section */}
      <View className="flex-row p-4">
        {/* Left: Rating & Stars */}
        <View className="flex-1">
          <Text className="text-3xl font-bold mb-1">4.5</Text>

          <View className="flex-row items-center mb-1">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                source={require('../../assests/Star.png')}
                className="w-4 h-4 mr-1"
              />
            ))}
          </View>

          <Text className="text-gray-500">52 Reviews</Text>
        </View>

        {/* Right: Sentiment Bars */}
        <View className="flex-1 justify-center space-y-2 ml-4">
          {/* Positive */}
          <View>
            <Text className="text-green-600 mb-1">Positive</Text>
            <View className="w-full h-2 bg-gray-200 rounded-full">
              <View className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }} />
            </View>
          </View>

          {/* Neutral */}
          <View>
            <Text className="text-yellow-600 mb-1">Neutral</Text>
            <View className="w-full h-2 bg-gray-200 rounded-full">
              <View className="bg-yellow-400 h-2 rounded-full" style={{ width: '20%' }} />
            </View>
          </View>

          {/* Negative */}
          <View>
            <Text className="text-red-600 mb-1">Negative</Text>
            <View className="w-full h-2 bg-gray-200 rounded-full">
              <View className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }} />
            </View>
          </View>
        </View>
      </View>


      {/* Reviews */}
      <ScrollView className="flex-1 px-4">
        {reviewers.map((reviewer) => (
          <View key={reviewer.id} className="flex-1 items-start mb-6 border-b border-gray-100 ">
            <View className="flex-row">
                 <Image source={reviewer.image} className="w-12 h-12 rounded-full" />
            <View className="flex-col ml-4">
              <Text className="text-lg font-bold">{reviewer.name}</Text>
              <View className="flex-row">
               <Text>{reviewer.rating}</Text>
              <Text className="text-gray-500 text-sm mb-1 ml-3">2 mins ago</Text>
              </View>
              </View>
            </View>
             <View>
                 <Text className="text-gray-700 mb-2">{reviewer.message}</Text>
                 </View>
          </View>
        ))}
      </ScrollView>

      {/* Write Review Button */}
      <View className="p-4">
        <TouchableOpacity className="bg-blue-500 p-4 rounded-full justify-center items-center"
         onPress={()=>navigation.navigate('GiveReview')}>
          <Text className="text-white font-bold">Write a Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const reviewers = [
  {
    id: 1,
    name: 'Hasnat',
    message: 'It is a very good hotel with a lot of facilities for customers.',
    rating: '* * *  *',
    timestamp: Date.now() - 2 * 60 * 1000, // 2 minutes ago
    image: require('../../assests/61.png'),
  },
  {
    id: 2,
    name: 'Ali',
    message: 'Loved the ambiance and the staff were super helpful!',
    rating: '* * * * *',
    timestamp: Date.now() - 10 * 60 * 1000, // 10 minutes ago
    image: require('../../assests/61.png'),
  },
  {
    id: 3,
    name: 'Ayesha',
    message: 'Clean rooms and great service. Would recommend to anyone!',
    rating: '* *  *',
    timestamp: Date.now() - 25 * 60 * 1000, // 25 minutes ago
    image: require('../../assests/61.png'),
  },
  {
    id: 4,
    name: 'Hasnat',
    message: 'It is a very good hotel with a lot of facilities for customers.',
    rating: '* * *  *',
    timestamp: Date.now() - 2 * 60 * 1000, // 2 minutes ago
    image: require('../../assests/61.png'),
  },
  {
    id: 5,
    name: 'Ali',
    message: 'Loved the ambiance and the staff were super helpful!',
    rating: '* * * * *',
    timestamp: Date.now() - 10 * 60 * 1000, // 10 minutes ago
    image: require('../../assests/61.png'),
  },
  {
    id: 6,
    name: 'Ayesha',
    message: 'Clean rooms and great service. Would recommend to anyone!',
    rating: '* *  *',
    timestamp: Date.now() - 25 * 60 * 1000, // 25 minutes ago
    image: require('../../assests/61.png'),
  },
];
