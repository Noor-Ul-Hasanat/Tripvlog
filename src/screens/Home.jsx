import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

 export const Home = ({navigation}) => {
  return (
    <View>
      <Text>i am Home</Text>
       <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6  mt-6"
       onPress={()=>navigation.navigate('Signup')}>
             <Text className="text-white text-center font-semibold text-base">
               Sign up
             </Text>
           </TouchableOpacity>
       <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6  mt-6"
       onPress={()=>navigation.navigate('LogoutMenu')}>
             <Text className="text-white text-center font-semibold text-base">
               Menu
             </Text>
           </TouchableOpacity>
       <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6  mt-6"
       onPress={()=>navigation.navigate('ReviewScreen')}>
             <Text className="text-white text-center font-semibold text-base">
               Reiew Screen
             </Text>
           </TouchableOpacity>
       <TouchableOpacity className="bg-[#00aaff] w-full py-3 rounded-full mb-6  mt-6"
       onPress={()=>navigation.navigate('WriteReviewScreen')}>
             <Text className="text-white text-center font-semibold text-base">
            write Reiew Screen
             </Text>
           </TouchableOpacity>
    </View>
  );
};

