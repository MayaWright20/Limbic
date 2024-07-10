export enum USER_RESPONSE {
    'TEXT_INPUT',
    'DATE_INPUT',
    'NUMBER_INPUT',
    'OPTIONS',
    'NO_INPUT',
    'END',
};

export interface TextInputLayoutProps {
    onPress: () => void;
    title: string;
    onChangeText?: (text: string) => void;
};