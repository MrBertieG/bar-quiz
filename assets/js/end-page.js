const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//This will be used for storing the names and scores on local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//Will always add the latest user score on the top
finalScore.innerText = mostRecentScore;

/*
*This feature will allow the user to press Key up to select the latest
* username that was entered prior
*/
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value ;
});

/*
* Prevents autorefresh so that the top 5 usersnames 
* will appear if the quiz is taken multiple times
* will also prevent the Save button working if no username inputed
*/
saveHighScoreBtn = q => {
    q.preventDefault ();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);
    //Sends user to Home page after pressing Save
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
