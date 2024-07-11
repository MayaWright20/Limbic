import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import ScreenLinearBackground from '../../constants/ScreenLinearBackground';
import Message from '../inputs/Message';
import TextInputLayout from '../inputs/TextInputLayout';

import { CHAT_BOT_DATA } from '../../data/ChatbotData';
import { COLORS } from '../../constants/Colors';
import { USER_INPUT } from '../../Types';
import { SCREEN_WIDTH } from '../../constants/Dimensions';

export default function ChatScreen() {

  let counter: number = 1;
  let conversation = CHAT_BOT_DATA.slice(0, counter);
  const [showTextInputLayout, setShowTextInputLayout] = useState<boolean>(false);
  const [text, onChangeText] = useState<string>('');

  const onPressTextInput = () => {
    console.log('onPressTextInput');
  };

  useEffect(() => {
    conversation.forEach((item) => {
      if (item.userInput === USER_INPUT.TEXT_INPUT) {
        setShowTextInputLayout(true);
      } else {
        setShowTextInputLayout(false);
      }
    });
  }, [conversation]);

  const renderItem = ({ item }: any) => {

    return (
      <Message
        title={item.message}
        borderColor={item.user ? COLORS.HIGHTLIGHT_DARK_BLUE : COLORS.DARK_LIME}
        alignSelf={item.user ? 'flex-end' : 'flex-start'}
      />
    )
  };

  return (
    <ScreenLinearBackground>
      <View style={styles.flatListWrapper}>
        <FlatList
          data={conversation}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(item.id)}
          contentContainerStyle={styles.flatList}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}>
          <View>
            {
              showTextInputLayout ?
                <TextInputLayout
                  title='Send'
                  onPress={onPressTextInput}
                  onChangeText={onChangeText}
                  value={text}
                />
                :
                null
            }
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenLinearBackground>
  );
};

const styles = StyleSheet.create({
  flatListWrapper: {
    flex: 1,
  },
  flatList: {
    width: '90%',
    marginHorizontal: 10,
    position: 'absolute',
    bottom: 0,
  },
  container: {
    backgroundColor: '#ffffff',
    borderColor: COLORS.HIGHTLIGHT_DARK_BLUE,
    borderWidth: 2,
    borderRadius: 100,
    flexDirection: 'row',
    overflow: 'hidden',
    width: SCREEN_WIDTH / 1.05,
    alignSelf: 'center',
    marginBottom: 15
  },
  textInputs: {
    backgroundColor: 'white',
    flex: 2,
    height: 50,
    paddingHorizontal: 25
  },
  touchableOpacity: {
    backgroundColor: COLORS.HIGHTLIGHT_DARK_BLUE,
    flex: 1,
    borderRadius: 100,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
