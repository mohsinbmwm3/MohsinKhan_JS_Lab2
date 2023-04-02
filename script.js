const question = [
    {
        question: "First letter of english alphabet?",
        answers: [
            {text: "B", isCorrect: false},
            {text: "F", isCorrect: false},
            {text: "A", isCorrect: true},
            {text: "Z", isCorrect: false}
        ]
    },
    {
        question: "Pench _________ Reserve",
        answers: [
            {text: "Deer", isCorrect: false},
            {text: "Elephant", isCorrect: false},
            {text: "Lion", isCorrect: false},
            {text: "Tiger", isCorrect: true}
        ]
    },
    {
        question: "Macbook is a product of?",
        answers: [
            {text: "Google", isCorrect: false},
            {text: "Apple", isCorrect: true},
            {text: "Dell", isCorrect: false},
            {text: "Lenovo", isCorrect: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 1;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const btnAnswer = document.createElement("button");
        btnAnswer.innerHTML = answer.text;
        btnAnswer.classList.add("btn");
        answerButtons.appendChild(btnAnswer);

        if(answer.isCorrect) {
            btnAnswer.dataset.isCorrect = answer.isCorrect;
        }
        btnAnswer.addEventListener("click", onSelectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function onSelectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = e.dataset.isCorrect === "true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.isCorrect === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

startQuiz();