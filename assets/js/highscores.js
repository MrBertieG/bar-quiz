const highScoresList = document.querySelector('#highScoresList');
/*const highScores = JSON.parse(localStorage.getItem('highScores')) || [];*/

/*
*Fills in the input text with the name enetered by user 
* and places the highest first score in the highest order
*/
if (highScoresList != null) {
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score"> ${score.name} - ${score.score}</li>`;
    }).join('');
}