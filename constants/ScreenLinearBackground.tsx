import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

import { COLORS } from "./Colors";

export default function ScreenLinearBackground({ children }: any) {
    return (
        <LinearGradient
            style={styles.linearbackground}
            colors={[COLORS.LIME, COLORS.LIGHT_BLUE]}
        >
            {children}
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    linearbackground: {
        flex: 1,
        paddingTop: 30,
    }
});