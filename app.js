function checkAnswer(question, answerChoice){
	    if (question.correctAnswerByIndex(answerChoice)){
			alert("You are Correct");
			console.log("You get one point");
			score++;
			console.log(score);
		} else {
			alert("You are incorrect");
			console.log("You are incorrect");
		};
}

function populateQuestion(question){
	
	var inputName = "question" + questionList.indexOf(question).toString();
	$("#question").empty();
	$("#answer_holder").empty();
	$("#question").append('<h2>' + question.text + '</h2>');
	
	for (var i=0; i< question.answers.length; i++){
		$("#answer_holder").append('<li> <input type="radio" name="' + inputName + '" value="' + i + '"> ' + question.answers[i] + '</li>');
		curQuestion = inputName;
		
		
	};

}

function quizEnd() {
	
		if (score == 0) {
			$('#question').html('<h2>' + "Are you sure you are a knitter?" + '</h2>');
		} else if (score <= 3 ){
			$('#question').html('<h2>' + "You have a small amount of knitting knowledge, knit on to gain more!" + '</h2>')
		} else if (score <=6 && score >3){
			$('#question').html('<h2>' + "Knit on Yarn lover!" + '</h2>');
		} else {
			$('#question').html('<h2>' + "You are a true knitting nerd! Rest easy in the knowledge. :-)" + '</h2>');
		}
	$("#retry_button").show();
	$("#answer_holder").empty();

}

function reset(){
	score =  0;
	questionIndex = 0;
	populateQuestion(questionList[questionIndex]);
}

var score = 0;
var questionIndex = 0;
var curQuestion;




$(document).ready(function(){ 
	populateQuestion(questionList[questionIndex]);

	$("#submit").click(function () {
	    event.preventDefault();
	    var answerChoice = $("input[name=" + curQuestion + "]:checked").val();
		checkAnswer(questionList[questionIndex], answerChoice);
		questionIndex++;
		if (questionIndex < 8) {
			populateQuestion(questionList[questionIndex]);
		}
		else {
			quizEnd();
		}
		

    });

	$("#retry_button").click(function(){
		event.preventDefault();
		reset();
		$("#retry_button").hide();
	});

});



var Question = { 
	text:'',
	answers: [],
	correct: '',
	cIndex: 0,
	correctAnswer: function(){
		return this.correct;
	},
	correctAnswerByIndex: function(index){
		return this.cIndex == index;
	},
	IsAnswerCorrect: function(answer){
		return answer === this.correctAnswer;
	}
}

var questionList = [];


var question0 = Object.create(Question);
question0.text = 'Which one of these is not a member of the knitterati?';
question0.answers = ["Fiona Ellis", "Joseph Richardson", "Cat Bordi", "Stephen West"];
question0.correct = question0.answers[1];
question0.cIndex = 1;
/*question1.answers[question1.cIndex];
question1.correctAnswer;
question1.correctAnswerByIndex;*/


var question1 = Object.create(Question);
question1.text = 'What can knitting needles be made out of?:';
question1.answers = ["Bone", "Wood", "Metal", "All of the above"];
question1.correct = question1.answers[3];
question1.cIndex = 3;

var question2 = Object.create(Question);
question2.text = 'What is the name for the technique, often used in the creation of stranded cardigans, where the garment is knitted in the round and then cut down the front to create the two sides of a cardigan?:';
question2.answers = ["Snipping", "Steeking", "Cutting", "Splitching" ];
question2.correct = question2.answers[1];
question2.cIndex = 1;

var question3 = Object.create(Question);
question3.text = 'What does K2Tog mean?:';
question3.answers = ["Keep together", "Knit to the outer group", "Knit two together", "Knit to the gathering"];
question3.correct = question3.answers[2];
question3.cIndex = 2;

var question4 = Object.create(Question);
question4.text = 'Which is not a technique for knitting a small diameter circle?:';
question4.answers = ["Magic loop", "Double pointed needles", "Using 2 long circular needles", "On 2 straight needles"];
question4.correct = question4.answers[3];
question4.cIndex = 3;

var question5 = Object.create(Question);
question5.text = 'Who is also Known as the Yarn Harlot?:';
question5.answers = ["Frank Habit", "Amy Herzog", "Alexis Winslow", "Stephanie Pearl-McPhee"];
question5.correct = question5.answers[3];
question5.cIndex = 3;

var question6 = Object.create(Question);
question6.text = 'Where is the Knitting belt still used?:';
question6.answers = ["The Shetland Islands", "Germany", "The Faroe Islands", "Norway"];
question6.correct = question6.answers[0];
question6.cIndex = 0;

var question7 = Object.create(Question);
question7.text = 'What is a method you might use to close up the toe on a cuff down sock?:';
question7.answers = ["Stranding", "Kitcheners stitch", "Darning", "Hatching stitch"];
question7.correct = question7.answers[1];
question7.cIndex = 1;


questionList.push(question0, question1, question2, question3, question4, question5, question6, question7);

