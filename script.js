







$(".start-quiz-btn").on("click", 
function startQuiz() {
    var codingQuiz = $(".coding-quiz");

    // Hiding whats there with jQuery
    $(".quiz-text").hide();
    $(".main-btns").hide();

    // Creating and displaying timer with classes everywhere
    var timeLeft = 60;
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