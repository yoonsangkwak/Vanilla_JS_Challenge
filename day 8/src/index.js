// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const reset = document.querySelector(".reset");
const numbers = document.querySelectorAll(".num");
const zeroNum = document.querySelector(".zero-num");
const symbols = document.querySelectorAll(".symbol");


numbers.forEach(function(target) {
    target.addEventListener("mousedown", msDown);
    target.addEventListener("mouseup", msUp);
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
