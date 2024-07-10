import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default function Message({
    title, 
    borderColor, 
    alignSelf
}: {
    title: string; 
    borderColor: string;
    alignSelf: "flex-start" | "flex-end";
}){
    return (
        <View style={[
            styles.container, 
            {borderColor: borderColor,
            alignSelf: alignSelf}]}>
            <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        maxWidth: '100%'
    }
});