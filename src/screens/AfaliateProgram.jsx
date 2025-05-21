import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function AffaliateProgram({navigation}) {
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
      <Text className="text-[21px] font-bold  text-black mb-2 ">Join tripvlog’s</Text>
        <Text className="text-[21px] font-bold  text-black mb-2 ">Affiliate Network</Text>
      <Text className="mb-6 mt-2">
       Embark on your adventure with tripvlog! Tap into your travel potential and earn income through
        the world’s first video booking platform. Share your unique experiences and effortlessly monetise
         your content.
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
      <Text>Ready to kick off your journey?</Text>
      <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6  mt-12"
                onPress={()=>navigation.navigate('JoinAffaliate')}>
                  <Text className="text-white text-center font-semibold text-base">
                    Join Us
                  </Text>
                </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

// ✨ Data for Accordion Sections
const accordionData = [
  {
    title: 'Why Partner With Us?',
    content:
      `Earn Up to 50% of Commission Generated: Receive payments for every booking generated through your videos.
       Exclusive Hotel Discounts: Unlock special rates to enhance your travel experience.
       Complimentary Upgrades: Enjoy free upgrades on your stays, thanks to Tripvlog.
       No Queuing: Be the first to know about our special offers and exclusive event invites.`,
  },
  {
    title: 'How Does It Work?',
    content:
      `Two Simple Ways to Monetise Your Travel Content.
Option 1: Book Your Stay via Tripvlog
Reserve Your Hotel: Secure your accommodations through Tripvlog.
Capture Your Experience: After checking in, shoot a short, high-quality video showcasing your stay.
Share Your Journey: Upload the video to the hotel’s profile under the “Travellers Tripvlog” section.
Maximise Your Revenue: Promote your video across social media platforms to expand your reach. Earn a commission whenever someone books after watching your content.
Option 2: Utilise Your Previous Travel Videos
Explore Our Vast Inventory: Browse through over 2 million hotels at your fingertips.
Upload Your Existing Content: Match your videos with hotels or nearby landmarks to populate their profiles.
Promote and Profit: Earn up to 50% of commission generated each time someone books through your uploaded videos. Share as many videos as you like—there are no limits! `,
  },
   {
    title: 'What can your earn?',
    content:
      `Example Earnings: For an average two-night stay, Tripvlog earns a £20 commission. If your video 
      influences that booking, you stand to make up to £10. Picture this: if one video receives 10 bookings
       in a month, that's  £100 in your pocket! Explore the endless earning potential across various hotels
        and destinations.
`,
  },
];
