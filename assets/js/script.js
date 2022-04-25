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

