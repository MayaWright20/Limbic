import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import TextInputLayout from '../TextInput.tsx/TextInputLayout';
import ScreenLinearBackground from '../../constants/ScreenLinearBackground';

export default function ChatScreen(){
    const onPress = ()=> {
        console.log('onPress');
    };

    const onChangeText = () => {
        console.log('onChangeText');
    };
  return (
    <ScreenLinearBackground>
    <TextInputLayout 
        onPress={onPress} 
        title={'Send'} 
        onChangeText={onChangeText}>
        {/* Flatlist will go here and show the conversation */}
    </TextInputLayout>
    </ScreenLinearBackground>
  );
};

const styles = StyleSheet.create({
});
