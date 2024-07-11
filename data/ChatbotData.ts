import { USER_INPUT } from "../Types";

export const CHAT_BOT_DATA = [
    {
        id: 1,
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
        trigger: 2,
    },
    {
        id: 2,
        message: `Nice to meet you {first_name}!`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        botDelay: 1000,
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
        message: `For us to get started I will need to ask you some questions on how you've been feeling lately`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        botDelay: 1000,
        optionsStyle: '',
        options: [],
        inputAttributes: {
            keyboardType : 'email-address'
        },
        metadata: {},
        trigger: 2,
    },
    {
        id: 4,
        message: `Shall we start?`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        botDelay: 1000,
        optionsStyle: '',
        options: [
            { value: 1, label: 'Yes', trigger: 6 },
            { value: 2, label: 'No', trigger: 5 },
        ],
        inputAttributes: {
            keyboardType : 'email-address'
        },
        metadata: {},
        trigger: {1: 6, 2: 5},
    },

];