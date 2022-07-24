function addTask(){
    //localStorage
    //sessionStorage
    //tuple - key/value
    
    //set item (key,value) in localStorage
    localStorage.setItem("name","Amital Mindali");
    //if key already exists in localStorage it will be overwritten
    localStorage.setItem("name","Amital Mindali");
    //if the localStorage dont have the key, it will create a new one
    localStorage.setItem("Best student in class","Chaya");
    //if we want delete a key from localStorage, we need to remove it from localStorage
    //localStorage.removeItem("Best student in class");
    //clear all localStorage
    localStorage.clear();


    localStorage.setItem("myData","zeev|mindali");
    var userName = localStorage.getItem("myData").split("|");
    console.log("Hello "+userName[0]+" "+userName[1]);
    console.log("data was added");
}

function smartAdd(){
    let userName = {name:"zeev",lastName:"mindali",bd:"08/07/1974"};
    //alert (userName.bd);
    let newTask = {taskName:"clean the hose",date:"24/07/2022",time:"12:00"};
    //calling to single item from literal object
    console.log(newTask.taskName);
}

function projectAdd(){
    // let myTask = document.getElementById("taskName");
    // let myDate = document.getElementById("taskDate");
    // let myTime = document.getElementById("taskTime");
    // let newTask = {taskName: myTask.value, taskDate: myDate.value, taskTime: myTime.value};
    // localStorage.setItem("tasks",newTask);
    // console.log(newTask);
    let task = localStorage.getItem("tasks");
    let newTask = {taskName: task.taskName, taskDate: task.taskDate, taskTime: task.taskTime};
    console.log(newTask);
}

function projectAddOld(){
    // let myTask = document.getElementById("taskName");
    // let myDate = document.getElementById("taskDate");
    // let myTime = document.getElementById("taskTime");
    // let myCounter = Number(localStorage.getItem("counter"));
    // //console.log(myCounter);
    // if (myCounter==null){
    //     localStorage.setItem("counter",0);
    // } else {
    //     localStorage.setItem("counter",myCounter+=1);
    // }
    // localStorage.setItem(myCounter,myTask.value+"|"+myDate.value+"|"+myTime.value);
    // console.log(localStorage.getItem(counter));    

    console.log(localStorage.getItem(16));
    localStorage.removeItem(5);
}

function projectAdd(){
    let myTask = document.getElementById("taskName");
    let myDate = document.getElementById("taskDate");
    let myTime = document.getElementById("taskTime");
    let myCounter = Number(localStorage.getItem("counter"));
    console.log(myCounter);
    if (myCounter==null){
        localStorage.setItem("counter",0);
    } else {
        localStorage.setItem("counter",myCounter+=1);
    }
    //object literal - JSON->JavaScript Object Notation
    let task = {
        taskName: myTask.value, 
        taskDate:myDate.value, 
        taskTime:myTime.value 
    }

    //take the literal object(JSON) and convert it to string
    localStorage.setItem(myCounter,JSON.stringify(task));
}

//get the task after stringify
function getProject(){
    //take the string and convert it back to JSON
    let myTask = JSON.parse(localStorage.getItem(1));
    console.log(myTask);
    console.log(myTask.taskName);
}