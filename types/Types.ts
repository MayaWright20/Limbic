export enum USER_INPUT {
    'NO_INPUT',
    'TEXT_INPUT',
    'DATE_INPUT',
    'NUMBER_INPUT',
    'OPTIONS',
    'END',
};

export interface TextInputLayoutProps {
    onPress: () => void;
    title: string;
    onChangeText?: (text: string) => void;
    value: string;
};