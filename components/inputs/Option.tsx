import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default function({onPress, title, id}: {onPress: ()=> any; title: string; id: number}){
    return(
        <TouchableOpacity 
        key={id}
        onPress={onPress} 
        style={styles.container}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.LIME,
        marginBottom: 10,
        padding: 10,
        borderRadius: 100,
        borderWidth: 2,
        paddingHorizontal: 40,
        alignSelf: 'flex-start',
        borderColor: COLORS.DARK_LIME
    }
});