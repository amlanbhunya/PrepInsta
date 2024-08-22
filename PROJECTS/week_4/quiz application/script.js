const startButton = document.getElementById('start-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let selectedAnswers = [];
let timeRemaining = 60;
let timerInterval;
let quizCompleted = false;  // Variable to track if the quiz is completed

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Who wrote "Hamlet"?',
        answers: [
            { text: 'Mark Twain', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false }
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Mars', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
prevButton.addEventListener('click', showPreviousQuestion);
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', submitQuiz);

function startGame() {
    if (quizCompleted) {
        alert("You have already done the quiz.");
        return;
    }

    startButton.classList.add('hide');
    prevButton.classList.remove('hide');
    nextButton.classList.remove('hide');
    submitButton.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = new Array(shuffledQuestions.length).fill(null);  // Reset answers
    scoreElement.innerText = `Score: ${score}`;
    timeRemaining = 60;
    timerElement.innerText = `Time Remaining: ${timeRemaining}s`;
    startTimer();
    setQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = `Time Remaining: ${timeRemaining}s`;
        if (timeRemaining <= 0) {
            submitQuiz();
        }
    }, 1000);
}

function setQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => selectAnswer(button, index, answer.correct));
        answerButtonsElement.appendChild(button);
    });

    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === shuffledQuestions.length - 1;
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(button, answerIndex, isCorrect) {
    // Clear previously selected buttons' styles
    const buttons = answerButtonsElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Highlight selected button
    button.classList.add('selected');

    // Store the user's answer
    selectedAnswers[currentQuestionIndex] = isCorrect ? 1 : 0;
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        setQuestion();
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        setQuestion();
    }
}

function submitQuiz() {
    clearInterval(timerInterval);
    questionContainerElement.classList.add('hide');
    prevButton.classList.add('hide');
    nextButton.classList.add('hide');
    submitButton.classList.add('hide');
    
    // Calculate total score
    score = selectedAnswers.reduce((total, current) => total + current, 0);

    // Show the completion message and total score
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <h2>Your exam is over!</h2>
        <p>Your total score is: ${score}</p>
        <button id="retake-btn" class="retake-btn">Retake Quiz</button>
    `;

    // Set quiz as completed
    quizCompleted = true;

    // Handle Retake button
    const retakeButton = document.getElementById('retake-btn');
    retakeButton.addEventListener('click', () => {
        alert("You have already done the quiz.");
    });
}
