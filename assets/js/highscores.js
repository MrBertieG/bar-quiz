const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores.map(score => {
    //Fills in the input text with the name enetered by user
    return `<li class="high-score"> ${score.name} - ${score.score}</li>`
}).join('');