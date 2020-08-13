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
zeroNum.addEventListener("mouseup", output);

function msDown(e) {
    let val = e.target.id
    document.getElementById(val).style.opacity = 0.8;
}
function msUp(e) {
    let val = e.target.id
    document.getElementById(val).style.opacity = 1.0;
}

let showingNum = "";
let result = 0;
let temp = 0;
let a = false,
 b = false,
 c = false,
 d = false,
 end = false;
 let calc = [];

function output(e) {
    let clickNum = e.target.innerText;
    if (showingNum == "") {
        answer.innerText = "";
    }
    showingNum += clickNum
    answer.innerText = showingNum;
    temp = Number(showingNum);
}

document.querySelector("#plus").addEventListener("mouseup", add);
function add() {
    if (end == false) {
        calc.push(temp);

        if (a == true) {
            result = calc[0]+calc[1];
            answer.innerText = result;
            calc = [result];
        } else if (b == true || c == true || d == true) {
            calc.push(temp);

            if (b == true) {
                result = calc[0] - calc[1];
                calc = [result];
            } else if (c == true) {
                result = calc[0] * calc[1];
                calc = [result];
            } else if (d == true) {
                result = calc[0] / calc[1];
                calc = [result];
            }
            answer.innerText = result;
            a = true;
            b = false;
            c = false; 
            d = false;
        } else {
            a = true;
            b = false;
            c = false;
            d = false;
            end = false;
        }
        showingNum = "";

    } else {
        calc = [result];
        end = false;
        a = true;
    }
}

document.querySelector("#minus").addEventListener("mouseup", substract);
function substract() {
    if (end == false) {
        calc.push(temp);
        if (b == true) {
            result = calc[0] - calc[1];
            answer.innerText = result;
            calc = [result];
        } else if (a == true || c == true || d == true) {
            calc.push(temp);

            if (a == true) {
                result = calc[0] + calc[1];
                calc = [result];
            } else if (c == true) {
                result = calc[0] * calc[1];
                calc = [result];
            } else if (d == true) {
                result = calc[0] / calc[1];
                calc = [result];
            }
            answer.innerText = result;
            a = false;
            b = true;
            c = false; 
            d = false;
        } else {
            a = false;
            b = true;
            c = false;
            d = false;
            end = false;
        }
        showingNum = "";
    } else {
        calc = [result];
        end = false;
        b = true;
    }
}

document.querySelector("#multiple").addEventListener("mouseup", multiple);
function multiple() {
    if (end == false) {
        calc.push(temp);
        if (c == true) {
            result = calc[0] * calc[1];
            answer.innerText = result;
            calc = [result];
        } else if (a == true || b == true || d == true) {
            calc.push(temp);

            if (a == true) {
                result = calc[0] + calc[1];
                calc = [result];
            } else if (b == true) {
                result = calc[0] - calc[1];
                calc = [result];
            } else if (d == true) {
                result = calc[0] / calc[1];
                calc = [result];
            }
            answer.innerText = result;
            a = false;
            b = false;
            c = true; 
            d = false;
        } else {
            a = false;
            b = false;
            c = true;
            d = false;
            end = false;
        }
        showingNum = "";
    } else {
        calc = [result];
        end = false;
        c = true;
    }
}

document.querySelector("#division").addEventListener("mouseup", divide);
function divide() {
    if (end == false) {
        calc.push(temp);
        if (d == true) {
            result = calc[0] / calc[1];
            answer.innerText = result;
            calc = [result];
        } else if (a == true || b == true || c == true) {
            calc.push(temp);

            if (a == true) {
                result = calc[0] + calc[1];
                calc = [result];
            } else if (b == true) {
                result = calc[0] - calc[1];
                calc = [result];
            } else if (c == true) {
                result = calc[0] * calc[1];
                calc = [result];
            }
            answer.innerText = result;
            a = false;
            b = false;
            c = false; 
            d = true;
        } else {
            a = false;
            b = false;
            c = false;
            d = true;
            end = false;
        }
        showingNum = "";
    } else {
        calc = [result];
        end = false;
        d = true;
    }
}

document.querySelector("#equal").addEventListener("mouseup", equal);
function equal() {
    if (a == true) {
        calc.push(temp);
        result = calc[0] + calc[1];
        calc = [result];
    } else if (b == true) {
        calc.push(temp);
        result = calc[0] - calc[1];
        calc = [result];
    } else if (c == true) {
        calc.push(temp);
        result = calc[0] * calc[1];
        calc = [result];
    } else if (d == true) {
        calc.push(temp);
        result = calc[0] / calc[1];
        calc = [result];
    }
    answer.innerText = result;
    showingNum = "";
    a = false;
    b = false;
    c = false;
    d = false;
    end = true;
}

document.querySelector("#clear").addEventListener("mouseup", clear);
function clear() {
    answer.innerText = 0;
    showingNum = "";
    result = 0;
    calc = [];
    a = false;
    b = false;
    c = false;
    d = false;
    end = false;
}