var start = document.getElementById('start');
//var timer = 

//Question Object
var questions = [
    { q:"What is the browser's way of indicating something has happened?", a: "Event", b: "Element", c: "Delegation", d: "Alert", answer: 'a'},
    { q:"Which command would you use to access or update the contexts of a text node?", a: "textContent", b: "appendChild", c: "nodeValue", d: "innerHTML", answer: 'c'},
    { q:"Which is not a type of node?", a: "Event", b: "Element", c: "Attribute", d: "text", answer: 'a'},
    { q:"In the code 'el.addEventListener('blur', function())', which part is the event?", a: "el", b: "add", c: "blur", d: "function", answer: 'c'},
    { q:"Which of these is not a type of data for javascript", a: "numeric", b: "on/off", c: "boolean", d: "array", answer: 'b'},
        ];


//Listen for Button to be clicked
    start.addEventListener('click', function() {
        //Start Timer
        var timerDisplay = document.getElementById('timer');
        timer = 2;

        function countdown () { 
            var interval = setInterval(function(){
                timer--;

                //timerDisplay
                var minutes = (Math.floor(timer/60));
                mm = minutes.toString();
                var seconds = (timer%60);
                if(seconds < 10){
                    ss = seconds.toString();
                    ss = "0" + seconds;
                }
                else{ss = seconds.toString();}
                var minsec = mm + ':' + ss;
                timerDisplay.innerHTML = minsec;

                if(timer <= 0){
                quizOver(questions, 2000);
                clearInterval(interval)
                }

                console.log(timer);

            },1000);
        }     

        function stopCountdown(){
            clearInterval(countdown);
        }
        countdown();

        //Start Asking questions
        i = 0;
        console.log("It has begun");
        questionDisplay(i,questions);

        //Change styles to display correct parts of HTML
        var splash = document.getElementById('splash');
        splash.style.display = "none";
        var quiz = document.getElementById('quiz');
        quiz.style.display = "block";
        var results = document.getElementById('results');
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

//Setting starting score to zero
var correctAnswers = 0;
var totalQuestions = 0;
var score = document.getElementById('score');
var outOf = document.getElementById('outOf');

//User Input and Scoring//
function userAnswer(userAnswer){
    console.log(userAnswer)
    console.log(questions[i].answer);

    var correctDisplay = document.getElementById('correct');
    var wrongDisplay = document.getElementById('wrong');
    
    //check user answer
    if(userAnswer == questions[i].answer){
        correctAnswers++;
        totalQuestions++;
        correctDisplay.style.display = 'block';
        wrongDisplay.style.display = "none";
        

    }else{
        totalQuestions++;
        timer  -= 30;
        correctDisplay.style.display = 'none';
        wrongDisplay.style.display = 'block';
    }

    i++ 
    score.innerHTML=correctAnswers;
    outOf.innerHTML=totalQuestions;
    quizOver(questions, i);
}

function quizOver(questions, i){
    //if we keep going or not
    if(i < questions.length){               
        questionDisplay(i,questions);
    }else{
        quiz.style.display = "none";
        results.style.display = 'block';

        var displayedResults = document.getElementsByTagName('em');
        displayedResults[0].innerHTML = correctAnswers;

        var submit = document.getElementById('submit');

        submit.addEventListener('click', function(event) {
            var initials = document.querySelector("#initials").value;
            

            ///if (initials === '') {
            ///    alert('Initials Cannot Be Blank');
            ///    quizOver(questions, 2000);
            ///}else{submit.style.display = 'none';}


            ///High Score Saving/Sorting
            var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
            var finalScore = {
                name:  initials,
                score:  correctAnswers,
            }
            highScores.push(finalScore);
            highScores.sort((a,b) =>  b.score - a.score);
            highScores.splice(10);

            //Display of High Scores
            for(var i = 0; i < highScores.length; i++){
                var newScoreLine = document.createElement('li');
                var scoreText = document.createTextNode(highScores[i].name + ':  ' + highScores[i].score);
                newScoreLine.appendChild(scoreText);
                var position = document.getElementById('highScores');
                position.appendChild(newScoreLine);
            }

            //Saving Back to Local Storage
            localStorage.setItem('highScores', JSON.stringify(highScores));

            //Option To Clear High Scores
            var clear = document.getElementById('clear');
            clear.style.display = 'block';

            var clearClear = document.getElementById('allTimeScores');

            clear.addEventListener('click', function() {
                localStorage.clear();
                clearClear.style.display = 'none';
            })

        })
    }
}
      



