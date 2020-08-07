// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const today = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const h3 = document.querySelector("h3");

  let calc = xmasDay.getTime() - today.getTime();
  let days = Math.floor(calc / 1000 / 60 / 60 / 24);
  let hours = Math.floor((calc / 1000 / 60 / 60) % 24);
  let mins = Math.floor((calc / 1000 / 60) % 60);
  let seconds = Math.floor((calc / 1000) % 60);
  let Dday = days + "d " + hours + "h " + mins + "m " + seconds + "s";
  h3.innerHTML = Dday;
}

getTime();
setInterval(getTime, 1000);

function init() {}
init();
