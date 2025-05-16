const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Merge your custom config with the default one
const config = mergeConfig(getDefaultConfig(__dirname), {
  // You can add additional Metro settings here if needed
});

// Wrap the config with NativeWind support
module.exports = withNativeWind(config, {
  input: './global.css', // Path to your Tailwind CSS file
});
