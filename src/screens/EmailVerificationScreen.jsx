import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

export default function EmailVerificationScreen({navigation}) {
  const [timeLeft, setTimeLeft] = useState(60); // Initial time in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [code, setCode] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsResendDisabled(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

   const handleCodeChange = (text, index) => {
    if (!/^\d?$/.test(text)){ return;}
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
      if (text && index < code.length - 1) {
    const nextInput = inputRefs.current[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }
  };
  const handleResendCode = () => {
    setTimeLeft(60);
    setIsResendDisabled(true);
    // Add your resend logic here
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View className="flex-1 items-center bg-white px-6  pb-8">
      {/* Logo */}
      <View className="mb-12">
        <Image
          source={require('../assests/Header.png')}
          className="w-24 h-24"
          resizeMode="contain"
        />
      </View>

      {/* Email Icon */}
      <View className="mb-8">
        <Image
          source={require('../assests/EmailLogo.png')}
          className="w-[120px] h-[120px]"
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text className="text-2xl font-bold text-center mb-4">Check your email</Text>

      {/* Instructions */}
      <View className="mb-8">
        <Text className="text-center text-gray-600 px-12 font-semibold text-md" >
          We send the code to the email  on your device
        </Text>
      </View>
   <View className="flex-row justify-center mb-8">
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            value={code[index]}
            onChangeText={(text) => handleCodeChange(text, index)}
            keyboardType="number-pad"
            maxLength={1}
            className={`w-20 h-16 mx-1 border-2 ${focusedIndex === index ? 'border-blue-500' : 'border-gray-300'} rounded-full text-center text-2xl `}
            onFocus={() => setFocusedIndex(index)}
             ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      {/* Timer */}
      <View className="mb-8">
        <Text className="text-center text-gray-500">
          Code expires in: {formatTime(timeLeft)}
        </Text>
      </View>

      {/* Resend Code */}
      <View className="flex-row mb-10">
        <Text className="text-gray-600">Didn't receive code? </Text>
        <TouchableOpacity onPress={handleResendCode} disabled={isResendDisabled}>
          <Text className={'font-bold'}>
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="w-full h-px bg-gray-200 mb-8" />

      {/* Verify Button */}
      <TouchableOpacity
        className="w-full bg-blue-500 py-4 rounded-full items-center"
        onPress={() => navigation.navigate('AccountTypeScreen')}
      >
        <Text className="text-white font-bold text-lg">Verify</Text>
      </TouchableOpacity>
    </View>
  );
}
