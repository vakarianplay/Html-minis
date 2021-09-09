
//questionss and answers
var question1 = {
                  question: "The Bootstrap grid system is based on how many columns?",
                  answers: ['6', '9', '12', '3'],
                  correct: 2
                };

var question2 = {
                  question: "The Bootstrap grid system is based on how many columns?",
                  answers: ['6', '9', '12', '3'],
                  correct: 2
                };

var question3 = {
                  question: 'What does CSS stand for?',
                  answers: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
                  correct: 1
                }

var question4 = {
                  question: "Which property is used to change the background color?",
                  answers: ["bgcolor", "color", "background-color"],
                  correct: 2
                };

var question5 = {
                  question: "Javasctipt is the same as Java?",
                  answers: ["True", "False"],
                  correct: 1
                };

var question6 = {
                  question: "Which event occurs when the user clicks on an HTML element?",
                  answers: ["onchange", "onmouseclick", "onmouseover","onclick"],
                  correct: 3
                };

var question7 = {
                  question: "Is JavaScript case-sensitive?",
                  answers: ["True", "False"],
                  correct: 0
                };

// create an array of objects

var questions = [question1, question2, question3, question4, question5, question6, question7];

// variables

var tags;
var tagsClass = '';
var liTagsid = [];
var correctAns = 0;
var quizPage = 1;


var currentIndex = 0;
var currentQuestion = questions[currentIndex];

var prevousQuestion;
var previousIndex = 0;

var ulTag = document.getElementsByTagName('ul')[0];
var button = document.getElementById('submit');
var questionTitle = document.getElementById('question');

//save class name so it can be reused easily
//if I want to change it, I have to change it one place
var classHighlight = 'selected';


// Display Answers and hightlight selected item
function showQuestions (){

  if (currentIndex != 0) {
    ulTag.innerHTML ='';
    button.innerHTML = 'Submit';
    button.className = 'submit';
    button.id = 'submit';

    //update the number of questions displayed
    document.getElementById('quizNumber').innerHTML = quizPage;
  }

  //Display Results in the final page
  if (currentIndex ==  (questions.length)) {
    ulTag.innerHTML = '';
    document.getElementById('question').innerHTML = '';

    showResults();

    return
  }

  questionTitle.innerHTML = currentQuestion.question;
  console.log(currentQuestion.question);

   for (var i = 0; i < currentQuestion.answers.length; i++) {
    var newAns = document.createElement('li');
    newAns.id = 'ans'+ (i+1);
    newAns.className = "notSelected";
    var textAns = document.createTextNode(currentQuestion.answers[i]);
    newAns.appendChild(textAns);
    var addNewAnsHere = document.getElementById('answer');
    addNewAnsHere.appendChild(newAns);

    console.log(currentQuestion.answers[i]);
  }

    var $liTags = $('.notSelected').click(function(list) {
        list.preventDefault();
         $liTags.removeClass(classHighlight);
       
        $(this).addClass(classHighlight);

         for (var i = 0; i < currentQuestion.answers.length ; i++) {
         
          if($liTags[i].className == "notSelected selected"){
            tags = $liTags[i].id;
            console.log(tags);
            tagsClassName = $liTags[i];
          }
        }
    });

    button.onclick = function (){ checkAnswer()};
}

showQuestions();


// Show Correct Answer

function checkAnswer (){
  var selectedItem = document.getElementById(tags);

  // check that an answer has been selected
  if (selectedItem == undefined) {
    alert("Please selected an answer!")
    return
  } else {
    var userAns = selectedItem.innerHTML;
  }

  // change the background of the answer according to the Results
  if (userAns == currentQuestion.answers[currentQuestion.correct]) {
    console.log("Correct! The answer is: "+ userAns);
    selectedItem.className = 'correct';
    correctAns++;
    console.log(correctAns);
  } else {
    console.log("Wrong! The corrent answer is: "+  currentQuestion.answers[currentQuestion.correct]);
    selectedItem.className = 'wrong';
    ulTag.getElementsByTagName('li')[currentQuestion.correct].className = 'correct';

   console.log(currentQuestion.answers[currentQuestion.correct]);
  }

  // Create a next Question button once the answer has been submitted
  button.innerHTML = 'Next Question';
  button.className = 'next';
  button.id = 'next';

  prevousQuestion = currentQuestion;
  quizPage++;
  currentIndex++;
  currentQuestion = questions[currentIndex];
   button.onclick = function (){showQuestions()};
  return
}

// Final score

function showResults () {
  document.getElementById('pages').innerHTML='';
  questionTitle.innerHTML = '<h1>Your Score</h1>';
  var newInfo = document.getElementById('quiz-results');
  
  newInfo.innerHTML = '';
  newInfo.id = 'circle';
  newInfo.className = 'circle';


  //Create a Div for the fill element
  var newDiv = document.createElement('div');
  newDiv.className = 'fill';
  var addHere = document.getElementById('circle');
  addHere.appendChild(newDiv);

  // add the score to the circle
  var newScore = document.createElement('h3');
  newScore.className = 'score';
  var textScore = document.createTextNode(Math.floor((correctAns/questions.length)*100) + '%');
  newScore.appendChild(textScore);
  addHere.appendChild(newScore);
  
  var score = $(".score").text();

  $(".fill").css("height",score);

  if (correctAns >= 5) {
    var newCongrats = document.createElement('p');
    var textCongrats = document.createTextNode('Congratulations! You did a Good Job!')
    newCongrats.appendChild(textCongrats);
    document.getElementById('display-area').appendChild(newCongrats);

 
  }
  
}