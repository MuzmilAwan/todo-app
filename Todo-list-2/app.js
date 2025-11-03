const inpField = document.querySelector("#task-input");
const TaskList = document.querySelector("#task-List");

function addTask() {
    if (inpField.value === "") {
        alert("Enter a task");
    }
    else {
        const newLi = document.createElement("li"); 
        newLi.innerHTML = inpField.value + `<span class="delete-btn">\u00d7</span>`; 
        TaskList.appendChild(newLi);

    }
    inpField.value = "";
    saveData();
}

TaskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('completed');
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", TaskList.innerHTML);
}

function showData(){
    TaskList.innerHTML = localStorage.getItem("data");
}
showData();



