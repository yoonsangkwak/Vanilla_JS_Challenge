// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function colorChange() {
  if (window.innerWidth < "600") {
    document.querySelector("h2").style.color = "white";
    document.body.style.backgroundColor = "#3498db";
  } else if (window.innerWidth >= "600" && window.innerWidth < "1000") {
    document.querySelector("h2").style.color = "white";
    document.body.style.backgroundColor = "#9b59b6";
  } else {
    document.querySelector("h2").style.color = "white";
    document.body.style.backgroundColor = "#f39c12";
  }
}

colorChange();
window.addEventListener("resize", colorChange);
