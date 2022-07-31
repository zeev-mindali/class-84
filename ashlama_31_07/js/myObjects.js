//pointer to our html elements
let taskName = document.getElementById("taskName");
let taskDate = document.getElementById("taskDate");
let taskTime = document.getElementById("taskTime");

const task = {
    //Fields
    taskName : "",
    taskDate : "",
    taskTime : "",
    //Methods
    saveData : saveTasks(),
    loadData : loadTasks(),
}