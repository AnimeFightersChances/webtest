const questions = [
    "I enjoy social gatherings and meeting new people.",
    "I prefer to carefully plan out my activities rather than being spontaneous.",
    "I am often the life of the party and enjoy being the center of attention."
];

let currentQuestion = 0;
const answers = [];

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div id="question">${questions[currentQuestion]}</div>
        <div id="answer-buttons" class="btn-container">
            <button class="btn" onclick="selectAnswer('Disagree Strongly')">Disagree Strongly</button>
            <button class="btn" onclick="selectAnswer('Disagree Slightly')">Disagree Slightly</button>
            <button class="btn" onclick="selectAnswer('Agree Slightly')">Agree Slightly</button>
            <button class="btn" onclick="selectAnswer('Agree Strongly')">Agree Strongly</button>
        </div>
    `;
}

function selectAnswer(answer) {
    answers[currentQuestion] = answer;
    document.getElementById('next-button').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        document.getElementById('next-button').classList.add('hidden');
    } else {
        showResult();
        document.getElementById('next-button').classList.add('hidden');
    }
}

function showResult() {
    // Process and display results here
    const resultContainer = document.getElementById('result');
    resultContainer.innerText = "Quiz completed. Thank you!";
    resultContainer.classList.remove('hidden');
}

showQuestion();
