import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import call from 'react-native-phone-call'

import ScreenLinearBackground from '../../constants/ScreenLinearBackground';
import Message from '../inputs/Message';
import TextInputLayout from '../inputs/TextInputLayout';

import { CHAT_BOT_DATA } from '../../data/ChatbotData';
import { COLORS } from '../../constants/Colors';
import { USER_INPUT } from '../../types/Types';
import { SCREEN_WIDTH } from '../../constants/Dimensions';
import { RootState } from '../../redux/store/store';
import { setCurrentID } from '../../redux/slices/chatState';
import Option from '../inputs/Option';

export default function ChatScreen() {

  const dispatch = useDispatch();
  const currentID = useSelector((state: RootState) => state.chat.currentID);
  const showUserTextInput = CHAT_BOT_DATA[currentID].userInput === USER_INPUT.TEXT_INPUT;
  const noInput = CHAT_BOT_DATA[currentID].userInput === USER_INPUT.NO_INPUT;


  const [conversation, setConversation] = useState<any>([CHAT_BOT_DATA[currentID]]);
  const [showTextInputLayout, setShowTextInputLayout] = useState<boolean>(showUserTextInput);
  const [text, onChangeText] = useState<string | undefined>(undefined);


  const onPressTextInput = () => {
    if (text === undefined) {
      return Alert.alert('Please add a response to continue');
    }

    const userResponse = { id: `user${currentID}`, message: text, user: true };
    const nextID = CHAT_BOT_DATA[currentID].trigger;

    setConversation((prev) => [...prev, userResponse, CHAT_BOT_DATA[nextID]]);
    dispatch(setCurrentID(nextID));
    onChangeText(undefined);
  };

  useEffect(() => {
    const nextID = CHAT_BOT_DATA[currentID].trigger;

    if (currentID === 0) {
      setConversation([CHAT_BOT_DATA[currentID]])
    }

    if (showUserTextInput) {
      setShowTextInputLayout(true);
    } else if (noInput) {
      setShowTextInputLayout(false);
      setConversation((prev) => [...prev, CHAT_BOT_DATA[nextID]]);
      dispatch(setCurrentID(nextID));
    } else{
      setShowTextInputLayout(false);
    }

    if (CHAT_BOT_DATA[currentID].trigger === 'END') {
      Alert.alert('END of convo');
      setTimeout(() => {
        dispatch(setCurrentID(0));
        setConversation([CHAT_BOT_DATA[0]]);
      }, 5000);
    }
  }, [currentID]);


  const onPressOption = (trigger, title, telephone) => {
    if (telephone) {
      const args = {
        number: telephone,
        prompt: true, 
        skipCanOpen: true
      }

      call(args).catch(console.error)
    } else {
      const userResponse = { id: `user${currentID}`, message: title, user: true };
      setConversation((prev) => [...prev, userResponse, CHAT_BOT_DATA[trigger]]);
      dispatch(setCurrentID(trigger));
    }
  };

  const renderItem = ({ item }: any) => {
    return (
      <>
        <Message
          title={item.message}
          borderColor={item.user ? COLORS.HIGHTLIGHT_DARK_BLUE : COLORS.DARK_LIME}
          alignSelf={item.user ? 'flex-end' : 'flex-start'}
        />
        {
          item.options && item.options.map(({ title, trigger, telephone }, index) => {
            return (
              <Option 
              key={index} 
              id={index} 
              onPress={() => onPressOption(trigger, title, telephone)} 
              title={title} />
            )
          })
        }
      </>
    );
  };

  return (
    <ScreenLinearBackground>
      <View style={styles.flatListWrapper}>
        <FlatList
          data={conversation}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={styles.flatList}
        />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            {showTextInputLayout ? (
              <TextInputLayout
                title='Send'
                onPress={onPressTextInput}
                onChangeText={onChangeText}
                value={text}
                keyboardType={CHAT_BOT_DATA[currentID].keyboardType}
              />
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenLinearBackground>
  );
}

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
    marginBottom: 15,
  },
  textInputs: {
    backgroundColor: 'white',
    flex: 2,
    height: 50,
    paddingHorizontal: 25,
  },
  touchableOpacity: {
    backgroundColor: COLORS.HIGHTLIGHT_DARK_BLUE,
    flex: 1,
    borderRadius: 100,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
