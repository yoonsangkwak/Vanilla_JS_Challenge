// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
let slider = document.querySelector("#slider")

function whoWin() {
    let your = document.getElementById("choice").value;
    let computer = Math.floor(Math.random() * slider.value);
    let battle = document.querySelector(".battle");
    battle.innerText = "You choose: " + your + ", machine choose: " + computer;
    let result = document.querySelector(".result");
    console.log(Number(your), computer)
    if (Number(your) === computer) {
        result.innerText = "You Won!";
    } else {
        result.innerText = "You Lose!";
    }
}

function inputValue(e) {
    e.preventDefault();
    val = e.target.value;
    const genbet = document.querySelector(".between");
    genbet.innerText = "Generate a number between 0 and " + val;
}


function init() {
    document.querySelector(".play").addEventListener("click", whoWin);    
    document.querySelector("#slider").addEventListener("input", inputValue);
}
init();
