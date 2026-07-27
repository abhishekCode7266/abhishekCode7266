const quizData = {
    history: [{ 
        q: "Who discovered America?", 
        a: ["Columbus", "Gandhi", "Newton", "Tesla"], 
        correct: 0 
    }],
    geography: [{
         q: "Capital of France?",
         a: ["Berlin", "Madrid", "Paris", "Rome"], 
         correct: 2 }],
    mathematics: [{ 
        q: "What is 2+2?", 
        a: ["3", "4", "5", "6"], 
        correct: 1 
    }],
    english: [{ 
        q: "Past tense of eat?", 
        a: ["Eated", "Ate", "Eating", "Eat"], 
        correct: 1 
    }],
    hindi: [{ 
        q: "भारत की राष्ट्रभाषा क्या है?", 
        a: ["अंग्रेजी", "संस्कृत", "हिंदी", "उर्दू"], 
        correct: 2 
    }],
    computer: [{ 
        q: "What is CPU?", 
        a: ["Brain", "Memory", "Storage", "Input"], 
        correct: 0 
    }],
    html: [{ 
        q: "What does HTML stand for?", 
        a: ["HyperText", "HighText", "HyperTool", "None"], 
        correct: 0 
    }],
    css: [{ 
        q: "Property to change color?", 
        a: ["text-color", "color", "font-color", "style"], 
        correct: 1 
    }],
    javascript: [{ 
        q: "How to print to console?", 
        a: ["log()", "print()", "console.log()", "echo"], 
        correct: 2 
    }],
    c_programming: [{ 
        q: "What is the entry point in C?", 
        a: ["start()", "main()", "run()", "int()"], 
        correct: 1 
    }],
    cpp: [{ 
        q: "Which symbol ends a statement in C++?", 
        a: [";", ".", ":", ","], correct: 0 
    }],
    java: [{ 
        q: "Is Java platform independent?", 
        a: ["Yes", "No", "Depends", "None"], 
        correct: 0 
    }],
    python: [{ 
        q: "How to print in Python?", 
        a: ["println()", "printf()", "print()", "show()"], 
        correct: 2 
    }],
    ai: [{ 
        q: "What does AI stand for?", 
        a: ["Artificial Intelligence", "Automatic Info", "Advanced Input", "Actual Info"], 
        correct: 0 
    }]
};

const app = {
    currentSubject: '',
    currentIdx: 0,
    score: 0,
    showSubjects: () => {
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('subject-selection').classList.remove('hidden');
        const grid = document.getElementById('subject-grid');
        grid.innerHTML = '';
        Object.keys(quizData).forEach(sub => {
            grid.innerHTML += `<div class="subject-card" 
            onclick="app.startQuiz('${sub}')">
            ${sub.replace('_', ' ').toUpperCase()}</div>`;
        });
    },
    startQuiz: (sub) => {
        app.currentSubject = sub;
        app.currentIdx = 0;
        document.getElementById('subject-selection').classList.add('hidden');
        document.getElementById('quiz-area').classList.remove('hidden');
        app.loadQuestion(0);
    },
    loadQuestion: (idx) => {
        const data = quizData[app.currentSubject];
        if (idx >= data.length) {
            alert("Quiz Finished! Score: " + app.score);
            app.showSubjects();
            document.getElementById('quiz-area').classList.add('hidden');
            return;
        }
        const q = data[idx];
        document.getElementById('question-text').innerText = q.q;
        const grid = document.getElementById('options-grid');
        grid.innerHTML = '';
        q.a.forEach((opt, i) => {
            grid.innerHTML += `<button onclick="app.checkAnswer(${i}, 
            ${q.correct})">${opt}</button>`;
        });
    },
    nextQuestion: () => {
        app.currentIdx++;
        app.loadQuestion(app.currentIdx);
    },
    checkAnswer: (sel, cor) => {
        if(sel === cor) app.score += 10;
        app.nextQuestion();
    }
};