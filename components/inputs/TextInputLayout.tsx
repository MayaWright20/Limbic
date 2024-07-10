import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";

import { SCREEN_WIDTH } from "../../constants/Dimensions";
import { COLORS } from "../../constants/Colors";

import { TextInputLayoutProps } from "../../Types";

export default function TextInputLayout({
    onPress,
    title,
    onChangeText,
}: TextInputLayoutProps) {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.textInputs}
                            placeholder="Type here..."
                            onChangeText={onChangeText}
                        />
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.touchableOpacity}>
                            <Text>{title}</Text>
                        </TouchableOpacity>
                    </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
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
