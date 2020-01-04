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
    choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
    answer: "<script>"
    }
  ];


function hideThings() {
    // Hiding whats there with jQuery
    $(".quiz-text").hide();
    $(".main-btns").hide();
}


$(".start-quiz-btn").on("click", 
function startQuiz() {
    
    hideThings();

    var codingQuiz = $(".coding-quiz");
    var timeLeft = 60;
    
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
             // timesUp();
             return;
           }
         }, 1000);

    

    

    







});