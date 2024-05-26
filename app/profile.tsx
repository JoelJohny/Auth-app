import React from 'react';
import { View, Text, Image, useColorScheme, Alert, BackHandler } from 'react-native';
import { styled } from 'nativewind';
import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const Profile = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          "Logout",
          "Are you sure you want to logout?",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "Yes",
              onPress: () => router.replace('/index')
            }
          ],
          { cancelable: false }
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <StyledView className={`flex-1 items-center justify-center p-4 ${
      colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <StyledImage 
        className="w-24 h-24 rounded-full mb-4"
        source={require('@/assets/images/react-logo.png')}
      />
      <StyledText className={`text-xl font-bold mb-2 ${
        colorScheme === 'dark' ? 'text-white' : 'text-black'
      }`}>Joel Johny</StyledText>
      <StyledText className={`text-gray-600 mb-4 ${
        colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-700'
      }`}>joel@example.com</StyledText>
      <StyledView className={`p-4 ${
        colorScheme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } rounded-lg shadow`}>
        <StyledText className={`text-lg font-semibold mb-2 ${
          colorScheme === 'dark' ? 'text-white' : 'text-black'
        }`}>About Me</StyledText>
        <StyledText className={`${
          colorScheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Hello, I am Joel Johny. I love coding and exploring new technologies. In my free time, I enjoy hiking and reading books.
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default Profile;
