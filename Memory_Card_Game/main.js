var score = 0;
var error = 0;
var listCards = ['1', '2', '3', '4', '5', '6','7', '8'];

var lockBoard = true;
var cardSet;
var board = [];

const colums = 4;
const rows = 4; 

var cardOne, cardsTwo;

window.onload = function(){
    shuffleCards();
    startGame();
}
function shuffleCards(){
    cardSet = listCards.concat(listCards);
    console.log(cardSet);
    // shuffle
    for (let i=0; i<cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}
    function startGame(){
        //arr the board 4:4
    for(let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < colums; c++){
            let cardImg = cardSet.pop();
            row.push(cardImg);
            
            // create img
            let cards = document.createElement('img');
            cards.id = r.toString()+ '_' +c.toString();
            cards.src = `${cardImg}.jpg`;
            cards.classList.add('cards');
            cards.addEventListener('click', selectCards);
            document.querySelector('.list-card').append(cards);
        }
        board.push(row);
    }
    //console.log(board);
    setTimeout(hideCards,2000);
};
function hideCards(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < colums; c++){
            let cards = document.getElementById(r.toString()+ '_' +c.toString());
            cards.src = 'hide.jpg';
        }
    }
}
function selectCards(){
    if(this.src.includes('hide.jpg')){
        if(!cardOne){
            cardOne = this;

            let coords = cardOne.id.split('_');
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            cardOne.src = `${board[r][c]}.jpg`;
        }
        else if (!cardsTwo && this != cardOne){
            cardsTwo = this;

            let coords = cardsTwo.id.split('_');            
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            cardsTwo.src = `${board[r][c]}.jpg`;

            setTimeout(update, 1000);
        }
    }
}
function update(){
    if(cardOne.src != cardsTwo.src){
        cardOne.src = "hide.jpg";
        cardsTwo.src = "hide.jpg";   

        error++;
        document.querySelector('#error').textContent = `Error ${error}`; 
        cardOne = null;
        cardsTwo = null;
    }
    else{
        score++;
        document.querySelector('#score').textContent = `Score ${score}`;
        cardOne = null;
        cardsTwo = null;
    }
}


function restart() {
    cardOne = null;
    cardsTwo = null;
    board = [];          // reset board
    cardSet = [];        // reset cardSet
    score = 0;
    error = 0;
    
    // reset giao diện
    document.querySelector('#score').textContent = `Score ${score}`;
    document.querySelector('#error').textContent = `Error ${error}`; 
    document.querySelector('.list-card').innerHTML = "";

    // shuffle lại và chơi lại
    shuffleCards();
    startGame();
}
