// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const numbers = document.querySelectorAll(".num");
const symbols = document.querySelectorAll(".symbol");
const zeroNum = document.querySelector(".zero-num");
const answer = document.querySelector(".answer");
const reset = document.querySelector(".reset");

pocket = 0;

numbers.forEach(function(target) {
    target.addEventListener("mousedown", msDown);
    target.addEventListener("mouseup", msUp);
    target.addEventListener("mouseup", output)
});
symbols.forEach(function(target) {
    target.addEventListener("mousedown", msDown);
    target.addEventListener("mouseup", msUp);
});
reset.addEventListener("mousedown", msDown);
reset.addEventListener("mouseup", msUp);
zeroNum.addEventListener("mousedown", msDown);
zeroNum.addEventListener("mouseup", msUp);

function msDown(e) {
    val = e.target.id
    document.getElementById(val).style.opacity = 0.8;
}
function msUp(e) {
    val = e.target.id
    document.getElementById(val).style.opacity = 1.0;
}

function output(e) {
    temp = e.target.innerText;
    answer.innerText += temp;
}

document.querySelector("#plus").addEventListener("mouseup", add);
function add() {
    pocket += answer.innerText;
    answer.innerText = 0;
}

document.querySelector("#minus").addEventListener("mouseup", substract);
function substract() {
    pocket -= answer.innerText;
    answer.innerText = 0;
}

document.querySelector("#multiple").addEventListener("mouseup", multiple);
function multiple() {
    pocket *= answer.innerText;
    answer.innerText = 0;
}

document.querySelector("#division").addEventListener("mouseup", divide);
function divide() {
    pocket /= answer.innerText;
    answer.innerText = 0;
}

document.querySelector("#equal").addEventListener("mouseup", equal);
function equal() {
    answer.innerText = pocket;
}

document.querySelector("#clear").addEventListener("mouseup", clear);
function clear() {
    answer.innerText = 0;
    pocket = 0;
}