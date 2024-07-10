import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import TextInputLayout from '../inputs/TextInputLayout';
import ScreenLinearBackground from '../../constants/ScreenLinearBackground';
import { CHAT_BOT_DATA } from '../../data/ChatbotData';
import Message from '../inputs/Message';
import { COLORS } from '../../constants/Colors';

export default function ChatScreen() {
  let conversation = CHAT_BOT_DATA;

  const onPress = () => {
    console.log('onPress');
  };

  const onChangeText = () => {
    console.log('onChangeText');
  };

  const renderItem = ({ item }: any) => {
    return (
      <Message 
      title={item.chatbot} 
      borderColor={item.user ? COLORS.HIGHTLIGHT_DARK_BLUE : COLORS.DARK_LIME}
      alignSelf={item.user ? 'flex-end' : 'flex-start'}
      />
    )
  };

  return (
    <ScreenLinearBackground>
      <View style={styles.flatListWrapper}>
      <FlatList
        style={styles.flatList}
        data={conversation}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(item.id)}
      />
      </View>
      <TextInputLayout title='Send' onPress={onPress} onChangeText={onChangeText} />
    </ScreenLinearBackground>
  );
};

const styles = StyleSheet.create({
  flatListWrapper: {
    flex: 1,
  },
  flatList: {
    width: '90%',
    paddingVertical: 20,
    marginHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  }
});
