
{/* <div id="answer-button">
    <button class="btn">B</button>
    <button class="btn">F</button>
    <button class="btn">A</button>
    <button class="btn">Z</button>
</div> */}

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
    currentQuestionIndex = 0;
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
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();