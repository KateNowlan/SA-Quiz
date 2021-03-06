/* jshint esversion: 6 */
//Create basic const functions
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 4;

//save and display final score on end page
finalScore.innerText = `You scored ${mostRecentScore}`;

//add event listener for username
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

//save the score
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
     highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    //update high scores
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //return to home page after saving name and high score
    window.location.assign('index.html');
};