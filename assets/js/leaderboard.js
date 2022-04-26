/* jshint esversion: 6 */
//Set out basic const functions.//
const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Display high scores and which user achieved them.//
highScoresList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join('');