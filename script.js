var start = document.getElementById('start');
//var timer = 

//Question Object
var questions = [
    { q:"The first Question will go here and it should be about this long", a: "Option #1", b: "Option #2", c: "Option #3", d: "Option #4", answer: 'a'},
    { q:"The second Question will go here and it should be about this long", a: "Option #11", b: "Option #22", c: "Option #33", d: "Option #44", answer: 'b'},
    { q:"The third Question will go here and it should be about this long", a: "Option #21", b: "Option #23", c: "Option #37", d: "Option #4", answer: 'c'},
    { q:"The fourth Question will go here and it should be about this long", a: "Option #1", b: "Option #2", c: "Option #3", d: "Option #4", answer: 'd'},
    { q:"The fifth Question will go here and it should be about this long", a: "Option #1", b: "Option #2", c: "Option #3", d: "Option #4", answer: 'e'},
        ];


//Listen for Button to be clicked
    start.addEventListener('click', function() {
        //Start Timer

        //Start Asking questions questions
        i = 0;
        console.log("It has begun");
        var splash = document.getElementById('splash');
        splash.style.display = "none";
        var quiz = document.getElementById('quiz');
        quiz.style.display = "block";
        var results = document.getElementById('results');

        questionDisplay(i,questions);
    });
//Display of Questions//
function questionDisplay(){
    console.log('questionDisplay');
    var question = document.getElementById('question').innerHTML=questions[i].q;
    var option1 = document.getElementById('a1').innerHTML=questions[i].a;
    var option2 = document.getElementById('a2').innerHTML=questions[i].b;
    var option3 = document.getElementById('a3').innerHTML=questions[i].c;
    var option4 = document.getElementById('a4').innerHTML=questions[i].d;
}

var correctAnswers = 0;
var totalQuestions = 0;

//User Input and Scoring//
function userAnswer(userAnswer){
    console.log(userAnswer)
    console.log(questions[i].answer);
    
    //check user answer
    if(userAnswer == questions[i].answer){
        console.log('they got it right');
        correctAnswers++;
        totalQuestions++;
        console.log(correctAnswers, totalQuestions);
    }else{
        console.log('they got it wrong');
        totalQuestions++;
        console.log(correctAnswers, totalQuestions);
    }

    i++ 
    //if we keep going or not
    if(i < questions.length){               
        questionDisplay(i,questions);
    }else{
        //We are done
        console.log('we are done!');
        quiz.style.display = "none";
        results.style.display = 'block';

        

    }
}
      



