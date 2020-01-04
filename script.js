







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

    setInterval(function() {
        counter--;
         if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
         }
         if (counter === 0) {
            alert('sorry, out of time');
            clearInterval(counter);
          }
        }, 1000);







});