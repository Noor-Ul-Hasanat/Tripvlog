import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function JoinAffaliate({navigation}) {
  return (
    <View className="flex-1 bg-white">
      {/* Header Banner */}
      <View className="bg-blue-950 h-14 justify-center items-center">
        <Image
          source={require('../assests/Frame.png')} // Replace with your logo path
          className="w-[100px] h-[40px]"
          resizeMode="contain"
        />
      </View>

      <ScrollView className="flex-1 px-4 py-6">
        {/* Title */}
        <Text className="text-[24px] font-bold text-blue-900 ">Earn As You Travel With Our</Text>
        <Text className="text-[24px] font-bold text-blue-500 mb-4">Affiliate Programme</Text>

        {/* Intro */}
        <Text className="text-xl text-blue-900 mb-4 font-bold">Dear [Name]</Text>
        <Text className="text-base text-gray-800 mb-4">
          Do you love to create beautiful travel content? Then we have great news! You can now get paid for it through Tripvlog, the world's first video-based destination booking platform.
        </Text>
        <Text className="text-base text-gray-800 mb-4">
          We’re thrilled to invite you to become a part of the Tripvlog Affiliate Programme—a unique opportunity for content creators and travellers alike to share the experiences that make their travel experiences truly unforgettable.
        </Text>
        <Text className="text-base text-gray-800 mb-6">
          By joining our programme, you’ll be able to share your passion for travel with your audience, all while earning commissions for every booking made through your content.
        </Text>

        {/* CTA */}
        <TouchableOpacity className="bg-pink-600 px-6 py-3 rounded-full mb-6 self-start">
          <Text className="text-white text-base font-semibold">Sign up</Text>
        </TouchableOpacity>

        {/* Image */}
        <Image
          source={require('../assests/61.png')} // Replace with your image path
          className="w-full h-52 rounded-xl mb-6"
          resizeMode="cover"
        />

        {/* Getting Started */}
        <Text className="text-[20px] font-bold text-blue-900 mb-4">Here’s what you need to get started</Text>

        {steps.map((item, index) => (
          <View key={index} className="mb-6">
            <View className="flex-row">
            <Text className="font-bold text-blue-900 text-lg mb-2">{`${index + 1}. ${item.title1}`}</Text>
            <Text className="font-bold text-blue-500 text-lg mb-2">{item.titel2}</Text>
            </View>
            <Text className="text-gray-800 text-base">{item.description}</Text>
          </View>
        ))}

        {/* Final CTA */}
        <Text className="text-xl font-bold text-black mb-4">Ready to Start Earning?</Text>
        <Text className="text-gray-800 mb-6">
          We’re excited to see how your content will inspire the next generation of travellers, and we can’t wait to welcome you into our affiliate community.
        </Text>

        <TouchableOpacity className="bg-pink-600 px-6 py-3 rounded-full mb-8 self-start">
          <Text className="text-white text-base font-semibold">Sign up</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text className="text-gray-600 mb-2">Warm regards,</Text>
        <Text className="text-black font-semibold mb-8">The Tripvlog Team</Text>
      </ScrollView>
    </View>
  );
}

// 👉 Steps content
const steps = [
  {
    title1: 'Simple ',
    titel2:'Sign-Up',
    description:
      'Becoming an affiliate is easy! Simply sign up for a Tripvlog Affiliate Account, link your payment account, and start earning commissions with every trip booked through your shared videos.',
  },
  {
    title1: 'Seamless ',
    titel2:'Payments',
    description:
      'Earnings are tracked with your unique affiliate links. Once a traveller completes their trip, we’ll process your payout securely. Payments are made once your earnings exceed the threshold of £[threshold].',
  },
  {
    title1: 'Authentic Content, ',
    titel2:'Real Rewards',
    description:
      'Your videos are at the heart of this programme. Share authentic travel experiences, avoid misleading content, and follow our content guidelines to keep earning.',
  },
  {
    title1: 'Be Part of a ',
    titel2:'Premium Platform',
    description:
      'Tripvlog is a luxury-focused travel platform. Gain access to top-tier hotels, curated activities, and a global community of explorers.',
  },
  {
    title1: 'Climb the Ranks and Unlock ',
    titel2:'Bigger Rewards',
    description:
      'Move through our tier system by engaging your audience. Start as a Navigator (15% commission), then Explorer (25%), and reach Adventurer (50%) with exclusive perks.',
  },
  {
    title1: 'Let’s Stay',
    titel2:'Connected',
    description:
      'Our team is always available to support you, answer questions, or help brainstorm content ideas that keep your audience inspired and booking.',
  },
];
