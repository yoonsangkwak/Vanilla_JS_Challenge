// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const numbers = document.querySelectorAll(".num");
const symbols = document.querySelectorAll(".symbol");
const zeroNum = document.querySelector(".zero-num");
const answer = document.querySelector(".answer");
const reset = document.querySelector(".reset");

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

showingNum = "";
result = 0;
function output(e) {
    clickNum = e.target.innerText;
    if (showingNum == "") {
        answer.innerText = "";
    }
    showingNum += clickNum
    answer.innerText = showingNum;
}

document.querySelector("#plus").addEventListener("mouseup", add);
function add() {
    result += Number(showingNum);
    showingNum = "";
    a = true;
    b = false;
    c = false;
    d = false;
}

document.querySelector("#minus").addEventListener("mouseup", substract);
function substract() {
    result -= Number(showingNum);
    showingNum = "";
    a = false;
    b = true;
    c = false;
    d = false;
}

document.querySelector("#multiple").addEventListener("mouseup", multiple);
function multiple() {
    result *= Number(showingNum);
    showingNum = "";
    a = false;
    b = false;
    c = true;
    d = false;
}

document.querySelector("#division").addEventListener("mouseup", divide);
function divide() {
    result /= Number(showingNum);
    showingNum = "";
    a = false;
    b = false;
    c = false;
    d = true;
}

document.querySelector("#equal").addEventListener("mouseup", equal);
function equal() {
    if (a == true) {
        result += Number(showingNum);
    } else if (b == true) {
        result -= Number(showingNum);
    } else if (c == true) {
        result *= Number(showingNum);
    } else if (d == true) {
        result /= Number(showingNum);
    }
    answer.innerText = result;
    showingNum = "";
}

document.querySelector("#clear").addEventListener("mouseup", clear);
function clear() {
    answer.innerText = 0;
    pocket = 0;
}