
var startbtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
var timeLeft= 75;
var quiz = document.getElementById("question");
var indexTracker = 0
var buttonContainer = document.getElementById("buttons");
var quiz = document.getElementById("quiz");
var container = document.getElementById("container");
var container2= document.getElementById("container-2");



var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings",
        "booleans",
        "alerts",
        "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes",
        "curly brackets",
        "parentheses",
        "square brackets"],
      answer: "parentheses"
    },
    {
      title: "What does HTML stands for?",
      choices: ["Hypertext Machine Language",
        "Hypertext and links markup language",
        "Hypertext Markup Language",
        "Hightext Machine Language"],
      answer: "Hypertext Markup Language"
    },
    {
      title: "Which of the following type of variable is visible only within a function where it is defined?",
      choices: ["Global variable",
        "Local variable",
        "Both of the above",
        "Noth of the above"],
      answer: "Local variable"
    },
    {
      title: "Which of the following HTML element is used for creating an unordered list?",
      choices: ["<ui>",
        "<i>",
        "<em>",
        "<ul>"],
      answer: "<ul>"
    }
  ];
   
function displayQuestions() {
document.getElementById("question").innerText = questions[indexTracker].title;
document.getElementById("choice1").innerText =questions[indexTracker].choices[0]
document.getElementById("choice2").innerText=questions[indexTracker].choices[1]
document.getElementById("choice3").innerText=questions[indexTracker].choices[2]
document.getElementById("choice4").innerText=questions[indexTracker].choices[3]
}
   

//start button 
startbtn.addEventListener("click",function () {
    startTimer();
    container.style.display ="none";
    container2.style.display="block";
    displayQuestions();    
});

function startTimer() {
  timer.innerText = "Time: "+ timeLeft;

    timerInterval = setInterval(function() { 
        if(timeLeft < 1){
            clearTimeout(timerInterval);
            // timer.textContent = "Time Out!!! try again.";
            // element.innerHTML= '<h3> Time Out!! <h3>';
        }  
        else   
        {timeLeft--;
        timer.innerText = "Time: "+ timeLeft;}
        },1000);
       
}

function stopTimer(){
  clearTimeout(timerInterval);
  timer.innerText = "Time: "+ timeLeft;
}

buttonContainer.addEventListener("click",function(event){
  console.log(event.target);
 indexTracker++;
 console.log("indextracker: " + indexTracker);
 displayQuestions();
 return;


});

function checkAnswer(){
  if(indexTracker===5){
    scoreRender();
    return;
  }

}

function scoreRender(){
  stopTimer();
  quiz.style.display = "none";
 
}