import { questions } from "./model.js";

const questionElement = document.getElementById("question");
const containerForAnswerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Prints current question and answers
function showQuestion() {
    resetStateOfAnswerButtonContainer();

    let currentQuestion = questions[currentQuestionIndex];
    updateQuestionText(currentQuestion);
    updateAnswers(currentQuestion.answers);
}

// Updates the questionElement text
function updateQuestionText(currentQuestion) {
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}

// Updates the answers button
function updateAnswers(answers) {
    answers.forEach(answer => {
        const btnAnswer = document.createElement("button");
        btnAnswer.innerHTML = answer.text;
        btnAnswer.classList.add("btn");
        containerForAnswerButtons.appendChild(btnAnswer);
        btnAnswer.dataset.isCorrect = answer.isCorrect;
        
        // Add event handler
        btnAnswer.addEventListener("click", onSelectAnswer);
    });
}

function resetStateOfAnswerButtonContainer() {
    hideNextButton();
    while(containerForAnswerButtons.firstChild) {
        containerForAnswerButtons.removeChild(containerForAnswerButtons.firstChild);
    }
}

// Answer button action handler
function onSelectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.isCorrect === "true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
        score++; 
    } else {
        selectedButton.classList.add("incorrect");
    }
    disableOtherAnswerButtonsAfterSelectingAnAnswer();
    showNextButton();
}

function disableOtherAnswerButtonsAfterSelectingAnAnswer() {
    Array.from(containerForAnswerButtons.children).forEach(button => {
        if(button.dataset.isCorrect === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

// Show score/update text for score screen.
function showScore() {
    resetStateOfAnswerButtonContainer();
    const percentage = (score/questions.length) * 100
    
    const para1 = `You scored ${score} out of ${questions.length}!`;
    const para2 = `Scoring percentage: ${percentage.toFixed(2)}%`;
    const para3 = `${passingDivision(percentage)}`
    questionElement.innerHTML = `${para1}<br>${para2}<br>${para3}`;
    nextButton.innerHTML = "Play Again";
    showNextButton();
}

// Handle next button click, if there are questions to display then display next que otherwise show score
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {    
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function showNextButton() {
    nextButton.style.display = "block";
}

function hideNextButton() {
    nextButton.style.display = "none";
}

function passingDivision(percentage) {
    return percentage >= 85 ? "Passed! First Division (Excellent)<br><span style='font-size:100px;'>&#128526;&#128526;&#128526;</span>" : 
        (percentage >= 60 && percentage < 85 ? "Passed! First Division (Good)<br><span style='font-size:100px;'>&#128526;&#128526;</span>" : 
        (percentage >= 50 && percentage < 60 ? "Passed! Second Division (Okay)<br><span style='font-size:100px;'>&#128526;&#128533;</span>" : 
        (percentage >=30 && percentage < 50 ? "Passed! Third Division (Work harder)<br><span style='font-size:100px;'>&#128533;</span>" : "Failed<br><span style='font-size:100px;'>&#128561;&#128561;&#128561;</span>")));
}

startQuiz();