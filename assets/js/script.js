/* jshint esversion: 6 */
//Create basic const functions
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

//Call the various functions created
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
	{
		question: "What is South Africas national flower?",
		choice1: "Rose",
		choice2: "Sunflower",
		choice3: "Protea",
		choice4: "Lily",
		answer: 3
	},
	{
		question: "Where was Nelson Mandela imprisoned for 18 years?",
		choice1: "Kenya",
		choice2: "Maldives",
		choice3: "Zanzibar",
		choice4: "Robben Island",
		answer: 4
	},
	{
		question: "Durban,South Africas busiest port, is on what body of water?",
		choice1: "Red Sea",
		choice2: "Indian Ocean",
		choice3: "Pacific Ocean",
		choice4: "Meditteranean Sea",
		answer: 2
	},
	{
		question: "Table Mountain overlooks what city?",
		choice1: "Cape Town",
		choice2: "Durban",
		choice3: "Pretoria",
		choice4: "Nelspruit",
		answer: 1
	},
];

//Create points for correct answers and maximum question count
const POINTS = 100;
const TOTAL_QUESTIONS = 4;

//Start game function
function startGame() {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
};

//Call new question each time one question is completed
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > TOTAL_QUESTIONS) {
        // go to end page when finished
		return window.location.assign('end.html');
    };
    questionCounter++;
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

//Determine correct or incorrect result
choices.forEach(choice => {
	choice.addEventListener("click", function(event) {
		if (!acceptingAnswers) return;

        acceptingAnswers = false;
		const selectedChoice = event.target;
		const selectedAnswer = selectedChoice.dataset['number'];

        getNewQuestion();

    });
});

startGame();

