let answer;
let current;
let prev;
let prev2;
let winCounter;

const questions = [
    {
        q: 'Are curly fries better than regular fries?',
        a: true,
    },
    {
        q: 'Is a Liger better than a Tigon?',
        a: true,
    },
    {
        q: 'Are we in the wrong line of work?',
        a: false,
    },
    {
        q: 'Just hit false.',
        a: false,
    },
    {
        q: 'Does the fact that there are legal adults born after 9/11 make you uncomfortable?',
        a: true,
    },
    {
        q: 'Is Pho better than ramen?',
        a: false,
    },
    {
        q: 'Is carnitas the best meat for tacos?',
        a: true,
    },
    {
        q: 'Did I spend longer trying to come up with these questions than programming the app?',
        a: true,
    },
    {
        q: 'Is the T/Th cohort superior to the M/W cohort?',
        a: true,
    },
    {
        q: 'What is the airspeed velocity of an unlaiden swallow?',
        a: false,
    },
];
const currentQuestion = document.getElementById('question');
const wins = document.getElementById('win-counter');
const prevQ = document.getElementById('prev-q');
const prevA = document.getElementById('prev-a');
const userPrev = document.getElementById('user-ans');

document.onkeyup = function(e) {
    const ans = e.key;
    if (ans === 't') {
        answer = true;
    } else if (ans === 'f') {
        answer = false;
    }

    if (answer === current.a) {
        winCounter++;
        wins.innerHTML = winCounter;
    }

    reset();
};

function init() {
    winCounter = 0;
    current = questions[r(questions.length)];

    currentQuestion.innerHTML = current.q;
    wins.innerHTML = winCounter;
}

function reset() {
    prev2 = prev;
    prev = current;
    while (
        questions.indexOf(current) === questions.indexOf(prev) ||
        questions.indexOf(current) === questions.indexOf(prev2)
    ) {
        current = questions[r(questions.length)];
    }

    currentQuestion.innerHTML = current.q;
    prevQ.innerHTML = prev.q;
    prevA.innerHTML = prev.a;
    userPrev.innerHTML = answer;
}

function r(num) {
    return Math.floor(Math.random() * num);
}

init();
