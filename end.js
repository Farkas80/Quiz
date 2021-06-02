const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
    console.log("Clicked");
    e.preventDefault();
}