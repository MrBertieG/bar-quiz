const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('#question'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0 ;
let questionCounter = 0;
let availableQuestions = [];

let questionts = [
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },
    {
        question: 'What are the 3 main ingreadients of a Vodka Martini?',
        choice1: 'Vodka, lime, soda',
        choice2: 'Vodka, Vermouth, ice',
        choice3: 'Vodka, orange juice, lemonade',
        answer: 2,
    },

]