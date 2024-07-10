import { USER_RESPONSE } from "../Types";

export const CHAT_BOT_DATA = [
    {
        id: 1,
        chatbot: `Hello, What is your name?`,
        userResponse: USER_RESPONSE.TEXT_INPUT,
        trigger: 2,
        user: false,
        botDelay: 10,
        optionStyle: '',
    },
    {
        id: 2,
        chatbot: `Nice to meet you {first_name}!`,
        userResponse: USER_RESPONSE.NO_INPUT,
        trigger: 3,
        user: true
    },
    {
        id: 3,
        chatbot: `For us to get started I will need to ask you some questions on how you've been feeling lately`,
        userResponse: USER_RESPONSE.NO_INPUT,
        trigger: 4,
        user: false
    },
    {
        id: 4,
        chatbot: `Shall we start?`,
        userResponse: USER_RESPONSE.OPTIONS,
        options: [
            {'yes': 0},
            {'no': 1},
        ],
        trigger: 4,
        user: false
    },
];