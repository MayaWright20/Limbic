import { USER_INPUT } from "../types/Types";

export const CHAT_BOT_DATA = [
    {
        id: 0,
        message: `Hello, What is your name?`,
        userInput: USER_INPUT.TEXT_INPUT,
        user: false,
        botDelay: 0,
        optionsStyle: '',
        options: [],
        inputAttributes: {
            keyboardType : 'text'
        },
        metadata: {},
        trigger: 1,
    },
    {
        id: 1,
        message: `Nice to meet you {first_name}!`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        botDelay: 500,
        optionsStyle: '',
        options: [],
        inputAttributes: {
            keyboardType : 'email-address'
        },
        metadata: {},
        trigger: 2,
    },
    {
        id: 2,
        message: `For us to get started I will need to ask you some questions on how you've been feeling lately`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        botDelay: 500,
        optionsStyle: '',
        options: [],
        inputAttributes: {
            keyboardType : 'email-address'
        },
        metadata: {},
        trigger: 3,
    },
    {
        id: 3,
        message: `Shall we start?`,
        userInput: USER_INPUT.TEXT_INPUT,
        user: false,
        botDelay:500,
        optionsStyle: '',
        options: [
            { value: 1, label: 'Yes', trigger: 5 },
            { value: 2, label: 'No', trigger: 4 },
        ],
        inputAttributes: {
            keyboardType : 'email-address'
        },
        metadata: {},
        trigger: 4,
    },
    {
        id: 4,
        message: `Shall we start?`,
        userInput: USER_INPUT.TEXT_INPUT,
        user: false,
        botDelay:500,
        optionsStyle: '',
        options: [
            { value: 1, label: 'Yes', trigger: 5 },
            { value: 2, label: 'No', trigger: 4 },
        ],
        inputAttributes: {
            keyboardType : 'email-address'
        },
        metadata: {},
        trigger: 'END',
    },
];