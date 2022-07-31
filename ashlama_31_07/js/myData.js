let myTasks = [];

//local storage -> stringfy json.parse
function saveTasks(){
    myTasks.push(newTask);
    localStorage.setItem("myTasks",JSON.stringify(myTasks));
    //ajax
    //mongoDB
    //mySQL
}

function loadTasks(){
    myTasks = JSON.parse(localStorage.getItem("myTasks"));
}
