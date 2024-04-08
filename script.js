const questions = [
    "What is your favorite color?",
    "What is your favorite animal?",
    "What is your favorite season?"
];

const answers = [];

function createQuiz() {
    const quiz = document.getElementById('quiz');
    questions.forEach((question, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        questionContainer.innerHTML = `
            <div class="question">${question}</div>
            <div class="answer-buttons btn-container">
                <button class="btn" onclick="selectAnswer(${index}, 0)">Option 1</button>
                <button class="btn" onclick="selectAnswer(${index}, 1)">Option 2</button>
                <button class="btn" onclick="selectAnswer(${index}, 2)">Option 3</button>
            </div>
        `;
        quiz.appendChild(questionContainer);
    });
}

function selectAnswer(questionIndex, answerIndex) {
    const selectedButtons = document.querySelectorAll('.question-container')[questionIndex].querySelectorAll('.btn');
    selectedButtons.forEach(button => {
        button.classList.remove('selected');
    });
    selectedButtons[answerIndex].classList.add('selected');

    answers[questionIndex] = answerIndex;

    const submitButton = document.getElementById('submit-button');
    submitButton.classList.remove('hidden');
}

function showResult() {
    if (answers.length !== questions.length) {
        alert('Please answer all questions.');
        return;
    }

    const total = answers.reduce((acc, curr) => acc + curr, 0);
    let result = '';

    if (total <= 3) {
        result = 'You are a calm and collected person.';
    } else if (total <= 6) {
        result = 'You are outgoing and adventurous.';
    } else {
        result = 'You are a thoughtful and observant individual.';
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerText = result;
    resultContainer.classList.remove('hidden');
}

createQuiz();
