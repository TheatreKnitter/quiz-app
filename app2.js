$(document).ready(function(){
	
};

var Answer = { 
	text: '',
	isCorrect: false 
};

var Question = { 
	text:'',
	answers: []
}

var questionAnswer1 = Object.create(Answer);
questionAnswer1.text = 'Fiona Ellis';

var questionAnswer2 = Object.create(Answer); 
questionAnswer2.text = 'John Richardson';
questionAnswer2.isCorrect = true;

var questionAnswer3 = Object.create(Answer); 
questionAnswer3.text = 'Car Bordi';

var questionAnswer4 = Object.create(Answer);
questionAnswer4.text = 'Stephen West';

var question2Answer1 = Object.create(Answer); 
question2Answer1.text = 'Bone';

var question2Answer2 = Object.create(Answer); 
question2Answer2.text = 'Wood';

var question2Answer3 = Object.create(Answer); 
questionAnswer3.text = 'Metal';

var question2Answer4 = Object.create(Answer); 
question2Answer4.text = 'All of the Above';
question2Answer4.isCorrect = true;

var question3Answer1 = Object.create(Answer); 
question3Answer1.text = 'Snipping';

var question3Answer2 = Object.create(Answer); 
question3Answer2.text = 'Steeking';
question3Answer2.isCorrect = true;

var question3Answer3 = Object.create(Answer); 
question3Answer3.text = 'Cutting';

var question3Answer4 = Object.create(Answer); 
question3Answer4.text = 'Splitching';

var question4Answer1 = Object.create(Answer); 
question4Answer1.text = 'Keep Together';

var question4Answer2 = Object.create(Answer); 
question4Answer2.text = 'Knit to Outer Group';

var question4Answer3 = Object.create(Answer); 
question4Answer3.text = 'Knit two together';
question4Answer3.isCorrect = true;

var question4Answer4 = Object.create(Answer); 
question4Answer4.text = 'Knit to Gathering';

var question5Answer1 = Object.create(Answer); 
question5Answer1.text = 'Magic Loop';

var question5Answer2 = Object.create(Answer); 
question5Answer2.text = 'Double pointed needles';

var question5Answer3 = Object.create(Answer); 
question5Answer3.text = 'Using 2 long circular needles';

var question5Answer4 = Object.create(Answer); 
question5Answer4.text = 'On 2 straight needles';
question5Answer4.isCorrect = true;

var question6Answer1 = Object.create(Answer); 
question6Answer1.text = 'Frank Habit';

var question6Answer2 = Object.create(Answer); 
question6Answer2.text = 'Amy Herzog';

var question6Answer3 = Object.create(Answer); 
question6Answer3.text = 'Alexis Winslow';

var question6Answer4 = Object.create(Answer); 
question6Answer4.text = 'Stephanie Pearl-McPhee';
question6Answer4.isCorrect = true;

var question7Answer1 = Object.create(Answer); 
question7Answer1.text = 'The Shetland Islands';
question7Answer1.isCorrect = true;

var question7Answer2 = Object.create(Answer); 
question7Answer2.text = 'Norway';

var question7Answer3 = Object.create(Answer); 
question7Answer3.text = 'Germany';

var question7Answer4 = Object.create(Answer); 
question7Answer4.text = 'The Faroe Islands';

var question1 = Object.create(Question);
question1.text = 'Which one of these is not a member of the knitterati?';
question.answers.push(questionAnswer1);
question.answers.push(questionAnswer2);
question.answers.push(questionAnswer3);
question.answers.push(questionAnswer4);

var question2 = Object.create(Question);
question3.text = 'What can knitting needles be made out of?';
question.answers.push(question2Answer1);
question.answers.push(question2Answer2);
question.answers.push(question2Answer3);
question.answers.push(question2Answer4);

var question3 = Object.create(Question);
question3.text = 'What is the name for the technique, often used int he creation of stranded cardigans, where the garment is knitted in the round and then cut fown the front to create the front opening of a cardigan?';
question.answers.push(question3Answer1);
question.answers.push(question3Answer2);
question.answers.push(question3Answer3);
question.answers.push(question3Answer4);

var question4 = Object.create(Question);
question4.text = 'What does k2Tog mean?';
question.answers.push(question4Answer1);
question.answers.push(question4Answer2);
question.answers.push(question4Answer3);
question.answers.push(question4Answer4);

var question5 = Object.create(Question);
question5.text = 'Which is not a teachnique for knitting in the round?';
question.answers.push(question5Answer1);
question.answers.push(question5Answer2);
question.answers.push(question5Answer3);
question.answers.push(question5Answer4);

var question6 = Object.create(Question);
question6.text = 'Who is known as the Yarn Harlot?';
question.answers.push(question6Answer1);
question.answers.push(question6Answer2);
question.answers.push(question6Answer3);
question.answers.push(question6Answer4);

var question7 = Object.create(Question);
question7.text = 'Where is the knitting belt still used?';
question.answers.push(question7Answer1);
question.answers.push(question7Answer2);
question.answers.push(question7Answer3);
question.answers.push(question7Answer4);

var question8 = Object.create(Question);
question8.text = 'What is a method you might use to close up the toe on a cuff down sock?';
question.answers.push(question8Answer1);
question.answers.push(question8Answer2);
question.answers.push(question8Answer3);
question.answers.push(question8Answer4);