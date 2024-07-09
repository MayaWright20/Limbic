import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./Dimensions";
import { COLORS } from "./Colors";

export default function ScreenHeader({ title }: { title: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: SCREEN_HEIGHT / 16
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        color: COLORS.BLACK
    }
});