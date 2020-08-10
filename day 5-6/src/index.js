// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
finishList = document.querySelector(".js-finishList"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const FINISH_LS = "finish";

let toDos = [];
let finish = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function deleteCheck(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishList.removeChild(li);
  const cleanChecks = finish.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finish = cleanChecks;
  saveFinish();
}

function checkToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishList.appendChild(li);
  // toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  const checkToDos = toDos.filter(function (toDo) {
    return toDo.id === parseInt(li.id);
  });
  toDos = cleanToDos;
  finish.push(checkToDos);
  saveToDos();
  saveFinish();
}

function backToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.appendChild(li);
  // toDoList.removeChild(li);
  const cleanChecks = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  const backToDos = toDos.filter(function (toDo) {
    return toDo.id === parseInt(li.id);
  });
  toDos.push(backToDos);
  finish = cleanChecks;
  saveToDos();
  saveFinish();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveFinish() {
  localStorage.setItem(FINISH_LS, JSON.stringify(finish));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  checkBtn.innerText = "✔";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.addEventListener("click", checkToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function paintFinish(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  checkBtn.innerText = "❎";
  delBtn.addEventListener("click", deleteCheck);
  checkBtn.addEventListener("click", backToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  finishList.appendChild(li);
  const finishObj = {
    text: text,
    id: newId
  };
  finish.push(finishObj);
  saveFinish();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function loadToFinish() {
  const loadedFinish = localStorage.getItem(FINISH_LS);
  if (loadedFinish !== null) {
    const parsedFinish = JSON.parse(loadedFinish);
    parsedFinish.forEach(function (check) {
      paintFinish(check.text);
    });
  }
}

function init() {
  loadToDos();
  loadToFinish();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
