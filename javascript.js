/* Pseudocode:
1. When user accesses the page, they are presented with the title and instructions along with a green button that says start.
2. When the user clicks the start button, the button turns red and the text is replaced with a 3-minute time that immediately starts counting down, and the first question is shown.
3. When the user clicks and answer, a message populates informing them whether they answered correctly or incorrectly.
4. If they answer correctly, a green Correct! message will be displayed next to the answer they chose.
5. If they answer incorrectly, a red Incorrect! message will be displayed next to the answer they chose.
6. If the user answers incorrectly, 10 seconds will be subtracted from the timer
7. At the same time, a button that says Next with an arrow pointing right appears under the quiz
8. When the user selects this button, the next question will appear and will follow the same process as above
9. When all questions have been answered OR the timer reaches zero, the quiz will be hidden and the score along with a field for entering their intials will appear
10. When the user enters and submits their initials the score page will be replaced with a Top scores page that lists all of the top scores along with the corresponding initials
11. A button that says 'play again' will also appear on this page
12. When the user clicks 'play again' they will be taken back to the original page with the start button and can repeat the process if they so choose
*/



//Defining all variables

var startButton = document.getElementById("start-timer");
var startText = document.getElementById("button-text");
var timeLeft = document.getElementById("time");
var minutesText = document.getElementById("minutes");
var secondsText = document.getElementById("seconds");
var nextQuestion = document.getElementById("next");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var results = document.getElementById("results");
var scoreDisplay = document.getElementById("score");
var playerName = document.getElementById("name");
var saveScore = document.getElementById("save-score");
var pastPlayers = document.getElementById("past-players");
var pastScores = document.getElementById("past-scores");
var answer1 = document.getElementById("option1-button");
var answer2 = document.getElementById("option2-button");
var answer3 = document.getElementById("option3-button");
var answer4 = document.getElementById("option4-button");
var reveal1 = document.getElementById("reveal1");
var reveal2 = document.getElementById("reveal2");
var reveal3 = document.getElementById("reveal3");
var reveal4 = document.getElementById("reveal4");


//Defining countdown function

var secondsLeft = 180;

function countdown() {
    var secondsInterval = setInterval(function(){
        secondsLeft--;
        secondsText.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(secondsInterval);
            timesUp();
        }
    }, 1000);

    function timesUp() {
        quiz.setAttribute("style","display: none");
        var quizResults = document.getElementById("results");
        quizResults.setAttribute("style","display: inline");
        timeLeft.setAttribute("style","display: none");
        startText.textContent = "Time's Up!";
    }
};

//Defining functions to generate new questions, increase score when correct answers are selected, and subtract 5 seconds from the countdown when incorrect answers are selected.

var score = 0;





function setQuestion1() {
    question.textContent = "What is a variable?";
    answer1.textContent = "A type of food";
    answer2.textContent = "A container for data";
    answer3.textContent = "A city in Europe";
    answer4.textContent = "A type of rodent";
    answer1.addEventListener("click", function() {
        reveal1.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer2.addEventListener("click", function() {
        reveal2.textContent = "Correct!";
        score++;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer3.addEventListener("click", function() {
        reveal3.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer4.addEventListener("click", function() {
        reveal4.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });

    console.log(score);
    console.log(secondsLeft);

    nextQuestion.addEventListener("click", function() {
        answer1.removeAttribute("disabled");
        answer2.removeAttribute("disabled");
        answer3.removeAttribute("disabled");
        answer4.removeAttribute("disabled");
        setQuestion2(); 
    });

};

function setQuestion2() {
    nextQuestion.setAttribute("disabled","true");
    nextQuestion.setAttribute("aria-disabled","true");
    reveal1.textContent = "";
    reveal2.textContent = "";
    reveal3.textContent = "";
    reveal4.textContent = "";
    question.textContent = "What is a boolean?";
    answer1.textContent = "A type of French entree";
    answer2.textContent = "A container for data";
    answer3.textContent = "A computer software";
    answer4.textContent = "A type of variable that takes only two values: true or false";
    answer1.addEventListener("click", function() {
        reveal1.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer2.addEventListener("click", function() {
        reveal2.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer3.addEventListener("click", function() {
        reveal3.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer4.addEventListener("click", function() {
        reveal4.textContent = "Correct!";
        score++;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });

    console.log(score);
    console.log(secondsLeft);

    nextQuestion.addEventListener("click", function() {
        answer1.removeAttribute("disabled");
        answer2.removeAttribute("disabled");
        answer3.removeAttribute("disabled");
        answer4.removeAttribute("disabled");
        setQuestion3();
    });
    
};

function setQuestion3() {
    nextQuestion.setAttribute("disabled","true");
    nextQuestion.setAttribute("aria-disabled","true");
    reveal1.textContent = "";
    reveal2.textContent = "";
    reveal3.textContent = "";
    reveal4.textContent = "";
    question.textContent = "What is a variable that can store multiple values?";
    answer1.textContent = "A boolean";
    answer2.textContent = "An array";
    answer3.textContent = "A number";
    answer4.textContent = "A conditional";
    answer1.addEventListener("click", function() {
        reveal1.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer2.addEventListener("click", function() {
        reveal2.textContent = "Correct!";
        score++;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer3.addEventListener("click", function() {
        reveal3.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer4.addEventListener("click", function() {
        reveal4.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });

    console.log(score);
    console.log(secondsLeft);

    nextQuestion.addEventListener("click", function() {
        answer1.removeAttribute("disabled");
        answer2.removeAttribute("disabled");
        answer3.removeAttribute("disabled");
        answer4.removeAttribute("disabled");
        setQuestion4(); 
    });
};

function setQuestion4() {
    nextQuestion.setAttribute("disabled","true");
    nextQuestion.setAttribute("aria-disabled","true");
    reveal1.textContent = "";
    reveal2.textContent = "";
    reveal3.textContent = "";
    reveal4.textContent = "";
    question.textContent = "What does DOM stand for?";
    answer1.textContent = "Document Object Model";
    answer2.textContent = "Director Of Marketing";
    answer3.textContent = "Disaster On the Moon";
    answer4.textContent = "Delicious Oranges and Mangoes";
    answer1.addEventListener("click", function() {
        reveal1.textContent = "Correct!";
        score++;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer2.addEventListener("click", function() {
        reveal2.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer3.addEventListener("click", function() {
        reveal3.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer4.addEventListener("click", function() {
        reveal4.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });

    console.log(score);
    console.log(secondsLeft);

    nextQuestion.addEventListener("click", function() {
        answer1.removeAttribute("disabled");
        answer2.removeAttribute("disabled");
        answer3.removeAttribute("disabled");
        answer4.removeAttribute("disabled");
        setQuestion5(); 
    });
};

function setQuestion5() {
    nextQuestion.setAttribute("disabled","true");
    nextQuestion.setAttribute("aria-disabled","true");
    reveal1.textContent = "";
    reveal2.textContent = "";
    reveal3.textContent = "";
    reveal4.textContent = "";
    question.textContent = "What method is used to change the text of an HTML element?";
    answer1.textContent = ".appendChild";
    answer2.textContent = ".createElement";
    answer3.textContent = ".textContent";
    answer4.textContent = "Math.floor";
    answer1.addEventListener("click", function() {
        reveal1.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer2.addEventListener("click", function() {
        reveal2.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer3.addEventListener("click", function() {
        reveal3.textContent = "Correct!";
        score++;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });
    
    answer4.addEventListener("click", function() {
        reveal4.textContent = "Wrong :(";
        secondsLeft = secondsLeft - 5;
        nextQuestion.removeAttribute("disabled");
        nextQuestion.setAttribute("aria-disabled","false");
        answer1.setAttribute("disabled","true");
        answer2.setAttribute("disabled","true");
        answer3.setAttribute("disabled","true");
        answer4.setAttribute("disabled","true");
    });

    console.log(score);
    console.log(secondsLeft);

    nextQuestion.addEventListener("click", function() {
        finish(); 
    });
};




function finish() {
    quiz.setAttribute("style","display: none");
    results.setAttribute("style","display: inline");
    scoreDisplay.textContent = score;
    localStorage.getItem("pastScores",JSON.stringify(pastScores));
    timeLeft.setAttribute("style","display: none");
    JSON.parse(localStorage.getItem("pastScores"));
}


    













//Events
//This block starts the clock and displays the first question
startButton.addEventListener("click", function() {
    startButton.setAttribute("disabled","true");
    quiz.setAttribute("style","display: inline");
    startButton.setAttribute("class", "btn-lg btn-danger");
    startText.textContent = "DON'T STOP!";
    timeLeft.setAttribute("style", "display: inline");
    nextQuestion.setAttribute("style", "display: inline");
    nextQuestion.setAttribute("disabled","true");
    nextQuestion.setAttribute("aria-disabled","true");
    countdown();
    setQuestion1();
});




//Clicking save will save the score to local storage and append the score to the past scores list

saveScore.addEventListener("click", function(event){
    event.preventDefault();
    var newScore = document.createElement("li");
    pastScores.appendChild(newScore);
    newScore.textContent = playerName.value + " - " + score;
    localStorage.setItem("pastPlayer", playerName.value + " - " + score);

});









