import React, { useRef } from 'react';
import { View } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

export const Home = () => {
  const videoRef = useRef<VideoRef>(null);

  return (
    <View className="flex-1 bg-black">
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        ref={videoRef}
        className="w-full h-full"
        resizeMode="cover"
        repeat
        muted
        paused={false}
        onError={(e) => console.log('Video error:', e)}
        onLoad={() => console.log('Video loaded')}
      />
    </View>
  );
};
