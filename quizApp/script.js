const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "Leo Tolstoy", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Great White Shark", correct: false },
            { text: "Giraffe", correct: false }
        ]
    }
];

let questionElt = document.getElementById('question');
let answerButtons = document.getElementById('answers');
let nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElt.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
    });
}

const resetState = () => {
    nextButton.style.display = 'none';
    nextButton.innerHTML = "Next";
    while (answerButtons.firstChild)
        answerButtons.removeChild(answerButtons.firstChild);
}

const selectAnswer = (e) => {
    const selectButton = e.target;
    if (selectButton.dataset.correct === "true") {
        selectButton.classList.add("correct");
        score++;
    } else {
        selectButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.dataset.correct === "true" ? button.classList.add("correct") : " ";
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

const showScore = () => {
    resetState();
    questionElt.innerHTML = "Your score is " + score + " out of " + questions.length + "!";
    nextButton.innerHTML = "Play again!";
    nextButton.style.display = "block";
    if (currentQuestionIndex > questions.length)
        startQuiz();
}



startQuiz();