let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;
        LevelUp();
    }
});

function LevelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    // random button choose
    btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

