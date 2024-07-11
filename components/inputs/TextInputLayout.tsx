import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import { SCREEN_WIDTH } from "../../constants/Dimensions";
import { COLORS } from "../../constants/Colors";

import { TextInputLayoutProps } from "../../types/Types";

export default function TextInputLayout({
    onPress,
    title,
    onChangeText,
    value
}: TextInputLayoutProps) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputs}
                placeholder="Type here..."
                onChangeText={onChangeText}
                value={value}
            />
            <TouchableOpacity
                onPress={onPress}
                style={styles.touchableOpacity}>
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
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
