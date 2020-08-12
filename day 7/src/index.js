// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
let slider = document.querySelector("#slider")

function whoWin() {
    let your = document.getElementById("choice").value;
    let computer = Math.round(Math.random() * slider.value);
    let battle = document.querySelector(".battle");
    let result = document.querySelector(".result");
    if (Number(your) === computer) {
        battle.innerText = "You choose: " + your + ", machine choose: " + computer;
        result.innerText = "You Won!";
    } else if (Number(your) < 0 || Number(your) > slider.value) {
        battle.innerText = "Are you kidding me?"
        result.innerText = "Out of range!";
    } else if (your == "") {
        battle.innerText = "Are you kidding me?"
        result.innerText = "Come on!";
    } else {
        battle.innerText = "You choose: " + your + ", machine choose: " + computer;
        result.innerText = "You Lose!";
    }
}

function inputValue(e) {
    e.preventDefault();
    let val = e.target.value;
    const genbet = document.querySelector(".between");
    genbet.innerText = "Generate a number between 0 and " + val;
}


function init() {
    document.querySelector(".play").addEventListener("click", whoWin);    
    document.querySelector("#slider").addEventListener("input", inputValue);
}
init();
