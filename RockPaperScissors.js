
possibleAnswers = [ 'rock', 'paper','lizard','scissors','spock']

player1 = [
    'roc',
    'lizard',
    'scissors',
    'scissors',
]

player2 = [
    'paper',
    'rock',
    'spock',
    'paper',
]

let pointsP1 = 0;
let pointsP2 = 0;

const compareAnswer = (player1, player2) => {
    if(player1.length < player2.length){
        for(let i = 0; i <= player1.length; i++){
            setPoints(player1[i], player2[i]);
        }
    }else{
        for(let i = 0; i < player2.length; i++){
            setPoints(player1[i], player2[i]);
        }
    }

    chooseWinner(pointsP1, pointsP2);
}

// answer2 !== 'rock' || answer2 !== 'paper' || answer2 !== 'scissors' || answer2 !== 'lizard' || answer2 !== 'spock'

const setPoints = (answer1, answer2) => {
    if(answer1===null ||  answer2 === null || answer1===answer2) return;
    else{
        if( !possibleAnswers.find( answer => answer===answer2) )
        {
            if(!possibleAnswers.find( answer => answer===answer1)){
                return;
            }
            pointsP1++;
        }
        else{
            if(answer1 === 'rock' && ( answer2 === 'scissors' || answer2 === 'lizard')){
                pointsP1++;
            }else{
                if(answer1 === 'scissors' && ( answer2 === 'lizard' || answer2 === 'paper')){
                    pointsP1++;
                }else{
                    if(answer1 === 'spock' && ( answer2 === 'rock' || answer2 === 'scissors')){
                        pointsP1++;
                    }else{
                        if(answer1 === 'lizard' && ( answer2 === 'paper' || answer2 === 'spock')){
                            pointsP1++;
                        }else{
                            if(answer1 === 'paper' && ( answer2 === 'rock' || answer2 === 'spock')){
                                pointsP1++;
                            }else{
                                pointsP2++;
                            }
                        }
                    }
                }
            }
        }
    }
    
}

const chooseWinner = (pointsP1, pointsP2) => {
    if(pointsP1 === pointsP2){
        console.log("It's a draw");
    }else{
        if(pointsP1 > pointsP2){
            console.log(`Player 1 won by ${pointsP1 - pointsP2} points`);
        }else{
            console.log(`Player 2 won by ${pointsP2 - pointsP1} points`);
        }
    }
}

compareAnswer(player1, player2);