const startButton = document.getElementById("btn");
const title = document.querySelector(".title");
const answers = document.querySelectorAll(".answer");
const buttonA = document.querySelector("#a");
const buttonB = document.querySelector("#b");
const buttonC = document.querySelector("#c");
const buttonD = document.querySelector("#d");
const aSpace = document.querySelector("#a_space");
const bSpace = document.querySelector("#b_space");
const cSpace = document.querySelector("#c_space");
const dSpace = document.querySelector("#d_space");
const options = document.querySelector(".options");
const box = document.querySelector(".box");
const submit = document.querySelector("#submit");

const questions = [
  {
    question: "What is the only continent with land in all four hemispheres?",
    a: "Africa",
    b: "North America",
    c: "Europe",
    d: "Australia",
    correct: "a",
  },
  {
    question: "What is the capital of Ireland",
    a: "New York",
    b: "Berlin",
    c: "Tirana",
    d: "Dublin",
    correct: "d",
  },
  {
    question: "How many European capitals does the Danube flow through?",
    a: "3",
    b: "4",
    c: "2",
    d: "1",
    correct: "b",
  },

  {
    question: "What is the capital of Canada?",
    a: "Helsinki",
    b: "Ottawa",
    c: "Bern",
    d: "Bruksel",
    correct: "b",
  },
];

let currentQuiz = 0;
let score = 0;

generateQuiz();

function generateQuiz() {
  eachAnswer();

  const quizData = questions[currentQuiz];
  title.innerHTML = quizData.question;
  aSpace.innerHTML = quizData.a;
  bSpace.innerHTML = quizData.b;
  cSpace.innerHTML = quizData.c;
  dSpace.innerHTML = quizData.d;
}

function eachAnswer() {
  answers.forEach((a) => {
    a.checked == false;
  });
}

function getSelected() {
  let answer;
  answers.forEach((a) => {
    if (a.checked) {
      answer = a.id;
    }
  });
  return answer;
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === questions[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < questions.length) {
      generateQuiz();
    } else {
      box.innerHTML = `
                         <h2>You have answered correct in ${score}/${questions.length} questions </h2> `;
    }
  }
});
