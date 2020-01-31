
var startbtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
var quiz = document.getElementById("question");
var buttonContainer = document.getElementById("buttons");
// var quiz = document.getElementById("quiz");
var container = document.getElementById("container");
var container2= document.getElementById("container-2");
var scoreContainer = document.getElementById("scoreContainer");
var Highscore = document.getElementById("Highscore");
var finalscore = document.getElementById("finalScore");
var submitBtn = document.getElementById("submitBtn");
var initialsText = document.getElementById("initialsText");
var clearHighscores = document.getElementById("clearHighscores");
var highscorelist = document.getElementById("highscorelist");
var goback = document.getElementById("goback");
var score = document.getElementById("score");

var timeLeft= 75;
var indexTracker = 0;
var lastindexTracker = 5;
// var Question = questions[indexTracker];
var highscoresArray = JSON.parse(localStorage.getItem("highscoresArray")) || [] ;

console.log(highscoresArray)
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
//  indexTracker++;
 console.log("indextracker: " + indexTracker);
 displayQuestions();
 checkAnswer();
 return;
});

function displayQuestions() {
  document.getElementById("question").innerText = questions[indexTracker].title
  document.getElementById("choice1").innerText =questions[indexTracker].choices[0]
  document.getElementById("choice2").innerText=questions[indexTracker].choices[1]
  document.getElementById("choice3").innerText=questions[indexTracker].choices[2]
  document.getElementById("choice4").innerText=questions[indexTracker].choices[3]
  }

function checkAnswer(userAnswer){
  if(userAnswer == questions[indexTracker].answer){
   indexTracker++;
   if(indexTracker==lastindexTracker){
     scoreRender();
     return;
   }
   displayQuestions();
       
  }else{
    timeLeft=timeLeft-15;
    indexTracker++;
    if(indexTracker==lastindexTracker){
      console.log(timeLeft);
      scoreRender();
      return;
  }
  displayQuestions();
  }
}

function scoreRender(){
  stopTimer();
  container2.style.display = "none";
  scoreContainer.style.display = "block";
  finalscore.innerHTML = "Your final score is : " + timeLeft;
  console.log("scoreRender");
 
}

submitBtn.addEventListener("click",function(event){
  event.preventDefault();
  console.log("I hit Submit");

  var initialsInput = initialsText.value.trim();

  if(initialsInput===""){
    return;
  }

  highscoresArray.push(initialsInput + "  Score: " + timeLeft);

  storeHighscores();
  scoreContainer.style.display = "none";
  Highscore.style.display ="block";
  timer.style.display= "none";
  renderHighscores(highscoresArray)
  

});

function storeHighscores(){
  localStorage.setItem("highscoresArray",JSON.stringify(highscoresArray));
} 

clearHighscores.addEventListener("click",function(event){
  event.preventDefault();
  highscoresArray=[];
  storeHighscores=[];

  for(var i=0; i< highscoresArray.length;i++){
    highscoresArray = highscoresArray.pop();

  }

  localStorage.clear();
  renderHighscores(highscoresArray);
});

function renderHighscores (highScoresArr){
  highscorelist.innerHTML = "";

  for(var i=0; i<highScoresArr.length; i++){
   
    var li = document.createElement("li");

    li.textContent= highScoresArr[i];
    li.setAttribute("data-index",i);

    highscorelist.append(li);

  }
}
 
goback.addEventListener("click", function(event){
  event.preventDefault();
  window.location.reload();
  
});

score.addEventListener("click",function(){
  storeHighscores();
  scoreContainer.style.display = "none";
  Highscore.style.display ="block";
  timer.style.display= "none";
  container.style.display = "none";
  renderHighscores(highscoresArray)
  
});





 



