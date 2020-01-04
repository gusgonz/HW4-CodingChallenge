







$(".start-quiz-btn").on("click", 
function startQuiz() {
    var codingQuiz = $(".coding-quiz");

    // Hiding whats there with jQuery
    $(".quiz-text").hide();
    $(".main-btns").hide();

    // Creating and starting timer
    var timeLeft = 60;
    codingQuiz.append($("<div class =timer><p class=timer-text></p></div>"));
    $(".timer-text").text("Time Remaining: " + timeLeft);
    







});