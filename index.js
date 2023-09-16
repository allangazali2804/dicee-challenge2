// nama para player
var player1 = prompt("Enter player 1 name!");
var player2 = prompt("Enter player 2 name!");
document.querySelector(".player1").innerHTML = player1;
document.querySelector(".player2").innerHTML = player2;

// untuk image 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);


// untuk image 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2)

// untuk h1
let winner = "";
if(randomNumber1 > randomNumber2){
    winner += player1 + " is the winner";
} else if(randomNumber1 < randomNumber2) {
    winner += player2 + " is the winner";
} else {
    winner += "Tie Break!";
}
document.querySelector("h1").innerHTML = winner;