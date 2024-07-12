import { KeyboardType } from "react-native";

export enum USER_INPUT {
    'NO_INPUT',
    'TEXT_INPUT',
    'OPTIONS',
};

export interface TextInputLayoutProps {
    onPress: () => void;
    title: string;
    onChangeText?: (text: string) => void;
    value: string | undefined;
    keyboardType: KeyboardType
};