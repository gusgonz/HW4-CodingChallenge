var questions = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
    },
    {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
    },
    {
    title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["last()", "put()", "push()", "None of the above"],
    answer: "push()"
    },
    {
    title: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["javascript", "scripted", "script", "js"],
    answer: "<script>"
    }
  ];

var  questionCount = 0;
var codingQuiz = $(".coding-quiz");
var timeLeft = 0;
var score = 0;


function hideMain() {
    // Hiding whats there with jQuery
    $(".quiz-text").hide();
    $(".main-btns").hide();
}

function showMain() {
    // Showing main things with jQuery
    $(".quiz-text").show();
    $(".main-btns").show();
}

function enterHighscore() {

    codingQuiz.append("<div class=done><h1>All done!</h1>");
    $(".done").addClass("row");

    codingQuiz.append("<div class=hs-text> <p class=col>Your final score is <span class=score></p></div>");
    $(".hs-text").addClass("row");
    $(".score").addClass("col");
    $(".score").text(score);

    codingQuiz.append("<div class=enter>");
    enterRow = $(".enter");
    enterRow.addClass("row");

    enterRow.append("<p class=enter-text>Enter initials: </p>")
    $(".enter-text").addClass("col-4");
    enterRow.append("<input type=text class=hs-input>");
    $(".hs-input").addClass("col-4 form-control");

    enterRow.append("<button class=submit-btn>Submit</button>");
    $(".submit-btn").addClass("col-4 btn btn-info")


    
}

function endQuiz() {
    score = timeLeft;
    console.log(score);
    
    timeLeft = 0;
    enterHighscore();

}

function clearQuestion() {
    $(".question").remove();
    $(".choices").remove();
}

function showQuestion() {
    for (var i = 0; i < 5; i++) {

        if (i === 0) {
            codingQuiz.append("<div class=question>");
            var q = $(".question");
            q.text(questions[questionCount].title);
        } else {
            codingQuiz.append("<div class= choice-"+i +">");
            $(".choice-"+i).addClass("row choices");
            $(".choice-"+i).text(questions[questionCount].choices[i-1]);

            var input = $("<input class=form-check-input type=radio name=QuestionChoices value="+questions[questionCount].choices[i-1]+">"+questions[questionCount].choices[i-1]);
            $(".choice-"+i).prepend(input);
        }
    }
}

function correct() {
    codingQuiz.append($("<div class =correct><span>Correct!</span></div>"));
    setTimeout(function(){
        $(".correct").remove();
      }, 1000);
}

function incorrect() {
    codingQuiz.append($("<div class =incorrect><span>Incorrect!</span></div>"));
    timeLeft -= 10;
    $(".time-left").text(timeLeft);
    setTimeout(function(){
        $(".incorrect").remove();
      }, 1000);
}

function quiz() {
    
    
    showQuestion();

    $("input").click(function() {

        var userChoice = $(this).attr("value");
        var answer = questions[questionCount].answer;
        console.log(userChoice);
        console.log(answer);

        clearQuestion();
        questionCount++;
        console.log(questionCount);

        if (questionCount === 4) {
            if (userChoice === answer) {
                correct();
            } else {
                incorrect();
            }
            endQuiz();
        } else {
            quiz();
            if (userChoice === answer) {
                correct();
            } else {
                incorrect();
            }
        }
    });
};

function startTimer() {
    timeLeft = 60;
    // Creating and displaying timer with classes everywhere
    codingQuiz.append($("<div class =timer><p class=timer-text></p><span class=time-left></span></div>"));
    $(".timer").addClass("row justify-content-end")
    $(".timer-text").text("Time Remaining:");
    $(".time-left").text(timeLeft);

    // Starts countdown. If the coundown ends, run times up function and end timer function
    setInterval(function() {
        timeLeft--;
         if (timeLeft >= 0) {
            $(".time-left").text(timeLeft);
         } else if (timeLeft === 0) {
            return;
          }
        }, 1000);
};



// Start quiz button on click hides the main page content, starts and shows the timer, and shows the first question
$(".start-quiz-btn").on("click", 
function startQuiz() {
    
    hideMain();
    
    startTimer();
    
    quiz();

});
