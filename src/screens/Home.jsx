import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Video from 'react-native-video';
import Feather from 'react-native-vector-icons/Feather';

export const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const background = require('../assests/video1.mp4');

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableArea} onPress={() => setIsPlaying(p => !p)}>
        <Video
          source={background}
          paused={!isPlaying}
          repeat
          resizeMode="cover"
          style={styles.backgroundVideo}
        />

        {/* Optional: Icon in the center for feedback */}
        {!isPlaying && (
          <View style={styles.controls}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="play" color="#fff" size={40} />
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  pressableArea: {
    flex: 1,
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  controls: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  iconButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 16,
    borderRadius: 40,
  },
});
