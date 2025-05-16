import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function AboutTripvlogScreen() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <View className="flex-1">
        <Image
        source={require('../assests/EmptyBanner.png')}
        className="w-full h-[91px]"/>
    <ScrollView className="flex-1 bg-white px-4 pt-6 pb-16">
      {/* Header */}
      <Text className="text-[21px] font-bold  text-black mb-2 ">All about tripvlog</Text>
      <Text className="mb-6 mt-2">
        Tripvlog, the world’s first video-driven platform, is reshaping the way we experience travel by
        bringing destinations to life and connecting travellers directly with the hospitality sector.
      </Text>

      {/* Sections */}
      {accordionData.map((item, index) => (
        <View key={index} className="border-t border-gray-200 mb-4">
          <TouchableOpacity
            className="py-4 flex-row justify-between items-center"
            onPress={() => toggleSection(item.title)}
          >
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-xl">{activeSection === item.title ? '▴' : '▾'}</Text>
          </TouchableOpacity>

          {activeSection === item.title && (
            <Text className="text-black mb-4 border-t border-gray-200 pt-2">{item.content}</Text>
          )}
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

// ✨ Data for Accordion Sections
const accordionData = [
  {
    title: 'Who are we?',
    content:
      `At Tripvlog, we believe the best way to discover the world is through the stories of those who have lived it. As a unique platform, we blend travel inspiration with practical planning, allowing users to gain real insights and explore destinations through authentic, real-time content created by fellow travellers.
       At its core, Tripvlog is about connection—linking travellers to new destinations and genuine experiences by blending compelling travel content with a new way of booking. With Tripvlog, travellers can watch, choose, and book—all in one place, transforming the way they discover the world.`,
  },
  {
    title: 'Vision',
    content:
      'Our vision is to become a trusted and recognised brand in the travel and hospitality industry, known for showcasing authentic experiences and seamless booking solutions through our innovative platform. ',
  },
  {
    title: 'Mission',
    content:
      'Our mission extends beyond transforming how people plan and book their travel experiences. We empower travellers to monetise their authentic content by providing a platform to share their journeys, supporting the hospitality sector in maximising revenue through real and engaging travel videos. By turning travel stories into valuable assets, we create a more rewarding experience for both travellers and hospitality partners. ',
  },
  {
    title: 'Competitive Edge',
    content:
      'Our competitive edge is our innovative approach to travel planning that goes beyond outdated text-based reviews and static images, offering travellers a deeper view of their destinations. We simplify the booking process by enabling users to seamlessly connect with hotels and travel providers, cutting out middlemen and reducing unnecessary fees. Our direct revenue-sharing model empowers travellers to earn from their experiences, while personalised recommendations based on user preferences make planning trips faster and more engaging. Tripvlog also brings back the power of word-of-mouth marketing in the digital age. Travellers personal video narratives resonate far more than conventional reviews, fostering authenticity and trust  often missing online. This approach encourages genuine travel recommendations, boosting confidence in booking decisions but also allows hospitality partners to reach a wider audience and attract more customers through engaging content.',
  },
  {
    title: 'Brand Pillars',
    content:
      `Accessibility: We are committed to ensuring that travel is a universal experience, available to all regardless of ability or background. By breaking down barriers, we help travellers explore the world with confidence.

Authenticity: Real, unfiltered stories from everyday travellers are at the heart of Tripvlog. We build trust and community by focusing on genuine experiences, empowering users to make informed decisions.

Community: Tripvlog believes in responsible tourism, enabling travellers to monetise their content while supporting communities worldwide. We foster sustainable travel practices that leave a positive impact on destinations and local economies.

Innovation: Our disruptive approach and the use of creative storytelling redefine travel. By embracing constant innovation, we inspire unique travel experiences, helping both travellers and the hospitality sector explore new ways to connect and discover the world.`,
  },
];
