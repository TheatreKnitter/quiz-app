function checkAnswer(question, answerChoice){
	    if (question.IsAnswerCorrect(answerChoice)){
			alert("You are Correct")
			console.log("You are Correct")
		} else {
			alert("You are incorrect")
			console.log("You are incorrect")
		};
}

function populateQuestion(question){
	
	var li = $("li");
	var inputName = "question" + questionList.indexOf(question).toString();

	$("#answer_holder").empty();

	for (i=0;question.answers.length-1;i++){
		li.append('<input type="radio" name="' + inputName + " value=" + i + '"> ' + question.answers[i]);
		$("#answer_holder").append(li);
		li.empty();

	}


};

$(document).ready(function(){ 
	populateQuestion(question1);

	/*$("#answer_holder").on("click", "#submit", function () {
	    document.getElementById("user_input").value;
    	var currentQuestion = Question;	
        event.preventDefault();
        currentQuestion++;
        //nextQuestion();
    });*/

});

var Question = { 
	text:'',
	answers: [],
	correct: '',
	cIndex: 0,
	correctAnswer: function(){
		return this.correct;
	},
	correctAnswerByIndex: function(){
		return this.answers[this.cIndex];
	},
	IsAnswerCorrect: function(answer){
		return answer === this.correctAnswer;
	}
}

var questionList = [];

	
/*function isOneChecked() {
  // All inputs
  var chx = document.getElementsByTagName('input');
  for (var i=0; i<chx.length; i++) {
    if (chx[i].type == 'radio' && chx[i].checked) {
      return true;
    } 
  }
  // End of the loop, return false
}*/


var question1 = Object.create(Question);
question1.text = 'Which one of these is not a member of the knitterati?';
question1.answers = ["Fiona Ellis", "Joseph Richardson", "Cat Bordi", "Stephen West"];
question1.correct = question1.answers[1];
question1.cIndex = 1;
/*question1.answers[question1.cIndex];
question1.correctAnswer;
question1.correctAnswerByIndex;*/


var question2 = Object.create(Question);
question2.text = 'What can knitting needles be made out of?:';
question2.answers = ["Bone", "Wood", "Metal", "All of the above"];
question2.correct = question2.answers[3];
question2.cIndex = 3;

var question3 = Object.create(Question);
question3.text = 'What is the name for the technique, often used in the creation of stranded cardigans, where the garment is knitted in the round and then cut down the front to create the two sides of a cardigan?:';
question3.answers = ["Snipping", "Steeking", "Cutting", "Splitching" ];
question3.correct = question3.answers[1];
question3.cIndex = 1;

var question4 = Object.create(Question);
question4.text = 'What does K2Tog mean?:';
question4.answers = ["Keep together", "Knit to the outer group", "Knit two together", "Knit to the gathering"];
question4.correct = question4.answers[2];
question4.cIndex = 2;

var question5 = Object.create(Question);
question5.text = 'Which is not a technique for knitting a small diameter circle?:';
question5.answers = ["Magic loop", "Double pointed needles", "Using 2 long circular needles", "On 2 straight needles"];
question5.correct = question5.answers[3];
question5.cIndex = 3;

var question6 = Object.create(Question);
question6.text = 'Who is also Known as the Yarn Harlot?:';
question6.answers = ["Frank Habit", "Amy Herzog", "Alexis Winslow", "Stephanie Pearl-McPhee"];
question6.correct = question6.answers[3];
question6.cIndex = 3;

var question7 = Object.create(Question);
question7.text = 'Where is the Knitting belt still used?:';
question7.answers = ["The Shetland Islands", "Germany", "The Faroe Islands", "Norway"];
question7.correct = question7.answers[0];
question7.cIndex = 0;

var question8 = Object.create(Question);
question8.text = 'What is a method you might use to close up the toe on a cuff down sock?:';
question8.answers = ["Stranding", "Kitcheners stitch", "Darning", "Hatching stitch"];
question8.correct = question8.answers[1];
question8.cIndex = 1;


questionList.push(question1, question2, question3, question4, question5, question6, question7, question8);

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
