import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
        backgroundColor: 'pink'
    }
});