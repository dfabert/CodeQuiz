//Arrays are set up in this order
//0-Question
//1-Option 1
//2-Option 2
//3-Option 3
//4-Option 4
//5-Number of correct answer


//Listen for Button to be clicked
var start = document.getElementById('start');
start.addEventListener('click', function(){
    //Start Timer


    //Question arrays
    var Q1 = ['The first question will go here and the answers will line up below', 'Answer1', 'Answer2', 'Answer3', 'Answer4', 3];
    var Q2 = ['This is the second question and it should be about this long or so', 'Answer1', 'Answer2', 'Answer3', 'Answer4', 1];

    //Make variables for question and options
    document.getElementById('question').innerHTML = Q1[0];
    document.getElementById('a1').innerHTML = Q1[1];
    document.getElementById('a2').innerHTML = Q1[2];
    document.getElementById('a3').innerHTML = Q1[3];
    document.getElementById('a4').innerHTML = Q1[4];




    //variable to calculation correct answers

    //Create Results Page

}, false);




