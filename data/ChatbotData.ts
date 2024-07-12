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
            keyboardType: 'text'
        },
        metadata: {},
        trigger: 1,
    },
    {
        id: 1,
        message: `Nice to meet you!`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        botDelay: 500,
        optionsStyle: '',
        options: [],
        inputAttributes: {
            keyboardType: 'email-address'
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
            keyboardType: 'email-address'
        },
        metadata: {},
        trigger: 3,
    },
    {
        id: 3,
        message: `Shall we start?`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Yes', trigger: 6 },
            { title: 'No', trigger: 4 },
        ],
    },
    {
        id: 4,
        message: `No worries, feel free to come back to this anytime`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'I want to restart', trigger: 0 },
            { title: `Let's continue`, trigger: 6 },
        ],
    },
    {
        id: 5,
        message: `Alright, so...`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        trigger: 0
    },
    {
        id: 6,
        message: `Answer how often this happened in the last two weeks`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        trigger: 7
    },
    {
        id: 7,
        message: `Little interest or pleasure in doing things`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 8, value: 0 },
            { title: `Several days`, trigger: 8, value: 1 },
            { title: 'More than half the days', trigger: 8, value: 2 },
            { title: `Nearly every day`, trigger: 8, value: 3 },
        ],
    },
    {
        id: 8,
        message: `Feeling down, depressed, or hopeless`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 9, value: 0 },
            { title: `Several days`, trigger: 9, value: 1 },
            { title: 'More than half the days', trigger: 9, value: 2 },
            { title: `Nearly every day`, trigger: 9, value: 3 },
        ],
    },
    {
        id: 9,
        message: `Trouble falling or staying asleep, or sleeping too much`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 10, value: 0 },
            { title: `Several days`, trigger: 10, value: 1 },
            { title: 'More than half the days', trigger: 10, value: 2 },
            { title: `Nearly every day`, trigger: 10, value: 3 },
        ],
    },
    {
        id: 10,
        message: `Feeling tired or having little energy`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 11, value: 0 },
            { title: `Several days`, trigger: 11, value: 1 },
            { title: 'More than half the days', trigger: 11, value: 2 },
            { title: `Nearly every day`, trigger: 11, value: 3 },
        ],
    },
    {
        id: 11,
        message: `Poor appetite or overeating`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 12, value: 0 },
            { title: `Several days`, trigger: 12, value: 1 },
            { title: 'More than half the days', trigger: 12, value: 2 },
            { title: `Nearly every day`, trigger: 12, value: 3 },
        ],
    },
    {
        id: 12,
        message: `Feeling bad about yourself or that you are a failure or have let yourself or your family down`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 13, value: 0 },
            { title: `Several days`, trigger: 13, value: 1 },
            { title: 'More than half the days', trigger: 13, value: 2 },
            { title: `Nearly every day`, trigger: 13, value: 3 },
        ],
    },
    {
        id: 13,
        message: `Trouble concentrating on things, such as reading the newspaper or watching television`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 14, value: 0 },
            { title: `Several days`, trigger: 14, value: 1 },
            { title: 'More than half the days', trigger: 14, value: 2 },
            { title: `Nearly every day`, trigger: 14, value: 3 },
        ],
    },
    {
        id: 14,
        message: `Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 15, value: 0 },
            { title: `Several days`, trigger: 15, value: 1 },
            { title: 'More than half the days', trigger: 15, value: 2 },
            { title: `Nearly every day`, trigger: 15, value: 3 },
        ],
    },
    {
        id: 15,
        message: `Thoughts that you would be better off dead, or of hurting yourself`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 16, value: 0 },
            { title: `Several days`, trigger: 16, value: 1 },
            { title: 'More than half the days', trigger: 16, value: 2 },
            { title: `Nearly every day`, trigger: 16, value: 3 },
        ],
    },
    {
        id: 16,
        message: `If you feel like you can't keep yourself or others safe right now, call the Samaritans to reach someone to support you or 999 in case of emergency.`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Call 999', trigger: 17, value: 0, telephone: '999' },
            { title: `Call Samaritans`, trigger: 17, value: 1, telephone: '116123' },
            { title: 'Continue', trigger: 18, value: 2 },
            { title: 'End Conversation', trigger: 0, value: 3 },
        ],
    },
    {
        id: 17,
        message: `Do you want to continue?`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Yes', trigger: 0, value: 0, telephone: '+447506111484' },
            { title: `No`, trigger: 18, value: 1, telephone: '116123' },
        ],
    },
    {
        id: 18,
        message: `How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Not at all', trigger: 19, value: 0 },
            { title: `Several days`, trigger: 19, value: 1 },
            { title: 'More than half the days', trigger: 19, value: 2 },
            { title: `Nearly every day`, trigger: 19, value: 3 },
        ],
    },
    {
        id: 19,
        message: `Thanks for answering these,!`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        trigger: 20
    },
    {
        id: 20,
        message: `Now I will need to ask you for some personal information`,
        userInput: USER_INPUT.NO_INPUT,
        user: false,
        trigger: 21
    },
    {
        id: 21,
        message: `What is your phone number?`,
        userInput: USER_INPUT.TEXT_INPUT,
        user: false,
        keyboardType: 'phone-pad',
        trigger: 22,
    },
    {
        id: 22,
        message: `How can we contact you?`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'Phone', trigger: 23 },
            { title: `Email`, trigger: 23 },
            { title: 'Push', trigger: 23 },
        ],
    },
    {
        id: 23,
        message: `Thanks, that's all for now!`,
        userInput: USER_INPUT.OPTIONS,
        user: false,
        options: [
            { title: 'End conversation', trigger: 0 },
        ],
    },
];