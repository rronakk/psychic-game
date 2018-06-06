function getRandomLetter(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;
var randomLtr = getRandomLetter();

var guessedWord = document.getElementById("guess");

document.addEventListener("keydown", function onPress(event) {
    if (event.keyCode > 64 && event.keyCode < 91){
        if (randomLtr == event.key){
            winCount++;
            guessLeft = 9;
            randomLtr = getRandomLetter();
            guessedWord.textContent = "";
        }
        else{
            if (guessLeft == 0){
                lossCount++;
                guessLeft = 9;
                guessedWord.textContent = "";
            }
            else if (!guessedWord.textContent.includes(event.key)){
                guessedWord.textContent += event.key + ", " ;
                guessLeft--;
            }
        }
        document.getElementById("wins").textContent = winCount;
        document.getElementById("loss").textContent = lossCount;
        document.getElementById("guess-left").textContent = guessLeft;
    }    
});
