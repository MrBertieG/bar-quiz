const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScoresList = document.querySelector('#highScoresList');


//This will be used for storing the names and scores on local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/*
*Fills in the input text with the name enetered by user 
* and places the highest first score in the highest order
*/
if (highScoresList != null) {
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score"> ${score.name} - ${score.score}</li>`;
    }).join('');
}

//Will always add the latest user score on the top
if (finalScore != null) {
    finalScore.innerText = mostRecentScore;
}

/*
*This feature will allow the user to press Key up to select the latest
* username that was entered prior
*/
if (username != null) {
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value ;
    });
}

/*
* Prevents autorefresh so that the top 5 usersnames 
* will appear if the quiz is taken multiple times
* will also prevent the Save button working if no username inputed
*/

function userAlert() {
    let x = document.forms["fname"]["names"].value;
    if (x == "") {
        alert("Please enter a name");
        return false;
    }
}

let saveHighScore = e => {

    e.preventDefault ();
    
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);
    //Sends user to Highscore page after pressing Save
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('highscores.html');
};