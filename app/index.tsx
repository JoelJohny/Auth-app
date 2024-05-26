import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ImageBackground, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledPressable = styled(Pressable);
const StyledImageBackground = styled(ImageBackground);

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const colorScheme = useColorScheme();

  const handleLogin = () => {
    if (username === 'joel' && password === 'joel') {
      router.push('/profile');
    } else {
      Alert.alert('Invalid Credentials', 'Username or password is incorrect.');
    }
  };

  return (
    <StyledImageBackground
    source={require('@/assets/images/partial-react-logo.png')}
      className="flex-1 justify-center"
    >
      <StyledView
        className={`flex-1 items-center justify-center p-4 ${
          colorScheme === 'dark' ? 'bg-black' : 'bg-white'
        } bg-opacity-50`}
      >
        <StyledText className={`text-3xl mb-6 ${
          colorScheme === 'dark' ? 'text-white' : 'text-black'
        } font-bold`}>Login</StyledText>
        <StyledTextInput
          className={`w-full p-4 mb-4 ${
            colorScheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
          } bg-opacity-80  rounded`}
          placeholder="Username"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
        />
        <StyledTextInput
          className={`w-full p-4 mb-4 ${
            colorScheme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
          } bg-opacity-80  rounded`}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <StyledPressable
          className={`${
            colorScheme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'
          } p-4 rounded w-full items-center shadow-lg`}
          onPress={handleLogin}
        >
          <StyledText className="text-white text-lg font-semibold">Login</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledImageBackground>
  );
}
