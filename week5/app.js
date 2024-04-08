// 1. JS 파일에서 접근해야하는 HTML DOM 요소들 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

// 과제 파트
const displayRst = document.getElementById("display-result");
const myScore = document.getElementById("my-score");
const comScore = document.getElementById("com-score");
const resetBtn = document.getElementById("reset-button");
const darkmodeBtn = document.getElementById("toggleDarkmode");
const body = document.body;

// 초기 점수 설정
let myPoint = 0;
let comPoint = 0;

// 2. 선언한 DOM 요소에 이벤트를 생성한다.
rockBtn.addEventListener("click", displayMychoice);
scissorsBtn.addEventListener("click", displayMychoice);
paperBtn.addEventListener("click", displayMychoice);
resetBtn.addEventListener("click", resetScore);
darkmodeBtn.addEventListener("click", toggleDark);
// 3. 클릭 시 발생하는 함수

function toggleDark(e) {
    if (document.body.dataset.theme === 'light-mode') {
        document.body.dataset.theme = 'dark-mode'
    } else {
        document.body.dataset.theme = 'light-mode'
    }
}

// 점수 초기화
function resetScore(e) {
    myPoint = 0;
    comPoint = 0;
    
    myScore.innerText = String(myPoint);
    comScore.innerText = String(comPoint);
}

function displayMychoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

function getComChoice() {
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

function start(myChoice) {
    let resultArray = getComChoice();

    let comChoice = resultArray[0];
    let result;

    // 경우의 수
    if (myChoice === comChoice) {
        result = "draw";
    } else if (
        (myChoice === "rock" && comChoice === "scissors") ||
        (myChoice === "scissors" && comChoice === "paper") ||
        (myChoice === "paper" && comChoice === "rock")
    ) {
        result = "win";
        myPoint += 1;
    } else {
        result = "lose";
        comPoint += 1;
    }
    
    displayComChoice(resultArray);

    // 결과 표시
    if (result === "draw") {
        displayRst.innerText = "Draw";
    } else if (result === "win") {
        displayRst.innerText = "Win";
    } else {
        displayRst.innerText = "Lose";
    } 

    myScore.innerText = String(myPoint);
    comScore.innerText = String(comPoint);
}