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
        question: 'What is the main spirit in an Old Fashioned',
        choice1: 'Gin',
        choice2: 'Red Wine',
        choice3: 'Whiskey',
        answer: 3,
    },
    {
        question: 'What makes the cocktail Whiskey Sour a "sour" cocktail',
        choice1: 'The lime',
        choice2: 'The egg',
        choice3: 'The type of whiskey',
        answer: 2,
    },
    {
        question: 'What is a Cuba Libre? ',
        choice1: 'Rum and Coke',
        choice2: 'Gin and Coke',
        choice3: 'Gin and Orange Juice',
        answer: 1,
    },
    {
        question: 'What is the main ingredient of a Sangria?',
        choice1: 'Coke',
        choice2: 'Whte Wine',
        choice3: 'red Wine',
        answer: 3,
    },
    {
        question: 'What goes in a B52 shot?',
        choice1: 'Vodka and Baileys',
        choice2: 'Just Water and Lime',
        choice3: 'Coffe Liqueure, Double Cream, Orange Liqueure',
        answer: 3,
    },
]