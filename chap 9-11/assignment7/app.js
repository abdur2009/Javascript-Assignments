var secretNumber = 6;
var guess = prompt("Try to guess secret number")
if (guess==6)
{
    alert("Bingo! you guessed the correct number correctly")
}
else if (guess== ++secretNumber){
    alert("You are close ")
}
else if (guess== 5){
    alert("You are close ")
}
else {
    alert("Try again")
}