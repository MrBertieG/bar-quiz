const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//Question Array
let questions = [
    {
        question: 'What are the ingreadients of a Vodka Martini?',
        choice1: 'Vodka, Lime and Soda',
        choice2: 'Vodka, Vermouth and Ice',
        choice3: 'Vodka, Orange Juice and Lemonade',
        choice4: 'Vodka and Water',
        answer: 2,
    },
    {
        question: 'What is the main spirit in an Old Fashioned',
        choice1: 'Gin',
        choice2: 'Red Wine',
        choice3: 'Whiskey/Burbon',
        choice4: 'Gin',
        answer: 3,
    },
    {
        question: 'What makes the cocktail Whiskey Sour a "sour" cocktail',
        choice1: 'The Lime',
        choice2: 'The Egg White',
        choice3: 'The type of Whiskey',
        choice4: 'The Lime juice around the glass edge',
        answer: 2,
    },
    {
        question: 'What is a Cuba Libre? ',
        choice1: 'Rum and Coke',
        choice2: 'Gin and Coke',
        choice3: 'Gin and Orange Juice',
        choice4: 'Straight Rum served with a Cuban Cigar',
        answer: 1,
    },
    {
        question: 'What is the main ingredient in a Sangria cocktail?',
        choice1: 'Coke',
        choice2: 'Whte Wine',
        choice3: 'Red Wine',
        choice4: 'Oranges',
        answer: 3,
    },
    {
        question: 'What goes in a B52 shot?',
        choice1: 'Vodka and Baileys',
        choice2: 'Just Water and Lime',
        choice3: 'Coffe Liqueure, Double Cream, Orange Liqueure',
        choice4: 'None of the above',
        answer: 3,
    },
    {
        question: 'What goes in White Russian?',
        choice1: 'Vodka, Coffee Liqueure and Double Cream',
        choice2: 'Whiskey, Orange Liqueure and Coke',
        choice3: 'Coffe Liqueure, Double Cream, Orange Liqueure',
        choice4: 'Tequila, Rum, Gin and Milk',
        answer: 1,
    },
    {
        question: 'What goes in a Cosmopolitan?',
        choice1: 'Vodka, Triple Sec, Cranberry Juice and Lime Juice',
        choice2: 'Gin, Cranberry Juice, Peach Schnapps and Sugar ',
        choice3: 'Vodka and Pomegranate Juice',
        choice4: 'None of the above',
        answer: 1,
    },
    {
        question: 'What goes in a Negroni?',
        choice1: 'Rum and Coffe Liqueure',
        choice2: 'Gin, Vermouth and Campari',
        choice3: 'Pernod, Galliano and Prosecco',
        choice4: 'Prosecco and Aperol',
        answer: 2,
    },
    {
        question: 'What goes in a Black Velvet?',
        choice1: 'Vodka and Baileys',
        choice2: 'Guiness and Blackcurrant',
        choice3: 'Champagne and Stout in a floute glass',
        choice4: 'Vodka, Soda and Tabasco',
        answer: 3,
    }

];

const score_points = 100;
const max_questions = 10;

//Game Function
let startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

//Keeping Track of the score
let getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecentScore', score);

        //Will send user to the results page once the quiz has been completed.
        return window.location.assign('/end.html');
    }

    //Question Counter
    //Calculates the current question number the user is and adds the % in the loading bar
    questionCounter++;
    progressText.innerText =`Question ${questionCounter} of ${max_questions}`;
    progressBarFull.style.width = `${(questionCounter/max_questions) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //Determines the colour of the box if the answer is correct or incorrect
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //Increases the total score by 100 points if correct
        if(classToApply === 'correct') {
            incrementScore(score_points);
        }
        //Increase the score if true
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

let incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};

startGame();