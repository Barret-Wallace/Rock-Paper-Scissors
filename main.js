let player_score = 1;
let computer_score = 1;
const pScore = document.getElementById("player_score");
const cScore = document.getElementById("computer_score");
const buttons = document.querySelectorAll(".options button");
const Playeri = document.querySelector(".you i");
const Computeri = document.querySelector(".comp i");
//let = allows you to create the global variable
//const= this creates a variable whose value will never change
//queryselectorAll= takes all the elements inside the class we specify
//https://www.w3schools.com/js/js_arrow_function.asp
//() => Arrow function it allows us to create a function without using the function keyword . Also these functions return the value automatically so that we need not use the return keyword also
const skins = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const Result = document.getElementById("Result");
const Result2 = document.getElementById("Result2");
const play = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener("click", (e) =>{
            let buttons_clicked = e.target.className;
            Playeri.className = buttons_clicked;

            let randomval = Math.floor(Math.random() * skins.length);
            Computeri.className = skins[randomval];
            //Below is the code for the tie condition
            //=== (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality. If we compare 2 with “2” using ===, then it will return a false value.
            if(Playeri.className === Computeri.className){
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                Result.innerHTML = "It is a Tie!";
                Result.style.color = "orange";
                Result2.innerHTML = Result.innerHTML;
                Result2.style.color = "orange";
            }
            else if(Playeri.className===skins[0] && Computeri.className===skins[2]){
                pScore.innerHTML = player_score;
                player_score++;
                Result.innerHTML = "You Won!";
                Result.style.color = "green";
                Result2.innerHTML = Result.innerHTML;
                Result2.style.color = "green";             
            }
            else if (Playeri.className === randomClasses[0] && Computeri.className === randomClasses[1]) {
                cScore.innerHTML = computer_score;
                computer_score++;
                Result.innerHTML = "You Loosed ! ";
                Result.style.color = 'red';
                Result2.innerHTML = text.innerHTML;
                Result2.style.color = 'red';
            } 
            else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = computer_score;
                computer_score++;
                Result.innerHTML = "You Loosed ! ";
                Result.style.color = 'red';
                Result2.innerHTML = text.innerHTML;
                Result2.style.color = 'red';
            } 
            else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win ! ";
                text.style.color = 'rgb(1, 146, 1)';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            }
             else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed ! ";
                text.style.color = 'red';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            } 
            else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win ! ";
                text.style.color = 'rgb(1, 146, 1)';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            }
        })
    })
}
//For Each is loop that helps us to traverse through a list of Item
//Btn is like a counter variable of for
//e. target = out of various buttons , which button is clicked
