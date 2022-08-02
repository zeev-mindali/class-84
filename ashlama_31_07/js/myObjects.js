//pointer to our html elements
let taskName = document.getElementById("taskName");
let taskDate = document.getElementById("taskDate");
let taskTime = document.getElementById("taskTime");

//load the data each time we load the browser (page)
function init(){
    userTask.loadTasks();
    console.log(userTask.allTasks);
}

//structure of single task
const task = {
    //Fields
    taskName : "",
    taskDate : "",
    taskTime : "",
    taskDone : false,
}

const userTask = {
    //Fields
    allTasks : [], //collection of tasks

    //methods
    saveTasks: ()=>{        
        localStorage.setItem("tasks",JSON.stringify(userTask.allTasks));
    },
    loadTasks: ()=>{
        userTask.allTasks = JSON.parse(localStorage.getItem("tasks"));
    },
    addTask : (newTask)=>{       
        userTask.allTasks.push(newTask);
        userTask.saveTasks();
    },
    doneTasks : ()=>{
        return {...allTasks}.filter(item => item.taskDone==true);
    },
    notDoneTasks : ()=>{
        return {...allTasks}.filter(item => item.taskDone==false);
    },
    helloGal : ()=>{return "Gal is in the house...."},
}

