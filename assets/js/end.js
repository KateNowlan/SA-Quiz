/* jshint esversion: 6 */
//Create basic const functions
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");


//add event listener for username
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

//save the score
saveHighScore = e => {
    e.preventDefault()
};