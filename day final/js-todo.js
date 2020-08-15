const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
finishList = document.querySelector(".js-finishList"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "PENDING";
const FINISH_LS = "FINISHED";

let PENDING = [];
let FINISHED = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = PENDING.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  PENDING = cleanToDos;
  saveToDos();
}

function deleteCheck(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishList.removeChild(li);
  const cleanChecks = FINISHED.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  FINISHED = cleanChecks;
  saveFinish();
}

function checkToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = PENDING.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  PENDING = cleanToDos;
  saveToDos();
  paintFinish(li.childNodes[0].innerText);
}

function backToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishList.removeChild(li);
  const cleanChecks = FINISHED.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  FINISHED = cleanChecks;
  saveFinish();
  paintToDo(li.childNodes[0].innerText);
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(PENDING));
}
function saveFinish() {
  localStorage.setItem(FINISH_LS, JSON.stringify(FINISHED));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = PENDING.length + 1;
  delBtn.innerText = "❌";
  checkBtn.innerText = "✅";
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
  PENDING.push(toDoObj);
  saveToDos();
}

function paintFinish(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = PENDING.length + 1;
  delBtn.innerText = "❌";
  checkBtn.innerText = "🔙";
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
  FINISHED.push(finishObj);
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
