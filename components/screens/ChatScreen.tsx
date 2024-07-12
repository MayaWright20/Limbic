import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

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
  const showOptions = CHAT_BOT_DATA[currentID].userInput === USER_INPUT.OPTIONS;

  const [conversation, setConversation] = useState<any>([CHAT_BOT_DATA[currentID]]);
  const [showTextInputLayout, setShowTextInputLayout] = useState<boolean>(showUserTextInput);
  const [text, onChangeText] = useState<string | undefined>(undefined);

  const onPressTextInput = () => {
    if (text === undefined) {
      return Alert.alert('Response is needed to proceed');
    }

    const userResponse = { id: `user${currentID}`, message: text, user: true };
    const nextID = CHAT_BOT_DATA[currentID].trigger;

    setConversation((prev) => [...prev, userResponse, CHAT_BOT_DATA[nextID]]);
    dispatch(setCurrentID(nextID));
    onChangeText(undefined);
  };

  useEffect(() => {
    const nextID = CHAT_BOT_DATA[currentID].trigger;

    if (showUserTextInput) {
      setShowTextInputLayout(true);
    } else if (showOptions) {

      // const options = { id: `options${currentID}`, message: '', user: false, userInput: USER_INPUT.OPTIONS };

      const options = CHAT_BOT_DATA[currentID]
      setConversation((prev) => [...prev, options, CHAT_BOT_DATA[nextID]]);
      // dispatch(setCurrentID(nextID));
    } else {
      setShowTextInputLayout(false);
      setConversation((prev) => [...prev, CHAT_BOT_DATA[nextID]]);
      dispatch(setCurrentID(nextID));
    }

    if (CHAT_BOT_DATA[currentID].trigger === 'END') {
      Alert.alert('END of convo');
      setTimeout(() => {
        dispatch(setCurrentID(0));
        setConversation([CHAT_BOT_DATA[0]]);
      }, 5000);
    }
  }, [currentID]);


  const onPressOption = (value) => {
    console.log('option pressed', value)
  }



  const renderItem = ({ item }: any) => {
    return (
      <>
        <Message
          title={item.message}
          borderColor={item.user ? COLORS.HIGHTLIGHT_DARK_BLUE : COLORS.DARK_LIME}
          alignSelf={item.user ? 'flex-end' : 'flex-start'}
        />
        {
          item.options && item.options.map((value, index) => {
            return (
              <Option key={index} id={index} onPress={() => onPressOption(value.value)} title={value.title} />
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
