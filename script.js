const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('container-list');

document.querySelector('.box button').addEventListener('click', addTask);
listContainer.addEventListener('click', handleListClick);
document.addEventListener('DOMContentLoaded', showTask);

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        createTask(inputBox.value);
        inputBox.value = '';
        saveData();
    }
}

function createTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const span = document.createElement("span");
    span.textContent = '\u00D7';
    span.classList.add("close");
    li.appendChild(span);

    listContainer.appendChild(li);
}

function handleListClick(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}
