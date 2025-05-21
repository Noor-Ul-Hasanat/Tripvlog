// screens/BoardingScreen.js
import React from 'react';
import {View,Text,  StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
export  const Boarding = ({ navigation })=> {
  return (
    <ImageBackground
      source={require('../assests/OnBoarding.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Press play on your{'\n'}next adventure!</Text>
        <Text style={styles.subtitle}>
          Discover, book, and explore{'\n'}new destinations for adventure.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00e676',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00e676',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
