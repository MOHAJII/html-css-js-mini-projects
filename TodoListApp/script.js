const inputBox = document.querySelector('.row input');
const buttonBox = document.querySelector('.row button');
const listTasks = document.getElementById('list-task');

const apikey = "90d22d75a53769254bffce8c5577390f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


buttonBox.addEventListener("click", () => {
    if (inputBox.value) {
        const task = inputBox.value;
        const li = document.createElement('li');
        li.innerHTML = task;
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        listTasks.appendChild(li);
    } else {
        alert("Please enter a task!");
    }
    inputBox.value = "";
    saveData;
})

listTasks.addEventListener("click", (e) => {
    if(e.target.tagName.toLowerCase() === 'li') {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName.toLowerCase() === 'span') {
        e.target.parentElement.remove();
    }
    saveData();
})

const saveData = () => {
    localStorage.setItem('savedTasks', listTasks.innerHTML);
}

const showData = () => {
    listTasks.innerHTML = localStorage.getItem('savedTasks');
}

showData();