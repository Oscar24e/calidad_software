const quizData = [
    {
        question: 'Una red local de tales características puede incluir a dos ordenadores en una vivienda privada o a varios miles de dispositivos en una empresa',
        a: 'LAN',
        b: 'MAN',
        c: 'WAN',
        d: 'NO SE',
        correct: 'a'
    },{
        question: '"Red global como Internet recibe el nombre de Global Area Network"',
        a: 'WAN',
        b: 'GAN',
        c: 'MAN',
        d: 'MAM',
        correct: 'b'
    },{
        question: 'Redes de área amplia se extienden por zonas geográficas como países o continentes',
        a: 'LA OPCION 2',
        b: 'LAN',
        c: 'WAN',
        d: 'NO SE',
        correct: 'c'
    },{
        question: 'Es una red de telecomunicaciones de banda ancha que comunica varias redes LAN',
        a: 'WAN',
        b: 'GAN',
        c: 'LAN',
        d: 'MAN',
        correct: 'd'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer, score);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Has terminado el cuestionario. Tienes  ${score}/${quizData.length} preguntas correctas\n</h2>
            <button onclick= "location.reload()">Volver a realizar el formulario</button>`;
        }
    }
})