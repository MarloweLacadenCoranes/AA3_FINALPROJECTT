const QUESTIONS = [
    {
        QUESTION: "IN SOME POOR COUNTRIES, WHY DO MANY CHILDREN NOT GO TO SCHOOL?",
        OPTIONS: ["THEY DON’T HAVE ACCESS TO SCHOOLS", "SCHOOLS ARE TOO FAR AWAY", "THEY PREFER PLAYING ALL DAY", "THEY THINK EDUCATION IS USELESS"],
        CORRECT: 1
    },
    {
        QUESTION: "WHICH GROUP IS OFTEN DENIED EDUCATION IN SOME COUNTRIES?",
        OPTIONS: ["BOYS", "GIRLS", "ELDERLY PEOPLE", "EVERYONE HAS EQUAL ACCESS"],
        CORRECT: 1
    },
    {
        QUESTION: "WHAT IS A COMMON REASON WHY FAMILIES DON’T SEND CHILDREN TO SCHOOL?",
        OPTIONS: ["THEY HAVE TO WORK TO SUPPORT THEIR FAMILY", "THEY HATE EDUCATION", "THEY DON’T WANT TO WAKE UP EARLY", "THERE ARE TOO MANY BOOKS"],
        CORRECT: 0
    },
    {
        QUESTION: "WHICH REGION HAS THE HIGHEST NUMBER OF CHILDREN UNABLE TO ATTEND SCHOOL?",
        OPTIONS: ["NORTH AMERICA", "EUROPE", "SUB-SAHARAN AFRICA", "ASIA"],
        CORRECT: 2
    },
    {
        QUESTION: "HOW CAN WE HELP CHILDREN IN POOR COUNTRIES GET AN EDUCATION?",
        OPTIONS: ["MAKE THEM PLAY ROBLOXXX", "BUILD MORE SCHOOLS AND SUPPORT TEACHERS", "TELL THEM TO STUDY HARDER", "STOP TEACHING DIFFICULT SUBJECTS"],
        CORRECT: 1
    },
    {
        QUESTION: "WHAT IS ONE MAJOR PROBLEM CHILDREN FACE IN SCHOOL IN POOR COUNTRIES?",
        OPTIONS: ["TOO MANY BOOKS", "NOT ENOUGH TEACHERS", "SCHOOL IS TOO EASY", "TOO MUCH FREE TIME"],
        CORRECT: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answers = [];

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `<h2>${QUESTIONS[currentQuestion].QUESTION}</h2>`;
    QUESTIONS[currentQuestion].OPTIONS.forEach((option, index) => {
        quizDiv.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label>
        `;
    });
}

function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return alert("PLEASE SELECT AN ANSWER.");
    
    answers[currentQuestion] = parseInt(selected.value);
    if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitQuiz() {
    let correctAnswers = 0;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    QUESTIONS.forEach((q, index) => {
        if (answers[index] === q.CORRECT) {
            correctAnswers++;
            resultDiv.innerHTML += `<p class="correct">QUESTION ${index + 1}: CORRECT ✅</p>`;
        } else {
            resultDiv.innerHTML += `<p class="incorrect">QUESTION ${index + 1}: INCORRECT ❌</p>`;
        }
    });

    score = correctAnswers;
    resultDiv.innerHTML += `<h2>YOUR SCORE: ${score} / ${QUESTIONS.length}</h2>`;
}

window.onload = loadQuestion;
