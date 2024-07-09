import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

import { COLORS } from "./Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./Dimensions";

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
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    }
});