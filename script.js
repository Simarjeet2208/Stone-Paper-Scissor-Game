
const ans = document.querySelectorAll('.ans')
// console.log(ans);

const answerDisplay = document.querySelector('#result')

let score =  JSON.parse(localStorage.getItem('points')) || {
    wins:0,
    loses:0,
    ties:0
} 



function computerAnswer(){
    let random = Math.random();
    let answer = '';

    if (random > 0 && random < 1/3) {
        answer = 'rock';        
    }
    else if (random > 1/3 && random < 2/3){
        answer = 'paper';
    }
    else {
        answer = 'scissor';
    }
    return answer
}

function ourAnswer(guess){

    let result = '';

    let ourGuess = guess;
    // console.log(ourGuess);
    let answer = computerAnswer();

    if (ourGuess === 'rock') {
        if (answer === 'rock') {
            result = 'tie';
        }
        else if (answer === 'paper') {
            result = 'lose';
        }
        else if (answer === 'scissor') {
            result = 'win';
        }
    }
    else if (ourGuess === 'paper') {
        if (answer === 'paper') {
            result = 'tie';
        }
        else if (answer === 'scissor') {
            result = 'lose';
        }
        else if (answer === 'rock') {
            result = 'win';
        }
    }
    else if (ourGuess === 'scissor') {
        if (answer === 'scissor') {
            result = 'tie';
        }
        else if (answer === 'rock') {
            result = 'lose';
        }
        else if (answer === 'paper') {
            result = 'win';
        }
    }
    if (result === 'tie'){
        score.ties +=1;
    }
    else if (result === 'win'){
        score.wins +=1;
    }
    else if (result === 'lose'){
        score.loses +=1;
    }    

    jsonScore = JSON.stringify(score)
    localStorage.setItem('points',jsonScore)

    ans[0].innerHTML = ourGuess;
    ans[1].innerHTML = answer;
    finalScore = `Wins:${score.wins} , Loses:${score.loses} , ties:${score.ties}`
//     alert(`you ${result}, your answer is ${ourGuess} and opponent's ${answer}
// ${finalScore}`)
    // return result;
    answerDisplay.innerHTML = finalScore ;
} 
function restart() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('points')
    answerDisplay.innerHTML = `Wins:0 , Loses:0 , ties:0`;
}

