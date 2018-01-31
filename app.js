// set up two-dimensional array with questions and answers
let questions = [
    ['Who discovered America?', 'Columbus'],
    ['What is the chemical symbol for iron?', 'Fe'],
    ['What is the square root of 36?', '6'],
    ['What is the third planet from the sun?', 'Earth']
];

let correctAnswers = [];

let wrongAnswers = [];

// grab the textbox with the user's answer
let answerTextbox = document.getElementById('answer');

// put the focus on the textbox
answerTextbox.focus();

// grab the question div
let question = document.getElementById('question');

// initialize the questions array counter
let questionNum = 0;

// show the first question in the question div
question.innerHTML = questions[questionNum][0];

// initialize the correct answers counter
let numCorrectAnswers = 0;
let numWrongAnswers = 0;

// grab the submit button
let answerBtn = document.getElementById('answerBtn');

// listen for a button click and process the answer
answerBtn.addEventListener('click', function () {
    processAnswer();
});

function processAnswer() {
    // grab answer from input and convert to lowercase
    let answer = answerTextbox.value.toLowerCase();
    console.log(questions[questionNum][1].toLowerCase());
    // check answer
    if (answer === questions[questionNum][1].toLowerCase()) {
        // if answer is correct increment number of correct answers
        numCorrectAnswers++;
        // add answer to correct answers array
        correctAnswers.push(questions[questionNum][0]);
    } else {
        numWrongAnswers++;
        wrongAnswers.push(questions[questionNum][0]);
    }
    // empty textbox conent
    answerTextbox.value = '';
    // put the focus on the textbox
    answerTextbox.focus();
    // increment by one the questions array counter
    questionNum++;
    //if we are not at the end of the array
    if (questionNum != questions.length) {
        // show the next question
        question.innerHTML = questions[questionNum][0];
        // otherwise
    } else if (questionNum === questions.length) {
        // we are done
        question.innerHTML = 'Done!';

        let html = `<p>You have ${numCorrectAnswers} correct answer(s).</p>`;
        html += buildList(correctAnswers);

        html += `<p>and ${numWrongAnswers} incorrect answer(s).</p>`;
        html += buildList(wrongAnswers);

        showResults(html);

        answerTextbox.disabled = true;
        // remove its focus
        answerTextbox.blur();
    }
}

function showResults(html) {
    let outputDiv = document.getElementById('output');
    // show total number of correct answers
    outputDiv.innerHTML = html;
    // disable the textbox
}

function buildList(arr) {
    let html = '';
    html += '<ol>';
    arr.forEach(answer => {
        html += `<li>${answer}</li>`;
    });
    html += '</ol>';

    return html;
}

// enhancement possibly show wrong answers with corret answers

//